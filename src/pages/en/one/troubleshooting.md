---
layout: '@layouts/DocsPage.astro'
title: Xbox One Kinect Troubleshooting
description: How to fix common problems with Xbox One Kinect
setup: | 
  import CardNoIcon from '@components/CardNoIcon.astro'
  import CardTip from '@components/CardTip.astro'
  import CardWarning from '@components/CardWarning.astro'
  import Accordion from '@components/Accordion.astro'
  import LinkButton from '@components/LinkButton.astro'
---
# Xbox One Kinect Troubleshooting
Figuring out what is going wrong with the Xbox One Kinect isn't as easy as with 360, because **the SDK doesn't provide errors beside "a generic sensor is unavailable." You have to look for other signs** in USB devices, drivers, and such. Hopefully this page helps you fix your problem.  

## Hardware
First and foremost, you should ensure everything hardware-wise is in order. **There's no point in trying to diagnose issues if a cable is loose or you don't have the Kinect plugged into a compatible USB controller.**

### Check your cables
Ensure that every connection from the Kinect, mains power, and adapter is connected firmly. And that your cables aren't damaged. Sometimes, a USB 3 cable that is too long from the adapter to the computer can cause issues too.

### USB controllers
**The Xbox One Kinect is incompatible with these USB controllers:**
- Any USB 2.0 controller
- ASMedia 3.0
- Fresco Logic
- VIA

**It's recommended that you have one of these:**
- Renesas / NEC 3.0
- AMD 3.1 or above (Ryzen CPUs)
- Intel 3.1 or above
- ASMedia 3.1

In the case where you have none of the above, **on a desktop with an available PCIe slot, you can purchase a USB add-in card with a Renesas controller** by searching for "USB PCIe Renesas" on Amazon or other online stores.

If you're on a laptop and you don't have Intel 3.1 or Ryzen, _why are you even trying to use VR?_

## Drivers
Unlike with K2EX, **we now recommend that you use the newer drivers that are distributed through Windows Update for the Kinect V2.**

The **old drivers** are version **v2.0_1409** and include an SDK for developers.

The **new drivers** are version **v2.2_1905**, and only include the required runtime.

**If your Kinect appears as a webcam** in apps like Discord, then **you're already using the newer driver.**

**If you installed the SDK manually, you can just leave it there.** And update only the Kinect driver.
- Open Device Manager
- Expand the "Kinect sensor devices" category
- Right-click the Kinect device
- Click on "Update driver"
- Choose "Search automatically for drivers"
- Let Windows Update do it's magical thing.

(Obviously, this requires Windows Update being functional.)

## Other issues
Here's a few other things that could have gone wrong.

### Faulty adapter
It's common for [Kinect V2 adapters to be hit or miss...](/en/one/common-issues#7)  
Check that all the cables are firmly plugged in. And that the adapter is receiving power, on the official one, the light should be orange.  
It's also possible with cheap adapters that the signal is being degraded either through cheap wiring or cables that are too long. (It's not like they actually test it.)

### Low framerate
Low framerates are usually caused by there being **other devices on the same USB controller, taking just enough bandwidth that the Kinect can still start, but can't send it's full data** through.

Basically, **try unplugging everything USB near the Kinect.**

### Temperature sensor
Inside the Kinect is a fan, and a temperature sensor attached to that fan. **Because it's an analog part, it can go bad over time**, and report very high temperatures in error.

You need to **open the Kinect up** with a **Torx T2 screwdriver**, then **cut the yellow and blue wires** and put some electrical tape to cover them up. **This will disable the temperature sensor.**

Here's a [video showing how to do it](https://youtu.be/BoRK3jJVMLM)

### Foot rotation
The default rotation mode for Xbox One Kinect allows you to turn your feet freely. The problem is that **in 99% of cases, your floor, and everything near it are invisible to the Kinect.**

Because only your legs are visible to the Kinect, **in Amethyst, you should switch the Orientation Tracking mode for the feet trackers to Leg-Based Orientation.** It's not perfect, but will fix the issue.