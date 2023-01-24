---
layout: '@layouts/DocsPage.astro'
title: Setting up the Amethyst OSC plugin for Quest
description: Step-by-step instructions on setting up Amethyst and VRChat on Quest to use full-body tracking on OSC.
setup: | 
  import CardNoIcon from '@components/CardNoIcon.astro'
  import CardTip from '@components/CardTip.astro'
  import CardInfo from '@components/CardInfo.astro'
  import CardWarning from '@components/CardWarning.astro'
  import Accordion from '@components/Accordion.astro'
  import LinkButton from '@components/LinkButton.astro'
  import CardError from '@components/CardError.astro'
---
# Setting up the Amethyst OSC plugin for Quest
### Before you go any further, please join our Discord at https://discord.gg/YBQCRDG

<CardWarning title="This guide is relatively long">
**Every step on this page is important.** Many of them will be made obsolete when Amethyst gets native OSC support, but transitioning from the plugin to the native version will be very simple.
</CardWarning>

> **Hi everyone from the VRChat Developer Update!** We're hard at work on a semi-rewrite of Amethyst to simplify future development. Once that's done, getting OSC out the door will be easier.

<br><br>

## Preface
In late November 2022, **VRChat released an Open Beta including a feature called OSC Trackers. What this feature allows is for any application to send data over the network using OSC to VRChat, with information about the position and rotation for 1 to 8 trackers. And then allow the user to calibrate with them for full-body-tracking.**

Until now, VRChat only supported Vive trackers directly in SteamVR, and applications that emulated those, like Amethyst or SlimeVR.

**We have created a plugin for Amethyst to send the enabled trackers over OSC.** Told you that whole modular and extensible thing would come in useful.

##### Pre-requisites

<CardError title="Webcam and PS4 Camera are not supported!">
**Amethyst is for Kinect tracking** mostly. **We do not have support for 2D cameras.** And most likely, never will.
</CardError>

**_As long as your computer runs an up-to-date version of Windows 10 or 11, and was built in the last decade_, you're most likely good to go.** We recommend taking a look at the USB Controllers section in Amethyst Installer, you should have at least one compatible controller to have a good experience.

As well, **you need to have some kind of compatible hardware.** Like Xbox 360 Kinect, Xbox One Kinect or a complete PlayStation Move + PS3 Eye setup in PSMoveServiceEx.

<br><br>

## Part 1: Wi-Fi is not internet!
<CardInfo title="Your internet speed does not matter!">
**The speed of your internet connection, what allows you to visit websites and play online games, does not matter.** In fact, you could have the old 90s dial-up internet with the funny modem sounds and it wouldn't matter.
</CardInfo>

Because OSC goes over the network, **you need to make sure your Quest is connected to the same local network as your PC.**

_This part only really applies if you have two Wi-Fi routers. You would probably know if you have two of those._

> If your PC is connected to the router with a cable, then make sure the Quest is connected to the Wi-Fi network that router is on.

> If you're using a Wi-Fi adapter on your PC, or using a laptop, make sure the PC and the Quest are on the same Wi-Fi network.

<CardTip title="If you get nothing on the Quest after connecting OSC trackers">
This isn't guaranteed to work, but sometimes, you will have separate Wi-Fi networks for the 2.4GHz and 5GHz bands. And some routers will only show devices on the 2.4GHz network to devices connected with a cable. So, **try connecting to the 2.4GHz Wi-Fi specifically if they are separate.** Though 5GHz is preferable.
</CardTip>

- Open the Quest's **Universal Menu**
- Click on "**Quick Settings**" on the left side

![Quick Settings in the Quest main menu](/en/img/quest-quick-settings.png)
- Click on **Wi-Fi**

![Wi-Fi in the Quest quick settings](/en/img/quest-wifi.png)
- **Connect to the desired network** if it isn't already
- **Click the network itself** once it's successfully connected
- Scroll down to **Advanced**, then click on that
- Scroll further down until you see **IP Address**
> I would add more images but they come out blank. WHY FACEBOOK!?

