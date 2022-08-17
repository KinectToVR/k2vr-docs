---
layout: '@layouts/DocsPage.astro'
title: App Overview
description: Detailed view of each page of the Amethyst application
setup: | 
  import CardNoIcon from '@components/CardNoIcon.astro'
  import TableOfContents from '@components/TableOfContents.astro'
  import Accordion from '@components/Accordion.astro'
---
# App Overview
This page will go over the various features and options in each tab of Amethyst.

### General
![amethyst general tab](/en/img/amethyst-general-tab.png)

<Accordion title="General Tab Controls">
|Control                    |Description                                                                                                                                                                                                                  |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Connect/Disconnect Trackers|Spawn or despawn emulated trackers in SteamVR.                                                                                                                                                                               |
|Begin Calibration          |Open the calibration flyout to pick a calibration mode.                                                                                                                                                                      |
|Adjust Offsets             |Open the offsets flyout to change individual tracker positions and rotation values. (Only use for minor adjustments post-calibration.)                                                                                       |
|Hide Skeleton              |Hide the skeleton tracking preview.                                                                                                                                                                                          |
|Force Preview              |Enable to keep the skeleton preview always on.                                                                                                                                                                               |
|Freeze                    |Freeze the trackers in VR without despawning them, this allows you to keep otherwise hard to maintain poses. Clicking the dropdown next to it allows you to freeze only the lower body trackers, keeping your elbows tracked.|
|Current Device             |Your current base device for tracking.                                                                                                                                                                                       |
|Override Device            |If applicable, the device currently set as an override on top of the base.                                                                                                                                                   |
|Status                     |Shows the status of the device or driver and alerts you of any problems. If multiple items are having problems, only one will be shown until it is fixed in the following order: Driver > Base Device > Override Device      |
|View Online Docs           |Opens this documentation to the relevant page when possible.                                                                                                                                                                 |
|Get help on Discord        |Opens a link to the Discord server where you can ask for help.                                                                                                                                                               |
|SteamVR Driver             |Status of the SteamVR driver for Amethyst.                                                                                                                                                                                   |
|Amethyst Version           |Current version of the software.                                                                                                                                                                                             |
</Accordion>

### Settings
![amethyst settings tab](/en/img/amethyst-settings-tab.png)

<Accordion title="Settings Tab Controls">
|Control                                                |Description                                                                                                                                                                                                                                                                    |
|-------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Mirror trackers when turning away from the Kinect      |Due to limitations of the Kinect SDK, the skeleton tracking can't make the difference between your front and back. So you can mirror the tracking based on the direction your head is facing. Disable this option if you're having issues with looking back over your shoulder.|
|Use external waist tracking data instead of the Headset|Use external waist tracking data, e.g. Vive Tracker, owoTrack for skeleton flip. This is more reliable and responsive than using the headset if the option is available to you. Clicking the arrow next to it will allow you to calibrate the forward orientation.             |
|Tracker Configuration                                  |Each dropdown has a toggle that allows you to enable or disable sets of trackers. You need to restart SteamVR when making changes for them to propagate properly.                                                                                                              |
|Position Tracking Filter                               |Allows you to change the filtering used for the position data of the joints associated with that set of trackers. It doesn't affect rotation, only XYZ translation movement.                                                                                                   |
|Rotation Tracking                                      |Allows you to choose which type of joint rotation you want to use for each tracker set. Some may have different settings than others, e.g. feet have Software-Calculated Rotation.                                                                                             |
|Restart SteamVR                                        |Click this once you make any changes for them to be properly applied.                                                                                                                                                                                                          |
|Automatically connect enabled trackers at launch       |Amethyst will auto-connect trackers when it is opened either by you or automatically by SteamVR if you configured it that way.                                                                                                                                                 |
|Enable app sounds                                      |Enable or disable UI sounds that play during calibration, and other various events.                                                                                                                                                                                            |
|Volume slider                                          |Adjust the volume of UI sounds                                                                                                                                                                                                                                                 |
|Delete configuration and restart                       |Deletes the configuration and calibration files in `%appdata%\Amethyst` and restarts the app.                                                                                                                                                                                  |
|Re-register SteamVR driver entry                       |Add or re-add the Amethyst SteamVR driver path to the `%localappdata%\openvr\openvrpaths.vrpath` file.                                                                                                                                                                         |
|Reinstall SteamVR manifests                            |Add or re-add the SteamVR overlays startup entry for Amethyst to allow you to have it startup automatically with SteamVR. Clicking the arrow next to it will give you the option to enable it from within Amethyst.                                                            |
</Accordion>

### Devices and overrides
![amethyst devices tab](/en/img/amethyst-overrides.png)

<Accordion title="Devices Tab Controls">
|Control|Description|
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
|Devices           |Lists all of the currently loaded Amethyst plugins.                                                                                                  |
|Currently Tracking|Shows the current selected device plugins for the base and override.                                                                                 |
|Status            |Shows the status of the device or plugin, and shows detailed error messages when errors happen.                                                      |
|Reconnect         |Allows you to reload/refresh the device or plugin state. Clicking the dropdown will allow you to disconnect the plugin completely if it is connected.|
|View Docs         |Opens this documentation to the relevant page when possible.                                                                                         |
|Join Discord      |Opens a link to the Discord server where you can ask for help.                                                                                       |
|Set Device as...  |Allows you to pick a device as base or override.                                                                                                     |
|Overrides         |Lists all the supported trackers from the base device and allows you to configure which joints are affected.                                         |
</Accordion>

If you wish to learn more about overrides go [over here](app/overrides).