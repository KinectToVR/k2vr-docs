---
layout: '@layouts/DocsPage.astro'
title: Service Endpoints (Receivers)
description: Service Endpoints (Receivers)
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardWarning from '@components/CardWarning.astro'
---

# Service Endpoints

<CardInfo title="Preview content!">
Both the plugin contract and Amethyst itself are still in the Technical Preview stage, and you may 
need to manually update your plugins to work with the latest version of Amethyst. 
We'll try to keep the API backward-compatible as much as we can, though.
</CardInfo>

### Plugins implementing `IServiceEndpoint`
To receive tracking data to Amethyst, you need to export a plugin implementing the `IServiceEndpoint` interface, and export it with proper attached [MEF metadata](overview#4).

### Receiving data from Amethyst
Amethyst sends the processed tracking data to the currently selected *Service* using its `UpdateTrackerPoses` method.
This method is called after each *Device* is updated with its `Update()` call, and the received data is processed.
Upon spawning the selected trackers, Amethyst will call `SetTrackerStates` with a collection of the applicable trackers.
Each time, the function will be called once, or 3 to 5 times periodically. The `TestConnection` method of your service
will be used to check the approximate service delay, and the internal service connection status.

<CardInfo title="Supported trackers">
Currently, all trackers which OpenVR supports are the officially supported ones. (One-for-each-role)
The ones supported by default are only feet and waist though. To enable support for more trackers, populate
the `AdditionalSupportedTrackerTypes` property with all the applicable `TrackerType`s. [Example (`AdditionalSupportedTrackerTypes =>`)](https://github.com/KinectToVR/plugin_OpenVR/blob/main/plugin_OpenVR/OpenVR.cs)
Unsupported trackers will be disabled and blocked from user interactions.
</CardInfo>

### Setting tracker states (`SetTrackerStates`)
`SetTrackerStates` will be called to set states of all the enabled trackers (within the supported ones),
and from time to time while Amethyst is running. This method is a `Task`, so make sure to either return
a `Task` builder for it, or implement it as an `async Task` (and then like a standard declared function).

Sample declaration assuming implementation as an `async Task`:
```c#
public async Task<IEnumerable<(TrackerBase Tracker, bool Success)>> SetTrackerStates(
    IEnumerable<TrackerBase> trackerBases, bool wantReply = true)
{
    ...
```

Trackers to set state of will be provided in the `trackerBases` collection.
The `wantReply` argument is there yo save your time ―　if Amethyst doesn't want any confirmation,
it will allow you to return `null` from this function. Otherwise, make sure to return a collection
of tuples of the tracker you've received, paired with the result of the set you've just made.
There must be as many returned tuples as there is sent trackers, see a sample [here (`SetTrackerStates(`)](https://github.com/KinectToVR/plugin_OpenVR/blob/main/plugin_OpenVR/OpenVR.cs).

### Updating tracker poses (`UpdateTrackerPoses`)
`UpdateTrackerPoses` will be called to update poses of all the enabled trackers (within the supported ones),
each update loop while Amethyst is running and trackers are turned on (initialized). This method is a `Task`, 
so make sure to either return a `Task` builder for it, or implement it as an `async Task` (and then like a standard declared function).

Sample declaration assuming implementation as an `async Task`:
```c#
public async Task<IEnumerable<(TrackerBase Tracker, bool Success)>> UpdateTrackerPoses(
    IEnumerable<TrackerBase> trackerBases, bool wantReply = true)
{
    ...
```

Trackers to update pose of will be provided in the `trackerBases` collection.
The `wantReply` argument is there yo save your time ―　if Amethyst doesn't want any confirmation,
it will allow you to return `null` from this function. Otherwise, make sure to return a collection
of tuples of the tracker you've received, paired with the result of the update you've just done.
There must be as many returned tuples as there is sent trackers, see a sample [here (`UpdateTrackerPoses(`)](https://github.com/KinectToVR/plugin_OpenVR/blob/main/plugin_OpenVR/OpenVR.cs).

### Testing connection (`TestConnection`)
`TestConnection` will be called to test the connection to the service, each time the service is set up or refreshed.
You will need to return a tuple of:
 - Status (`int`) ― the return code, of course `0` for success
 - Messgae (`string`) ― stringized status message (only saved in logs)
 - Ping Time (`long`) ― the ping time in `Ticks` (10000ths of a ms)

This method is a `Task`, so make sure to either return a `Task` builder for it, 
or implement it as an `async Task` (and then like a standard declared function).

### Service states
Each service plugin has various properties used to indicate its state, and provide more information about.
**The most important ones are `ServiceStatus`**, used to indicate the current state of the device (`0` for success)
**and `IsRestartOnChangesNeeded`**, used to indicate whether the service needs to be restarted after 
adding more trackers, after setting the state of the existing ones to connected (e.g. OpenVR needs this).

To enrich the experience, plugins are also to **provide a stringized version of their statuses**, under the
`ServiceStatusString` property. This is used to display the status of the device, and **must have the following format**:
```
Not Defined\nE_NOT_DEFINED\nStatus message not defined!
  header^  \n    code^    \n        message^
```

To help your users **understand the error better**, or to **provide handling** for it, you can **set `ErrorDocsUri` to a custom Uri**.
The link will be launched by Amethyst when the user clicks the 'View Docs' button in the status message.
Note this is an Uri, so it supports custom protocols, for example `ms-settings:` or `host://something` and any valid Uri's.
Amethyst will use `LaunchUriAsync` to open your link, so **make sure it's valid and there exists a valid an app to handle it**.

### Input actions (`ControllerInputActions`)
The `ControllerInputActions` property of type `InputActions` will be used by Amethyst (or not, if you set it to null)
to execute Manual Calibration, provide a way to quickly toggle selected settings, get controller data, and show selected
[TeachingTip](https://learn.microsoft.com/en-us/windows/apps/design/controls/dialogs-and-flyouts/teaching-tip)s.

| Class property | What is it used for? |
| ----------------- | ------------------ |
| `MovePositionValues` | Position move values during manual calibration (x, y, z) |
| `AdjustRotationValues` | Rotation adjust values during manual calibration (pitch, yaw) |
| `CalibrationModeChanged` | Fire this event to change the calibration mode pos/rot |
| `CalibrationConfirmed` | Fire this event to confirm manual calibration |
| `TrackingFreezeToggled` | Used to toggle freeze from another source, like input bindings/controllers/whatever else |
| `SkeletonFlipToggled` | Used to toggle skeleton flip from another source, like input bindings/controllers/whatever else |
| `TrackingFreezeActionTitleString` | [Title] Shown when tracking freeze is toggled manually, explains what to press to toggle it from here. Leave null or empty to skip showing anything. |
| `TrackingFreezeActionContentString` | [Text] Shown when tracking freeze is toggled manually, explains what to press to toggle it from here. Leave null or empty to skip showing anything. |
| `SkeletonFlipActionTitleString` | [Title] Shown when skeleton flip is toggled manually, explains what to press to toggle it from here. Leave null or empty to skip showing anything. |
| `SkeletonFlipActionContentString` | [Text] Shown when skeleton flip is toggled manually, explains what to press to toggle it from here. Leave null or empty to skip showing anything. |

### Service properties
Other, helper properties are used to indicate both the state and the usage of a device. You can opt-out of
automatic `Update()` calls or opt-in to flip support, assuming your device provides a proper head joint.

| Service property | What is it used for? |
| ----------------- | ------------------ |
| `IsSettingsDaemonSupported` | If you want to provide custom settings interface, displayed underneath the device, set this property to `true`. You'll need to push a XAML `Page` to the `SettingsInterfaceRoot` object. |
| `SettingsInterfaceRoot` | Applicable only when `IsSettingsDaemonSupported` is enabled. Holds a XAML Page (`Microsoft.UI.Xaml.Controls.Page`) of your device settings. [Example here (`OnLoad()`)](https://github.com/KinectToVR/plugin_KinectV1/blob/main/plugin_KinectV1/KinectV1.cs) |
| `ServiceStatus` | Service status code, set to `0` to indicate success. |
| `ServiceStatusString` | Stringized status, must have format similar to `{Title}\n{Code}\n{Message}` |
| `AdditionalSupportedTrackerTypes` | Used to check which tracker types are supported by the service (except for feet and waist, which are supported by default) |
| `IsRestartOnChangesNeeded` | Indicates whether the service needs to be restarted after adding more trackers, after setting the state of the existing ones to connected (e.g. OpenVR needs this) |
| `ControllerInputActions` | Used to get an instance of the service's controller input actions handler, please see upper for more details. |
| `AutoStartAmethyst { get; set; }` | Check or set if starting the service should auto-start Amethyst, this is only available for a few actual cases, like OpenVR. |
| `AutoCloseAmethyst { get; set; }` | Check or set if closing the service should auto-close Amethyst, this is only available for a few actual cases, like OpenVR. |
| `IsAmethystVisible` | Check if Amethyst is shown in the service dashboard or similar and block the skeleton preview to save system resources. Leave this as `true` if you have no actual way to check. |
| `TrackingSystemName` | Used by Amethyst to check what device is the servie outputting to. Example values are `VIVE`, `WMR`, defaults to `Oculus` |
| `HeadsetPose` | Get the absolute pose of the HMD, calibrated against the play space, return null if unknown to the service or unavailable. You'll need to provide this to support automatic calibration. |
| `ErrorDocsUri` | The link to launch when 'View Docs' is clicked while the service is reporting a status error. Supports custom protocols, e.g. "host://link" |

<CardWarning title="HeadsetPose property">
The `HeadsetPose` property is used by Amethyst to execute Automatic Calibration and additionally, by some devices to
calculate their poses HMD-wise. Set it to null if you have no way to check where the VR Headset it, just remember that
doing so will make Automatic Calibration unavailable. In such case, it's a good idea to provide proper `ControllerInputActions`.
This pose is also returned from `AmethystHost`'s `HmdPose` property getter (or .Zero, .Identity if you decide to return null).
</CardWarning>

<CardWarning title="ControllerInputActions property">
The `ControllerInputActions` property is used by Amethyst to execute Manual Calibration and additionally, to provide a quick
settings toggle option. Set it to null if you have no way to get this data, just remember that it will make Manual Calibration unavailable.
</CardWarning>

### Service methods
Device methods are used by Amethyst to control the device and call events on it.

| Service method | What is it used for? |
| ----------------- | ------------------ |
| `OnLoad` | Called when the plugin has just been loaded, and on each recompose. You probably want to update your settings interface here (if you provide any). |
| `Initialize` | Used to initialize/turn on the service plugin. May be called both automatically and manually, without any `Shutdown` calls prior to. |
| `Shutdown` | Used to shudown/turn off the service plugin, called on exit. May be called both automatically and manually, without any `Initialize` calls prior to. |
| `Heartbeat` | Called each internal update loop iteration, right after `Update` has been called on all applicable devices, but still before composing the final poses. |
| `DisplayToast(string)` | Implement if your service supports custom toasts, services like OpenVR can show internal toasts. Can be ignored if not supported. |
| `RequestServiceRestart(string, bool)` | Used by Amethyst to request your service to be restarted, or show a user-consent message it needs a restart. Return success?, or null if `wantReply` is `false`. |
| `GetTrackerPose(string, bool)` | Used by Amethyst to find an already-exisitng body tracker within your service and get its pose. Use `contains` to find trackers with role/serial containing the passed key, `canBeFromAmethyst` is used to indicate whether the tracker may be of Amethyst's. Return null if not supported. |
