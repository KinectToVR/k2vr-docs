---
layout: '@layouts/DocsPage.astro'
title: How to fix E_NUI_NOTREADY
description: This error is either caused by Windows security measures, a broken Kinect SDK insall, or anything inbetween.
setup: | 
  import CardNoIcon from '@components/CardNoIcon.astro'
  import CardTip from '@components/CardTip.astro'
  import CardWarning from '@components/CardWarning.astro'
  import Accordion from '@components/Accordion.astro'
---
# How to fix E_NUI_NOTREADY
The NotReady error is infamous for either being super easy to fix, or an absolute nightmare. More often than not, disabling Windows' Memory Integrity feature, then reinstalling the Kinect SDK is enough. But sometimes, we just never manage to fix it.

## Reinstalling the Kinect SDK
Let's go through this circus shall we?

### Uninstalling

Go to Windows Settings, then apps and features. **Or click this link [ms-settings:appsfeatures](ms-settings:appsfeatures) to go there directly.**

In the **right-hand** search box, type "kinect" (without quotes).

**On Windows 10:**  
Click each item, then click Uninstall. Follow the instructions.

**On Windows 11:**  
Click on the three dots on the right edge of each item, then click Uninstall. Follow the instructions.

### Disabling Memory Integrity
Open Windows Security **Or click this link [ms-settings:windowsdefender](ms-settings:windowsdefender) to go directly there, again.**  

Go to Device Security.

Under **Core Isolation** click on Core Isolation Details.  
Make sure that Memory Integrity is turned **off**.

### Reinstalling

Once the SDK is completely removed, **re-install it using Amethyst installer.** Not on your own. We don't trust you. We don't trust Microsoft. And we've had enough of this shit.