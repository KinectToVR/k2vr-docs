---
layout: '@layouts/DocsPage.astro'
title: SteamVR Driver Troubleshooting
description: How to fix the SteamVR driver not working
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import KbdWindows from '@icons/Kbd_Windows.astro'
---
# SteamVR Driver Troubleshooting
Well shucks, your Amethyst SteamVR driver isn't working, how do you go about fixing that?
### How to fix "EXCEPTION WHILE CHECKING (Code -10)"
**This means the SteamVR driver is not loaded at all.** Either because it's disabled, and/or because it's not listed to SteamVR in any way.

<video autoplay muted loop src="/en/mp4/enable-amethyst-driver.mp4" poster="/en/mp4/enable-amethyst-driver.poster.png"></video>

If the driver is missing from that list, Click the **Re-register SteamVR driver entry** button.
![re-register steamvr driver button](/en/img/reregister-button.png)
After restarting SteamVR, the driver should now be working.  
If Amethyst fails to register the SteamVR driver, reach us on Discord for help.
### How to fix "SERVER CONNECTION ERROR (Code -1)"
This usually happens because you have a version of the SteamVR driver running, but it's outdated. To attempt to fix it:

<CardInfo title="Pre-edited VRPaths file:">
Only use this if you installed Amethyst in the default location (**C:\Amethyst**) and SteamVR in the default Steam library (**C:\Program Files (x86)\Steam\steamapps\common\SteamVR**).

You can **[download this file](/shared/openvrpaths.vrpath)** and **put it in the** `%localappdata%\openvr` folder. While SteamVR is closed.  
<br>
##### Note that this method will erase entries for other SteamVR drivers!
We recommend editing it by hand if you're comfortable editing JSON.
</CardInfo>

- Go to the **settings tab** of Amethyst.
- Scroll all the way down.
- Click on **Re-register SteamVR driver entry**.
- Close **both Amethyst and SteamVR**.
- Open the Run dialog with <KbdWindows /> + <kbd>R</kbd>
- Paste in `%localappdata%\openvr\openvrpaths.vrpath`
- When Windows asks you what to open the file with, either **pick Notepad** or whichever editor you prefer.

Here's an example VRPaths file. We're going to remove the old Amethyst line, because SteamVR will ignore the new one otherwise.
```json
{
	"config" : 
	[
		"C:\\Program Files (x86)\\Steam\\config"
	],
	"external_drivers" : 
	[
        "C:\\Program Files\\ALVR",
        "D:\\VR Software\\Amethyst-Old",
        "C:\\Amethyst\\Amethyst"
	],
	"jsonid" : "vrpathreg",
	"log" : 
	[
		"C:\\Program Files (x86)\\Steam\\logs"
	],
	"runtime" : 
	[
		"C:\\Program Files (x86)\\Steam\\steamapps\\common\\SteamVR",
		"E:\\Oculus\\Support\\oculus-dash"
	],
	"version" : 1
}
```
In this example, you would remove Line 9 completely.

<CardInfo title="Don't forget about JSON formatting!">
If another driver was listed under the new Amethyst line. You would add a comma at the end of that line because it isn't the last item in the list anymore.  
<br>
If you edit any of the paths, they always need two backslashes like this `\\` because the backslash character is used to represent other characters within "strings". (For example, `\n` is a new line.)
</CardInfo>

- Remove the line(s) pointing to an older version of the Amethyst driver.
- Save the file, either with <kbd>Ctrl</kbd> + <kbd>S</kbd> or going to File > Save.
- Close the editor, and reopen SteamVR.
- Follow the steps at the top of this page and **make sure the driver is enabled.**

**You're done! 🎉 Your Amethyst SteamVR driver should be working now.**

### How to fix other errors (1, 12, 10, e.t.c.)
First, you should try restarting your PC, restarts are always a good first step.

Failing that, if you have any third-party firewall software, try turning that off and see if it fixes the issue or becomes any of the two above.

If all else fails, come to our Discord for help, but odds are you might have to diagnose some serious issue on your PC.

### If SteamVR fails to launch with error 203
This happens because of a conflict between the K2EX and Amethyst drivers. You must manually edit the VRPaths file as shown above because SteamVR's add-on list won't load, *because it crashed*. So you can't turn the driver off from there.

Follow the instructions above, and remove any driver where the folder ends with "KinectToVR". Then save the file and relaunch SteamVR.