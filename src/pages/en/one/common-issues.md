---
layout: '@layouts/DocsPage.astro'
title: Common issues with Xbox One Kinect
description: Why most users should avoid Xbox One Kinect in favor of Xbox 360 Kinect instead.
setup: | 
  import CardNoIcon from '@components/CardNoIcon.astro'
  import CardTip from '@components/CardTip.astro'
  import CardWarning from '@components/CardWarning.astro'
  import Accordion from '@components/Accordion.astro'
---

# Common issues with Xbox One Kinect

<CardWarning title="For existing Xbox One Kinect users">
**This page is aimed at users wishing to buy a Kinect, or have an Xbox One Kinect, but no adapter.** Unless you use a headset and/or controllers that use base stations, you can make it work, even if it won't be as good as with the Xbox 360 Kinect.
</CardWarning>

> **This page is about using Xbox One Kinect for full-body tracking in virtual reality, if you were linked here from elsewhere on the internet, not all of this info will apply, but it's still important to keep in mind.**

Newer is not always better, after a few years of doing support on KinectToVR, K2EX, and now Amethyst, we've found that Xbox One Kinect is more trouble than it's worth, here's all the reasons.

## Tracking quality is same as Xbox 360 Kinect
The Kinect for Windows SDK v2.0 for Xbox One Kinect uses the **same body tracking algorithms internally as the SDK v1.8 for Xbox 360 Kinect.** It had different training data, but the same limitations were imposed on it for performance reasons. **Every pose that the Xbox 360 Kinect cannot do, the Xbox One Kinect cannot either.**

## Incompatibility with base station devices
Devices that use base stations for tracking like **Vive, Index, Tundra or Pimax headsets, trackers and controllers, are incompatible with Xbox One Kinect.**

**The time of flight sensor** on the Xbox One Kinect **confuses these devices into thinking an invalid base station is present,** and thus blocks them from tracking either completely or in large blind spots.

## Foot rotation
**There is an unfixable hardware flaw of the Xbox One Kinect that makes it create a "fog" near the floor** because of the way the infrared bounces are modulated on the sensor.

**As long as your feet are inside the fog, foot rotation will jitter back and forth** continuously. Using the "Software-calculated Rotation" option in Amethyst's tracker configuration screen will help, but **cannot solve the issue entirely.**

## USB bandwidth and host controller compatiblity
The Xbox One Kinect is a USB 3.0 device, and **requires nearly the entire sustained 5Gbps bandwidth that USB 3.0 can provide. Not all USB controllers are made equal and some either have issues with bandwidth-heavy devices, or simply do not work.**

You can check what USB host controllers you have by opening **Device Manager,** then expanding the **Universal Serial Bus controllers** section. All the devices labelled **"Something something Host Controller"**.

**Here's a list of USB host controllers that work:**

- Renesas USB 3.0
- AMD USB 3.1
- AMD USB 3.2
- Intel USB 3.1
- Intel USB 3.2
- ASMedia USB 3.1

**And a list of controllers that don't work:**

- VIA USB 3.0
- ASMedia USB 3.0
- AMD USB 3.0 (Non-Ryzen)
- Fresco Logic USB 3.0

## The temperature sensor is a ticking time-bomb
Inside the Xbox One Kinect is a temperature sensor to ensure that the Kinect acn shut down in the event that the fan fails, or the ventilation gets obstructed.

**This temperature sensor uses analog components, and it tends to go bad on a lot of Xbox One Kinect sensors.** Once it does, the Kinect will** reboot in a loop until you [manually fix the issue](https://youtu.be/BoRK3jJVMLM)** by cutting the wires going to it inside the device.

## Adapters are expensive and prone to breaking
Unlike with Xbox 360 Kinect, **third-party adapters aren't a sure-fire win every time.** Many factors come into play to make a good Xbox One Kinect adapter. **The ameperage required is higher than Xbox 360 Kinect, the cables need to do USB 3.0, and the main box needs to have a signal repeater inside to ensure the USB 3.0 signal isn't degraded** as it goes through the entire length of the cable.

**Most third-party adapters do not do this, nor were they ever actually tested.** Instead you end up with 20 dollar e-waste, 40 dollar adapter gambling, or 70 dollar Microsoft money wasting.

In most countries, **an Xbox 360 Kinect and a third-party adapter can be had for less than the bad Xbox One Kinect adapters.**

Considering this, there is no reason to get an adapter if you already have an Xbox One Kinect. **Just get an Xbox 360 Kinect instead.**

## The SDK provides no clear errors to the user
Unlike the numerous (_admittedly non-descriptive at first glance_) errors of the Xbox 360 Kinect's v1.8 SDK, **the v2.0 SDK has two states, it works, or it doesn't. Leaving you, the user, to figure out why things broke** from trial and error.

## It costs too much
While it isn't hard to find an Xbox One Kinect for pretty cheap (nobody wants them), that doesn't stop the fact that **getting a good adapter, and possibly a USB 3.0 PCIe card to actually get the thing working on your computer, gets expensive fast,** compared to Xbox 360 Kinect.

## In conclusion
If all you wanna do is play Just Dance, or do 3D scanning, go ahead, but expect jank.