This is what other devices in your house see the Quest as and **you will need to enter it in Amethyst, so keep note of it.**

<br><br>

<CardInfo title="">

### You must use VRChat Beta!
A previous version of this guide mentioned the requirement for VRChat Beta on Quest. I removed this once OSC trackers was pushed to live.

**VRChat removed OSC trackers from the live version soon after. They are only present on the Quest BETA.** They did so because that version was causing crashes for many users.

Please use the beta version.
</CardInfo>

## Part 2: Enabling OSC in VRChat

- Launch VRChat on the Quest
- Open the **Action Menu (the round one)** by pressing and holding one of the Quick Menu buttons
- Go to "**Options**", then "**OSC**", and **toggle on** "**Enabled**"
![Enabling OSC](/shared/img/osc-enable.png)

**It's easy to forget this step, and then spend 20 minutes wondering why it's not working. so make sure to do it now instead of later.**

##### You are now ready to receive OSC Tracker data!

<br><br>

## Part 3: Installing Amethyst and the plugin
Before installing Amethyst, you must have SteamVR installed.  
**You do not need to connect a headset to SteamVR, but it must be present to install and run Amethyst.** (This will not be the case once native OSC support is released)

Assuming you have Steam on your computer, you can install SteamVR using this button:  
<br><br>
<LinkButton href="steam://install/250280">Install SteamVR from Steam</LinkButton>
<br><br>
**Once SteamVR is installed, run it at least once, even without a headset.**  
You can now install Amethyst using this button:
<br><br>
<LinkButton href="https://github.com/KinectToVR/Amethyst-Installer-Releases/releases/latest/download/Amethyst-Installer.exe">Download Latest Amethyst Installer Version</LinkButton>
<br><br>

### Installing the OSC plugin

<CardInfo title="Important notes!">
- ##### **I understand that the plugin is janky and experimental**
- ##### **I accept the tracker alignment is imperfect because of plugin limitations**
- ##### **I understand that OSC trackers in their  native implementation will be much better**
- ##### **I have read all of the above**
</CardInfo>

If so, here's the download link.
<br><br>
<LinkButton href="https://github.com/KinectToVR/OSC-FBT-Plugin/releases/latest/download/Amethyst-OSC-Plugin.zip">Download the Amethyst OSC Plugin</LinkButton>
<br><br>

Once you've download the plugin ZIP, you need to extract it to Amethyst's install folder
<br><br>
<LinkButton href="amethyst://installfolder">Open the Amethyst install folder</LinkButton>
<br><br>

![Dragging the OSC zip into the correct folder](/en/img/drag-osc-zip.gif)

#### Enabling the "null" SteamVR driver so Amethyst can start

