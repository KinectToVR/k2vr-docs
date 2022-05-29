---
layout: '@layouts/DocsPage.astro'
title: Installing Amethyst
setup: | 
  import Accordion from '@components/Accordion.astro'
  import Windows from '@icons/Kbd_Windows.astro'
  import Enter from '@icons/Kbd_Enter.astro'
  import Shift from '@icons/Kbd_Shift.astro'
---
# Installing Amethyst
You can get Amethyst Installer from the [homepage](https://k2vr.tech) by clicking on Get Started. You will be asked a few questions to ensure that you meet prerequisites, then the download button will appear.

If you get a Windows Smartscreen pop-up, simply click on **More info** then **Run anyway**.
![smartscreen warning window](/en/img/smartscreen.png)
This screen shows up because the installer is not signed. Code signing certificates cost money and we can't afford that. [Unless you donate :)](https://opencollective.com/k2vr) then we can.

### How to fix SteamVR or VRPathReg Not Found error
This error happens usually because of a broken `openvrpaths.vrpath` file, or because you have a Windows user account without administrator permissions.

<Accordion title="If you have administrator permissions">
- Make sure that SteamVR is closed.
- Press <Windows /> + <kbd>R</kbd> to open the Run dialog.
- Paste or type in `%localappdata%\openvr` and press <Enter />.
- In the file explorer window, delete the only file present.
- Start and close SteamVR once to generate a new file.
- Open the installer again.


</Accordion>

<Accordion title="If you are not the administrator on this PC">
- Log out of your current user account.
- Log in to the account that has administrator privileges.
- Run Amethyst Installer there, installing as normal. (The installation is not user-dependent.)
- Log back into your user account and Amethyst should be installed and available from the Start Menu.


</Accordion>  

The installer checks for updates on start but you can ignore them, so if you have an older installer version (excluding K2EX Installer) you can run that instead of redownloading it.
### Installing manually
Alternatively, you can download Amethyst from the [releases on GitHub](https://github.com/kinecttovr/amethyst-releases/releases) and extract the ZIP to any folder you wish. We recommend using the installer because it will automatically setup drivers for your Kinect sensor if you have it plugged in.

Once you have Amethyst up and running, you will need to register its SteamVR driver either by running Amethyst Recovery (In the K2CrashHandler folder) or going to the bottom of options and clicking re-register SteamVR Driver.