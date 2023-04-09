---
layout: '@layouts/DocsPage.astro'
title: Host Import (Amethyst)
description: Host Import (Amethyst)
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardWarning from '@components/CardWarning.astro'
---

# IAmethystHost Import

<CardInfo title="Preview content!">
Both the plugin contract and Amethyst itself are still in the Technical Preview stage, and you may 
need to manually update your plugins to work with the latest version of Amethyst. 
We'll try to keep the API backward-compatible as much as we can, though.
</CardInfo>

### Importing `IAmethystHost`
By importing the `IAmethystHost` interface and using it, **plugins can also request other data from their host**, 
and invoke functions within Amethyst itself. You can acquire various runtime configuration variables, request 
a **reload of your plugin's interface and status**, or even stop the update loop for a moment via a scoped lock.

<CardWarning title="Importing IAmethystHost">
Though it may appear possible to import the `IAmethystHost` extension from any (even a non-exported class), 
the import will not be met in that case. That is because the host is exported for each plugin
completely separately, and may only be imported from a valid, exported plugin. To use the host
in child classes, you can either forward it, or set up events. [You can find an example here.](https://github.com/KinectToVR/plugin_openvr)
</CardWarning>

Sample import declaration of the `IAmethystHost` interface:
```c#
[Export(typeof(IServiceEndpoint))]
[ExportMetadata("Name", "SampleService")]
[ExportMetadata("Guid", "SCONTOSO-AME2-APII-SNDP-DVCESMPLSNDP")]
public class SampleService : IServiceEndpoint
{
    [Import(typeof(IAmethystHost))] private IAmethystHost Host { get; set; }
    ...
}
```

### Host properties
Other, helper properties are used to indicate both the state and the usage of a device. You can opt-out of
automatic `Update()` calls or opt-in to flip support, assuming your device provides a proper head joint.

| Host property | What is it used for? |
| ----------------- | ------------------ |
| `AppJointPoses` | Helper to get all joints' positions from the app, which are added in Amethyst. Note: if joint's off, its trackingState will be `ITrackedJointState::State_NotTracked`. Note: [AppJointPoses] will always be returned raw and without tweaks/offsets if need the final ones, please consider writing an IServiceEndpoint. |
| `HmdOrientationYaw` | Get the raw HMD yaw from the current service endpoint. Note: or 0 if the current service doesn't provide one. |
| `HmdPose` | Get the raw HMD pose from the current service endpoint or (zero, identity) if the service doesn't provide one. |
| `LanguageCode` | Currently selected 2-letter language code in Amethyst, e.g. `en`, `de`, `ja` |
| `DocsLanguageCode ` | Currently selected 2-letter language code in Amethyst (web) Docs, e.g. `en`, `de`, `ja` |
| `PluginSettings` | Get/Set a serialized object from/to the plugin settings. Access either via GetSetting (pass the desired Type, and optionally the fallback value for) or SetSetting. Types you save must either be serializable by `ToString()` or the Newtonsoft.Json (JSON.NET) serialization library. |
| `UpdateThreadLock` | Lock the main update loop while in scope with [lock (UpdateThreadLock) { }] This will block AME from updating while locked, and also wait for when the lock is available => multiple plugins can never lock it at the same time! |

<CardWarning title="HmdPose and HmdOrientationYaw">
This is got from the selected *Service* providing the `HeadsetPose` property, as used by Amethyst to execute Automatic Calibration and additionally, 
by some devices to calculate their poses HMD-wise (or .Zero, .Identity if the selected *Service* returns null as for the requested VR HMD/Head pose).
`HmdOrientationYaw` is a flat-projected yaw of the HMD's orientation, and of course in Radians.
</CardWarning>

### Host methods
Device methods are used by Amethyst to control the device and call events on it.

| Host method | What is it used for? |
| ----------------- | ------------------ |
| `GetHookJointPose(bool)` | Get the hook joint pose (typically Head, fallback to .First()) of the currently selected base tracking device (no overrides!) Mark [calibrated] as [true] to get the calibrated joint pose. Note: [AppJointPoses] will always be returned raw and w/o tweaks/offsets if need the final ones, please consider writing an IServiceEndpoint |
| `GetTransformJointPose(bool)` | Get the pose of the relative transform origin joint (typically Waist, fallback to `.First()`, then default) of the currently selected base device (no overrides!) Mark [calibrated] as [true] to get the calibrated pose. Note: [AppJointPoses] will always be returned raw and without tweaks/offsets if need the final ones, please consider writing an IServiceEndpoint |
| `IsTrackedJointValid(TrackedJointType)` | Check if the base tracking device provides a joint with the selected role. Note: this only applies to the tracking device set as base, not overrides. |
| `Log(string \| object, LogSeverity)` | Log a message to Amethyst logs : handler, prepends your plugin's `Guid` as a decoration |
| `PlayAppSound(SoundType)` | Play a sound from Amethyst's resources |
| `RefreshStatusInterface` | Request a refresh of the status/name/etc. interface, rebuild joints and their settings. Use wisely, may temporarily slow down body tracking. |
| `RequestLocalizedString(string)` | Request a string from AME resources, empty for no match. Warning: The primarily searched resource is the device-provided one! |
| `SetLocalizationResourcesRoot(string)` | Request a folder to be set as device's AME resources, you can access these resources with the lower function later (after onLoad) Warning: Resources are containerized and can't be accessed in-between devices! Warning: The default root is "[plugin_folder_path]/resources/Strings"! |
| `DisplayToast(Tuple(string, string))` | Show a Windows Desktop toast notification |
| `RequestExit(string, bool)` | Request an application exit, non-fatal by default. Mark fatal as true to show the crash handler with your message |
