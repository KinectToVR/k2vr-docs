---
layout: '@layouts/DocsPage.astro'
title: Setting up the Amethyst OSC Plugin for Quest
description: Step-by-step instructions on setting up Amethyst and VRChat on Quest to use full-body tracking on OSC.
setup: | 
  import CardNoIcon from '@components/CardNoIcon.astro'
  import CardTip from '@components/CardTip.astro'
  import CardWarning from '@components/CardWarning.astro'
  import Accordion from '@components/Accordion.astro'
  import LinkButton from '@components/LinkButton.astro'
---
# Setting up the Amethyst OSC Plugin for Quest
##### Before you go any further, please join our Discord at https://discord.gg/YBQCRDG
### ⚠️ This guide is relatively long
##### Every step on this page is important. Many of them will be made obselete when Amethyst gets native OSC support, but transitioning from the plugin to the native version will be very simple.

## Preface
In late November 2022, **VRChat released an Open Beta including a feature called OSC Trackers. What this feature allows, is for any application to send data over the network using OSC to VRChat, with information about the position and rotation for 1 to 8 trackers. And then allow the user to calibrate with them for full-body-tracking.**

Until now, VRChat only supported Vive trackers directly in SteamVR, and applications that emulated those, like Amethyst or SlimeVR.

**We have created a plugin for Amethyst to send the enabled trackers over OSC.** Told you that whole modular and extensible thing would come in useful

**As long as your computer runs an up-to-date version of Windows 10 or 11, and was built in the last decade, you're most likely good to go.** We recommend taking a look at the USB Controllers section in Amethyst Installer, you should have at least one compatible controller to have a good experience.

## Part 1: Wi-Fi is not internet!
<CardWarning title="Your internet speed does not matter!">
**The speed of your internet connection, what allows you to visit websites and play online games, does not matter.** In fact, you could have the old 90s dial-up internet with the funny modem sounds and it wouldn't matter.
</CardWarning>

Because OSC goes over the network, **you need to make sure your Quest is connected to the same local network as your PC.**

_This part only really applies if you have two Wi-Fi routers. You would probably know if you have two of those._

> If your PC is connected to the router with a cable, then make sure the Quest is connected to the Wi-Fi network that router is on.

> If you're using a Wi-Fi adapter on your PC, or using a laptop, make sure the PC and the Quest are on the same Wi-Fi network.

<CardTip title="If you get nothing on the Quest after connecting OSC trackers">
This isn't garanteed to work, but sometimes, you will have separate Wi-Fi networks for the 2.4GHz and 5GHz bands. And some routers will only show devices on the 2.4GHz network to devices connected with a cable. So, **try connecting to the 2.4GHz Wi-Fi specifically if they are separate.** Though 5GHz is preferable.
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

This is what other devices in your house see the Quest as, and **you will need to enter it in Amethyst, so keep note of it.**

## Part 2: Installing and setting up VRChat BETA
> If VRChat released OSC Trackers out of beta, and I haven't updated this page yet, just skip over this part. Or if you already have VRChat Beta.

- Open [the VRChat BETA page on Oculus App Lab](https://www.oculus.com/experiences/quest/4821132827998004/) on your PC or phone
- Make sure you're logged in to the same Oculus/Facebook/Meta account as on your Quest
- Click the blue GET button on the page

![App Lab get button](/en/img/applab-get.png)
- Wait a few minutes and it should appear in your Quest's library

##### You must have a VRChat.com account
**You cannot login to VRChat BETA on Quest using an Oculus account**, you must make an account on https://vrchat.com/home/register if you were using Oculus login previously.

See this page [ I want to turn my Steam, Oculus or Viveport account into a VRChat account ](https://help.vrchat.com/hc/en-us/articles/360062659053-I-want-to-turn-my-Steam-Oculus-or-Viveport-account-into-a-VRChat-account) on the VRChat documentation to **create and merge the two accounts together, so you don't lose worlds, friends and avatars.**

- In your Quest library, click on Install on the **VRChat BETA** tile
- Wait for the installation to finish, then **click it again to launch the game**
- Login with your **VRChat.com account**
- > Settings are separate between the beta and normal builds of VRChat on Quest, so it will make you do the tutorial and have you reconfigure stuff again

Once you've done all that:
- Open the **Action Menu (The round one)** by pressing and holding one of the Quick Menu buttons
- Go to "**Options**", then "**OSC**", and **toggle on** "**Enabled**"
![Enabling OSC](/shared/img/osc-enable.png)

**It's easy to forget this step, and then spend 20 minutes why it's not working. so make sure to do it now instead of later.**

##### You are now ready to receive OSC Tracker data!

## Part 3: Installing Amethyst and the plugin
Before installing Amethyst, you must have SteamVR installed. **You do not need to connect a headset to SteamVR, but it must be present to install and run Amethyst.** (This will not be the case once native OSC support is released)

Assuming you have Steam on your computer, you can install SteamVR using this button:  
<br><br>
<LinkButton href="steam://install/250280">Install SteamVR from Steam</LinkButton>
<br><br>
**Once SteamVR is installed, run it at least once, even without a headset.**  
You can now install Amethyst using this button:
<br><br>
<LinkButton href="https://github.com/KinectToVR/Amethyst-Installer-Releases/releases/latest/download/Amethyst-Installer.exe">Download Latest Amethyst Installer Version</LinkButton>
<br><br>

##### OSC Plugin section TBD, will probably include autosetup script for null driver and device folder setup, or even be bundled into an installer update

## Part 4: Final setup
You now have VRChat BETA ready to accept OSC input, and Amethyst ready to send OSC to the Quest.

- **Start SteamVR,** and **then Amethyst**

- **DO NOT CONNECT TRACKERS**

- Click the dropdown next to the Hide Skeleton button in the corner of the black window, then check on **"Force Preview"**
![Force Skeleton Preview on](/en/img/force-preview.png)

- **Make sure the Kinect can track you properly**, if it can't see your head, that's okay.

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
- Once you've changed avatars, **open the Quick Menu** again, and **click on Calibrate FBT**
- **You will be in a T-Pose**, with the trackers represented as spheres.
- You can bind into the avatar by **pressing both triggers together.**
- Open the **Quick Menu** again and return to **Settings**, then **Tracking and IK**
- This time, change **Lock Behavior** to **Lock Head**.
- > Specifically, this allows the Kinect trackers to drift back into position over time and makes your overall body position based on your headset movement, it looks a LOT better for Kinect.
- **You can now use whatever avatar you want**, though not all of them will work as good as you'd wish.

##### Enjoy FBT on Quest!!!!

## Part 4B: What to do the next time around
- **Start SteamVR,** and **then Amethyst**
- **Make sure the Kinect can track you properly**
- Go to the **Devices** tab on the left of the app
- Click on **Amethyst OSC**
- Change **Device IP** to **the one you took note of** earlier
- Click **"Connect Trackers (OSC)"**
- **Launch VRChat BETA** on your Quest
- Open the **Quick Menu** (The square one) and **click on Calibrate FBT**
- **You will be in a T-Pose**, with the trackers represented as spheres.
- You can bind into the avatar by **pressing both triggers together.**