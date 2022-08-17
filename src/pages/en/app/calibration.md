---
layout: '@layouts/DocsPage.astro'
title: How to calibrate
description: Instructions on using automatic and manual calibration in Amethyst
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardWarning from '@components/CardWarning.astro'
  import Automatic from '@icons/calibration_automatic.astro'
  import Manual from '@icons/calibration_manual.astro'
---
# How to calibrate
<CardInfo title="This is about Amethyst calibration!">
Calibrating the Amethyst trackers to your VR playspace is separate from in-game full-body tracking calibration in games like VRChat or NeosVR.  
<br>
**For VRChat,** either refer [to the official documentation](https://docs.vrchat.com/docs/full-body-tracking#using-full-body-tracking-in-vrchat) or simply, **line up the spheres, and press both triggers.**
</CardInfo>

## Calibrating Amethyst
After connecting the trackers to SteamVR, and making sure your device's tracking is in order, click on the **Begin Calibration** button located in the General page of the app.

This will open a panel for you to choose your calibration mode.

Amethyst comes with two calibration modes, Automatic and Manual. **Depending on the device, it is possible that only manual calibration will be available** (For example, if calibrating PSMoveServiceEx).

<CardWarning title="You must wear your VR headset to calibrate">
Calibration serves to **line up** the Amethyst tracking space with that of your VR headset. It's unrelated to improving the tracking quality from your device. [Check this page](improve-tracking) for more information on improving your tracking quality.
</CardWarning>

### <Automatic /> Automatic calibration
This mode involves calculating the offset between the Amethyst and the SteamVR playspaces, based on the alignment of the skeleton tracking's head bone and your VR headset. Then the calibration points are averaged together to improve the precision of the result.

There is a setting to change the number of **calibration points**. Note that this is **not related to the number of trackers.** Instead it defines how many positions are going to be captured to average your alignment from.

###### Using automatic calibration
- Put on your VR headset.
- Make sure the sensor can track you properly, and your head is tracked.
- Click on Begin Calibration.
- Two countdowns will happen for each position:  
  First you will be given time to move to a new spot and then get into position.  
  Then the second countdown gives you time to stay still for the capture.  
  **You must face the sensor during all position captures.**  
  Finally, that position is captured.  
- Once all positions are done, calibration is complete.

<br>

###### If automatic calibration fails
Try again, tracking glitches can cause the captured position to be off from where it should be. Increasing the number of points is helpful to avoid those problems.

### <Manual /> Manual calibration
This mode involves lining up the tracking space of Amethyst manually using VR controls.
Those controls are shown in the app. Though, they won't match if you change them via the SteamVR bindings menu.

<CardWarning title="Manual calibration is not always your friend!">
Whenever available, **automatic calibration will yield better results in a proper setup.** Manual calibration is prone to human error, and should only be used when necessary.
</CardWarning>

###### Using manual calibration

<CardInfo title="About Vive and Index controllers">
When using Vive "wand" controllers and Index "knuckle" controllers, the grip and trigger controls' roles are swapped to make fine-tuning and confirming easier.
</CardInfo>

- Put on your VR headset and grab your controllers.
- **Without any game running**, click on Manual in the calibration mode screen.
- Take note of the controls, then **close the SteamVR dashboard** by clicking outside of it. You should see nothing but the empty void with the circles on the ground.
- I recommend first placing the trackers slightly to your right to adjust that rotation.
- Don't forget: holding the left grip button will slow down your move/rotate controls so you can make fine adjustments.
- After lining up the trackers to your body, take a step forward and check if they still line up.
- If they don't, adjust the left joystick rotation until they do again, and they should still be good when walking back.
- Once you're happy with the calibration, **hold both triggers to confirm and save.**