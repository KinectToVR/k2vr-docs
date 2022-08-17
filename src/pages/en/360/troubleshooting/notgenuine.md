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
The "genuine" naming only comes from the Kinect for Windows SDK. It doesn't actually mean that your Kinect is a fake, those don't even exist.
</CardWarning>

This error happens when you get a **sudden drop in USB data transfer speed, causing a latency spike** and making the internal timings go out of whack until the Kinect is reset.

This drop in speed can either happen because of USB extensions, cheap USB hubs, or a bad/overloaded USB controller.

## About USB controllers
USB controllers are the physical chipsets, or parts of a chip, often in the CPU itself, that manage USB ports and handle their incoming and outgoing data.

The USB standard is actually very complex, and not every hardware manufacturer implements it fully.
Specifically, you should try and avoid these
- <span title="ASSMedia">ASMedia</span> 3.0 (3.1 is okay)
- AMD controllers pre-Ryzen
- Fresco Logic
- VIA

Bugs or mistakes in their implementation causes the most random issues, often ending up in a NOTGENUINE error.

## Going about fixing it
something utv funny