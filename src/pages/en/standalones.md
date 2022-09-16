---
layout: '@layouts/DocsPage.astro'
title: Using standalone VR headsets
description: Important information about using wireless VR headsets like Meta Quest 2.
index: false
setup: | 
  import CardNoIcon from '@components/CardNoIcon.astro'
  import CardInfo from '@components/CardInfo.astro'
  import CardWarning from '@components/CardWarning.astro'
  import Accordion from '@components/Accordion.astro'
---
# Using standalone VR headsets
A trend towards wireless VR headsets that don't require being connected to a computer is emerging. Popular headsets like the Meta Quest 2, or even less popular headsets such as the Vive Focus 3 (*Does anybody own that one?*) have disrupted the market, **and we intend on supporting them when connected to a computer just like any other PC VR headset.**

These headsets almost always have one or multiple methods to connect to a computer to stream games, either from a proprietary app (e.g. Oculus Link), or third-party software such as [ALVR](https://alvr-org.github.io) or [Virtual Desktop](https://vrdesktop.net).

<CardInfo title="Zuckerberg owns your soul">
The information on this page is **mostly relevant for Meta Quest and Meta Quest 2**.
</CardInfo>

## Potential USB bandwidth problems
Kinect, especially Xbox One Kinect, is a very bandwidth-heavy device. Streaming audio and video to a standalone headset over USB is also a bandwidth-heavy application.

Depending on your USB host controller setup, you may want to use [UsbTreeView](https://k2vr.tech/UsbTreeView.exe) to ensure the Kinect is connected into a different host controller than your VR headset.

**If you do not have access to two compatible host controllers** to use separately for the Kinect and the headset. You may wish to **consider using a wireless streaming option**, like ALVR, or Virtual Desktop, as linked above. These will work over your __local__ Wi-Fi network instead of USB. **Leaving the bandwidth available to the Kinect.**

## About Quest tracking modes
Meta Quest and Quest 2 have two tracking modes available:

### Local Tracking
In this mode, **the playspace** from the Quest **is based on the orientation and position that the player is standing at the moment they put the headset on.** Meaning, each time, the playspace is offset from the last. This means **Amethyst needs to be recalibrated each time.**

This is the only mode available when using Oculus Link or Oculus Air Link.

### Stage Tracking
In this mode, **the Quest guardian is what gets sent to the PC as your playspace.** Meaning, as long as you don't redraw it. Your VR space will always have the same orientation and tracking origin. And **Amethyst will keep its calibration.**

Virtual Desktop provides this mode as an optional feature which can be enabled in the "VR" section of the settings on the Quest application.

ALVR forces this mode on.