Download and run this
<br><br>
<LinkButton href="https://gist.github.com/hyblocker/e25f39fe693ad1cac70fe999f681a274/raw/c8b0d8967a64a4df0ddd02084469a55cbe2fce8a/enable-null-driver.exe">Automatically enable the SteamVR null headset driver</LinkButton>
<br>
[Here's the source code if you care](https://gist.github.com/hyblocker/e25f39fe693ad1cac70fe999f681a274)
<br>

- Press **Y** then **Enter**.
- Press **Enter** again to finish and exit.

<CardTip title="If the null druiver enabler fails">
You can enable it manually by [following the instructions on this GitHub page.](https://github.com/username223/SteamVRNoHeadset) You're just editing two JSON files.

We just believed it would be easier for people to run a small EXE. But it barely works because SteamVR is a royal pain. _Can't wait for native OSC._
</CardTip>

![null driver tool](/en/img/null-driver-tool.png)

After that's done, SteamVR should look like this ![steamvr null driver](/en/img/null-driver.png)

<Accordion title="If you wish to disable the null driver to use SteamVR normally again">

In SteamVR go to **Settings.**  
![steamvr open settings](/en/img/steamvr-null-settings.png)  
Then click on **Startup / Shutdown** then **Manage Add-ons.**  
![steamvr openvrpaths window](/en/img/steamvr-settings-addons.png)  
Finally, click on **the On/Off toggle next to "No HMD".**  
And then click on **Restart SteamVR.**  
![restart steamvr lol](/en/img/steamvr-disable-null.png)  

</Accordion>

<br><br>

## Part 4: Final setup
You now have VRChat BETA ready to accept OSC input, and Amethyst ready to send OSC to the Quest.

- **Start SteamVR,** and **then Amethyst**

- **DO NOT CONNECT TRACKERS**

- Click the dropdown next to the Hide Skeleton button in the corner of the black window, then check on **"Force Preview"**
![Force Skeleton Preview on](/en/img/force-preview.png)

- **Make sure the Kinect can track you properly** If it can't see your head, that's okay.

- > **See the [Improve tracking](/en/app/improve-tracking) page for tips to get the best tracking out of your Kinect.**

![the Amethyst OSC plugin screen](/en/img/amethyst-osc.png)
- Go to the **Devices** tab on the left of the app
- Click on **Amethyst OSC**
- Change **Device IP** to **the one you took note of** earlier
- Click **"Connect Trackers (OSC)"**
- ##### Your Kinect tracking is now being broadcast over OSC! 🎉

- **Launch VRChat BETA** on your Quest
- Open the **Quick Menu** (The square one)
- For testing sake, **please try a default public avatar first.**
- Let's change a few settings for a better experience
- In the Quick Menu, click the **Settings tab**, the one with the gear icon
- Scroll down to **Tracking and IK**
- Change the **Avatar Measurement** to **Height Scale**
- Once you've changed avatars, **open the Quick Menu** again and **click on Calibrate FBT**
- **You will be in a T-Pose**, with the trackers represented as spheres.
- You can bind into the avatar by **pressing both triggers together.**
- Open the **Quick Menu** again and return to **Settings**, then **Tracking and IK**
- This time, change **Lock Behavior** to **Lock Head**.
- > Specifically, this allows the Kinect trackers to drift back into position over time and makes your overall body position based on your headset movement, it looks a LOT better for Kinect.
- Open the **Quick Menu** again.
- Click on **Calibrate FBT**
- **You will be in a T-Pose**, with the trackers represented as spheres.
- Open the Quick Menu again
- Go to **Settings** then **Tracking and IK**
- Click on **Auto-center OSC trackers**
- > If the trackers are too low or too high, play with the height offset in Amethyst. Click Auto-center again if the tracking is mirrored.
- You can confirm the calibration by **pressing both triggers together.**

##### Enjoy FBT on Quest!!!!

## Part 4B: What to do the next time around
- **Start SteamVR** and **then Amethyst**
- **Make sure the Kinect can track you properly**
- Go to the **Devices** tab on the left of the app
- Click on **Amethyst OSC**
- Change **Device IP** to **the one you took note of** earlier
- Click **"Connect Trackers (OSC)"**
- **Launch VRChat BETA** on your Quest
- Open the **Quick Menu** (the square one)
- Click on **Calibrate FBT**
- **You will be in a T-Pose**, with the trackers represented as spheres.
- Open the Quick Menu again
- Go to **Settings** then **Tracking and IK**
- Click on **Auto-center OSC trackers**

<CardWarning title="Tracker offset">
In the OSC plugin UI, there's a box to adjust the offset of the trackers from the floor. You might have to adjust it to match correctly.
</CardWarning>

<CardWarning title="Mirrored trackers">
If the tracker movement is mirrored in VRChat compared to what you're doing. Click the auto-center button again.
</CardWarning>

- You can bind into the avatar by **pressing both triggers together**
