---
layout: '@layouts/DocsPage.astro'
title: How to fix E_NUI_NOTREADY
description: This error is either caused by Windows security measures, a broken Kinect SDK insall, or anything inbetween.
setup: | 
  import CardNoIcon from '@components/CardNoIcon.astro'
  import CardTip from '@components/CardTip.astro'
  import CardWarning from '@components/CardWarning.astro'
  import Accordion from '@components/Accordion.astro'
  import LinkButton from '@components/LinkButton.astro'
---
# How to fix E_NUI_NOTREADY
The NotReady error is infamous for either being super easy to fix, or an absolute nightmare. More often than not, disabling Windows' Memory Integrity feature, then reinstalling the Kinect SDK is enough. But sometimes, we just never manage to fix it.

## Reinstalling the Kinect SDK
Let's go through this circus shall we?

### Uninstalling

<Accordion title="Windows 10">

  Go to Windows Settings, then apps and features.

  <LinkButton href="ms-settings:appsfeatures">Open Apps and Features</LinkButton>

  In the **right-hand** search box, type "kinect" (without quotes).

  ![Windows 10 Settings page demonstrating how to uninstall Kinect drivers](/en/img/win10-settings-uninstall-kinect.png)

  Click each item, then click Uninstall. Follow the instructions.

</Accordion>

<Accordion title="Windows 11">

  Go to Windows Settings, then Apps, then Installed Apps.

  <LinkButton href="ms-settings:appsfeatures">Open Apps and Features</LinkButton>

  In the **right-hand** search box, type "kinect" (without quotes).

  ![Windows 11 Settings page demonstrating how to uninstall Kinect drivers](/en/img/win11-settings-uninstall-kinect.png)

  Click on the three dots on the right edge of each item, then click Uninstall.

  Follow the instructions.

</Accordion>

### Disabling Memory Integrity

<LinkButton href="windowsdefender://coreisolation">Go to Core Isolation on Windows Security</LinkButton>

Open Windows Security.

Go to Device Security.

Under **Core Isolation** click on Core Isolation Details.  
Make sure that Memory Integrity is turned **off**.

![Memory Integrity](/en/img/memory-integrity-win-defender.png)

### Reinstalling

Once the SDK is completely removed, **re-install it using Amethyst installer, as it does a lot of things under the hood to make sure the drivers installed properly.** Not on your own. We don't trust you. We don't trust Microsoft.