---
layout: '@layouts/DocsPage.astro'
title: SteamVR Driver Troubleshooting
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import TableOfContents from '@components/TableOfContents.astro'
  import CardInfo from '@components/CardInfo.astro'
  import KbdWindows from '@icons/Kbd_Windows.astro'
---
# SteamVR Driver Troubleshooting
Well shucks, your Amethyst driver isn't working, what do?
### How to fix "EXCEPTION WHILE CHECKING (Code -10)"
**This means the SteamVR driver is not loaded at all.** Either because it's disabled, and/or because it's not listed to SteamVR in any way.

<video autoplay muted loop src="/en/mp4/enable-amethyst-driver.mp4" poster="/en/mp4/enable-amethyst-driver.poster.png"></video>

If the driver is missing from that list, Click the **Re-register SteamVR driver entry** button.
![re-register steamvr driver button](/en/img/reregister-button.png)
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

An average openvrpaths.vrpath file will look like this. (Obviously without the coloring in Notepad.)
```json
{
	"config" : 
	[
		"C:\\Program Files (x86)\\Steam\\config"
	],
	"external_drivers" : 
	[
		"D:\\vrtools\\OculusTouchLink",
		"D:\\vrtools\\owo-track-release\\driver",
		"E:\\Steam\\steamapps\\common\\MixedRealityVRDriver",
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