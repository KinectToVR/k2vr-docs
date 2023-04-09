---
layout: '@layouts/DocsPage.astro'
title: How to fix E_NUI_NOTGENUINE
description: Don't panic! Your Kinect isn't fake. How to fix the Not Genuine error on Xbox 360 Kinect
setup: | 
  import CardNoIcon from '@components/CardNoIcon.astro'
  import CardTip from '@components/CardTip.astro'
  import CardWarning from '@components/CardWarning.astro'
  import Accordion from '@components/Accordion.astro'
---
# How to fix E_NUI_NOTGENUINE
<CardWarning title="Don't panic, your Kinect isn't fake.">
The "genuine" naming comes from the Kinect for Windows SDK. It doesn't actually mean that your Kinect is a fake. Those don't even exist.
</CardWarning>

This error happens when you get a **sudden drop in USB data transfer speed, causing a latency spike.** It makes the internal timings go out of whack until the Kinect is reset.

This drop in speed can either happen **because of USB extensions, cheap USB hubs, or a bad/overloaded USB controller.**

## About USB controllers (I swear this is important)
**USB controllers are the physical chipsets**, or parts of a chip, often in the CPU itself, **that manage USB ports** and handle their incoming and outgoing data.

The USB standard is actually very complex, and **not every hardware manufacturer implements it fully.**
Specifically, you should **try and avoid these**
- <span title="ASSMedia">ASMedia</span> 3.0 (3.1 is okay)
- AMD controllers before AMD Ryzen
- Fresco Logic
- VIA

Bugs or mistakes in their implementation can cause the most random issues, often ending up in a NOTGENUINE error.

## Going about fixing it
First, make sure to avoid using USB extensions of hubs, they can cause their own multitude of issues with signal degradation.

### Going in blind
**Try plugging the Kinect into a different USB port**, and hope for the best. After changing ports, you'll want to **head to the Devices tab in Amethyst and click Refresh** to ensure the device status is successful.

### Using USBTreeView
There is a third-party tool created by [Uwe Sieber](https://www.uwe-sieber.de/english.html) named **USBTreeView. It shows your USB host controllers and each of the ports connected to them.** (It often shows more ports than are actually present on the computer, that's normal) **and every device plugged into those ports.**

**You can download it here: [UsbTreeView.exe](https://k2vr.tech/UsbTreeView.exe)**

![screenshot of usbtreeview](/en/img/usbtreeview.png)

USB host controllers are represented using the card icon: <img src="/shared/img/utv-card.png">

Try connecting the Kinect so it appears on a different host controller. Then click Refresh in the Amethyst devices tab.

<CardTip title="Conflicting or bandwidth-heavy devices">
Some devices like microphones, or "exotic" gaming peripherals can do weird things to USB controllers. And devices like certain VR headsets (e.g. any Oculus/Meta headset, Windows Mixed Reality headsets), hard drives and webcams demand a lot of bandwidth from a USB controller. You should try unplugging these if nothing else seems to work.
</CardTip>