---
layout: '@layouts/DocsPage.astro'
title: How to fix E_NUI_INSUFFICIENTBANDWIDTH
description: We don't know much about this error, but here's some tips anyway.
setup: | 
  import CardNoIcon from '@components/CardNoIcon.astro'
  import CardHelp from '@components/CardHelp.astro'
  import CardTip from '@components/CardTip.astro'
  import CardWarning from '@components/CardWarning.astro'
  import Accordion from '@components/Accordion.astro'
  import KbdWindows from '@icons/Kbd_Windows.astro'
  import LinkButton from '@components/LinkButton.astro'
  import { SOCIALS } from '~/constants.js';
---
# How to fix E_NUI_INSUFFICIENTBANDWIDTH

This error happens in two situations, either, the Kinect for Windows SDK can't initialise the Kinect properly, or you are lacking USB bandwidth.

## Checking if you are really lacking bandwidth

USB can only support up to a certain amount of bandwidth before it can't handle all connected devices properly.
The instructions on the [E_NOT_GENUINE page](/en/360/troubleshooting/notgenuine) should be helpful.

## Checking if the Kinect for Windows SDK can't initialise properly:

### Kinect Management Service

First, check to see if the Kinect Management service is running.

- Press <KbdWindows /> + <kbd>X</kbd> to open the Windows poweruser menu.
- Click on **Computer Management**.
- Double-click on **Services and applications** then on **Services**.
- In the list, look for the "Kinect Management" service.
- Ensure that it is running in the "Status" column.

![Services page showing the Kinect Management service selected](/en/img/services-kinect-management.png)

If it isn't, click **Start the service** on the left of the list after clicking on the Kinect Management service.

After doing this, go back to Amethyst, head over to the Devices tab, then on Xbox 360 Kinect, click "Refresh" on the right.

### Camera Driver

The driver required to access the Kinect's camera hasn't been updated in nearly a decade. This driver is automatically disabled on new systems running modern Windows (10 or 11) as a security feature. To allow Windows to load the driver, you must disable Memory Integrity, which can be done as follows:

<LinkButton href="windowsdefender://coreisolation">Go to Core Isolation on Windows Security</LinkButton>

- Open Windows Security.

- Go to Device Security.

- Under **Core Isolation** click on Core Isolation Details.  
  > Make sure that Memory Integrity is turned **off**.

![Memory Integrity](/en/img/memory-integrity-win-defender.png)

<CardHelp title="Can't you update the driver?">
  Updating the driver requires us to reimplement it, which is doable. However, modern Windows requires that [drivers are signed using a certificate](https://learn.microsoft.com/en-us/windows-hardware/drivers/dashboard/code-signing-reqs) that would cost us around $300 every year at minimum. We don't receive enough donations to be able to comfortably afford this.  

  Additionally, the process of obtaining a signing certificate, which is required to be able to sign drivers, demands that we disclose our own personal information, which we also do not want to do.

  If you want to help make this feasible, <><a href="{ SOCIALS.opencollective }" target="_blank">consider donating</a></>!
</CardHelp>
