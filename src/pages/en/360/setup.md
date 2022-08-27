---
layout: '@layouts/DocsPage.astro'
title: Setting up your Xbox 360 Kinect
description: How to place your kinect, connect it to your computer and install the drivers for it
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardWarning from '@components/CardWarning.astro'
---
# Setting up your Xbox 360 Kinect
### Placing the Kinect
Before going any further, you should make sure your Kinect is in a good spot to track you.

<CardWarning title="Tracking quality and placement">
Tracking quality is heavily dependent on the placement of the Kinect. The distance and angle of the sensor in relation to where you're going to stand when playing plays a major role in the confidence of the skeleton tracking SDK. [More on this subject here.](/en/app/improve-tracking)
</CardWarning>

![Kinect Placement](/shared/img/room_render_wide.png)
The Kinect should be at **the edge of where you're going to play** in VR, so that you can be facing it.

A **minimum distance of 1.5 meters (5 feet)** is required for tracking to function. But you should be able to **stand about 2 meters (6.5 feet) away for the best experience.**

Height-wise, **put the Kinect at around eye level.** It depends on how tall you are and how big your room is. But generally, it should be **high up, pointing down.** Never pointing up, it wasn't made to track like that.

### Connecting it to your computer
Using [the adapter](/en/buying-kinect#5), connect the sensor to a power outlet, and to your computer. **Avoid USB hubs or extensions**, as they can degrade the signal quality and data transfer speed of the Kinect, causing various errors.

### Installing the drivers
<CardInfo title="Automatic driver installation">
When using Amethyst Installer, the Kinect for Windows SDK will be automatically installed, and the installer will attempt to fix any possible software problems with the driver.
</CardInfo>

Kinect for Xbox 360 and Kinect for Windows V1 requires the Kinect for Windows SDK v1.8 to function. **1.8 is the last version for 360. 2.0 is for Xbox One.**

|Package                    |Description    |
|---------------------------|---------------|
|[Kinect for Windows Runtime v1.8](https://www.innersloth.com/games/among-us/)|Includes skeleton tracking and libraries, **but only supports Kinect for Windows.**|
|[Kinect for Windows SDK v1.8](https://download.microsoft.com/download/E/1/D/E1DEC243-0389-4A23-87BF-F47DE869FC1A/KinectSDK-v1.8-Setup.exe) (Download this one)|Includes everything the runtime does, **adds support for Xbox Kinect.** And headers for development.|
|[Kinect for Windows Developer Toolkit v1.8.0](https://download.microsoft.com/download/D/0/6/D061A21C-3AF3-4571-8560-4010E96F0BC8/KinectDeveloperToolkit-v1.8.0-Setup.exe)|This one is optional. A bunch of developer samples, including Kinect Explorer, which lets you see the Kinect's camera feed to better place it. **It requires the SDK to be installed first.**|

<CardWarning title="SDK 2.0 conflict">
If you have installed the Kinect for Windows SDK v2.0, you may run into issues trying to install v1.8. If the installation fails, try to remove that if it's present on your system.
</CardInfo>