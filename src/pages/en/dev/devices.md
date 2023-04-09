---
layout: '@layouts/DocsPage.astro'
title: Tracking Devices (Providers)
description: Tracking Devices (Providers)
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardWarning from '@components/CardWarning.astro'
---

# Tracking Devices

<CardInfo title="Preview content!">
Both the plugin contract and Amethyst itself are still in the Technical Preview stage, and you may 
need to manually update your plugins to work with the latest version of Amethyst. 
We'll try to keep the API backward-compatible as much as we can, though.
</CardInfo>

### Plugins implementing `ITrackingDevice`
As you already know, to provide tracking data to Amethyst, you need to export a plugin implementing
the `ITrackingDevice` interface, and exporting it with proper attached MEF metadata.

### Feeding Amethyst with your data
**The main principle of Amethyst device plugins** is the `ObservableCollection` of `TrackedJoint` objects,
named `TrackedJoints`, which is **used to provide the tracking data to Amethyst**. You need to populate
this collection with the joints you want to track, and update their values as you receive them from
the device you're handling (on each `Update()` call, either by Amethyst or manually). Each `TrackedJoint`
has a name and a role, `TrackedJointType`.

The `TrackedJointType` enum is used to define the role of the joint, and is used by Amethyst to
auto-assign selected joints to their respectable trackers. **All of the skeleton MS Kinect V2 provides
is covered**, and **for joints you don't know which role to assign, we have a special `JointManual` role**.
It will stop Amethyst from auto-assigning the joint to any suitable tracker, and show a picker instead.
Only the **devices providing a `JointHead` joint will be allowed to use the Automatic Calibration within Amethyst.**

`TrackedJoint`s can provide physics for connected *Services* to run appropriate calculations on.
To use it, you will need to set your device's `IsPhysicsOverrideEnabled` to `true` and feed the joints with physics data.

<CardInfo title="Joint auto-assignment">
For each selected *Base* tracking device and currently selected *Service*, Amethyst will try to find such
a joint in your exported device that satifies each supported tracker type in the service. If it doesn't find
a suitable joint, a manual picker will be shown in the Devices tab, under the *Base* tracking device section.
You may mark all your joints as `Manual` and force the user to pick them manually, though. (Relieving, innit?)
Also, *Overrides* don't use this assignment system, and don't really need it.
</CardInfo>

<CardWarning title="Order your joints!">
Note this only applies to joints with `JointManual` role, you should read this if you're going to use the `JointManual` role.
Amethyst uses relative joint indexing, taking their IDs from the `TrackedJoints` list. This means that
each time you append joints to the list, you need to make sure they're in the exact same order as previously.
Otherwise, Amethyst may get confused and reset a particular tracker to the first joint, requiring a manual re-assignment.
</CardWarning>

### Device states
Each device plugin has various properties used to indicate its state, and provide more information about.
**The most important ones are `DeviceStatus`**, used to indicate the current state of the device (`0` for success)
**and `IsSkeletonTracked`**, used to indicate whether the device is currently tracking the user or not.

To enrich the experience, plugins are also to **provide a stringized version of their statuses**, under the
`DeviceStatusString` property. This is used to display the status of the device, and **must have the following format**:
```
Not Defined\nE_NOT_DEFINED\nStatus message not defined!
  header^  \n    code^    \n        message^
```

To help your users **understand the error better**, or to **provide handling** for it, you can **set `ErrorDocsUri` to a custom Uri**.
The link will be launched by Amethyst when the user clicks the 'View Docs' button in the status message.
Note this is an Uri, so it supports custom protocols, for example `ms-settings:` or `host://something` and any valid Uri's.
Amethyst will use `LaunchUriAsync` to open your link, so **make sure it's valid and there exists a valid an app to handle it**.

### Device properties
Other, helper properties are used to indicate both the state and the usage of a device. You can opt-out of
automatic `Update()` calls or opt-in to flip support, assuming your device provides a proper head joint.

| Device property | What is it used for? |
| ----------------- | ------------------ |
| `IsInitialized` | Check if the device has been tried to be initialized by Amethyst (not if it's working!) You probably want to set this to `true` on `Initialize()` and reset back to `false` on `Shutdown()` |
| `IsSkeletonTracked` | Whether the device sees the user and tracks their body. To indicate a single joint isn't being tracked properly, set its `TrackingState` accordingly. |
| `IsPositionFilterBlockingEnabled` | You can block pose filtering of trackers your device is used to feed data to within Amethyst. Suitable if you have your own filtering or use joint physics. |
| `IsPhysicsOverrideEnabled` | Used to indicate your device will provide joints which contain complex physics data, used by *Services* like OpenVR to run their advanced pose prediction on. |
| `IsSelfUpdateEnabled` | Set this to `true` if you want to stop Amethyst from calling `Update()` on your device, and update everything on your own instead. |
| `IsFlipSupported` | If your device can't tell whether the user is facing it or not, and wish to support skeleton flip (mirrored tracking), please set this to `true`. |
| `IsAppOrientationSupported` | Enable additional feet orientation options by setting this property to `true`. You will need to provide foot tip, foot, and knee joints. |
| `IsSettingsDaemonSupported` | If you want to provide custom settings interface, displayed underneath the device, set this property to `true`. You'll need to push a XAML `Page` to the `SettingsInterfaceRoot` object. |
| `SettingsInterfaceRoot` | Applicable only when `IsSettingsDaemonSupported` is enabled. Holds a XAML Page (`Microsoft.UI.Xaml.Controls.Page`) of your device settings. [Example here (`OnLoad()`)](https://github.com/KinectToVR/plugin_KinectV1/blob/main/plugin_KinectV1/KinectV1.cs) |
| `DeviceStatus` | Device status code, set to `0` to indicate success. |
| `DeviceStatusString` | Stringized status, must have format similar to `{Title}\n{Code}\n{Message}` |
| `ErrorDocsUri` | The link to launch when 'View Docs' is clicked while the device is reporting a status error. Supports custom protocols, e.g. "host://link" |

### Device methods
Device methods are used by Amethyst to control the device and call events on it.

| Device method | What is it used for? |
| ----------------- | ------------------ |
| `OnLoad` | Called when the plugin has just been loaded, and on each recompose. You probably want to update your settings interface here (if you provide any). |
| `Initialize` | Used to initialize/turn on the device plugin. May be called both automatically and manually, without any `Shutdown` calls prior to. |
| `Shutdown` | Used to shudown/turn off the device plugin, called on exit. May be called both automatically and manually, without any `Initialize` calls prior to. |
| `Update` | Called each internal update loop iteration, unless you opt-out by setting `IsSelfUpdateEnabled` to true. |
| `SignalJoint(int)` | Requests a signal of a device joint, from the `TrackedJoints` collection. Can be ignored if not supported. |
