---
layout: '@layouts/DocsPage.astro'
title: How to fix E_NUI_INSUFFICIENTBANDWIDTH
description: We don't know much about this error, but here's some tips anyway.
setup: | 
  import CardNoIcon from '@components/CardNoIcon.astro'
  import CardTip from '@components/CardTip.astro'
  import CardWarning from '@components/CardWarning.astro'
  import Accordion from '@components/Accordion.astro'
  import KbdWindows from '@icons/Kbd_Windows.astro'
---
# How to fix E_NUI_INSUFFICIENTBANDWIDTH
This error happens in two situations, either, you really are lacking bandwidth, in which case the instructions on the [NOTGENUINE page](/en/360/troubleshooting/notgenuine) should be helpful. Or the Kinect for Windows SDK has gotten confused because of something else, and is throwing this error.

First, check to see if the Kinect Management service is running.

- Press <KbdWindows /> + <kbd>X</kbd> to open the Windows poweruser menu.
- Click on **Computer Management**.
- Double-click on **Services and applications** then on **Services**.
- In the list, look for the "Kinect Management" service.
- Ensure that it is running in the "Status" column.

If it isn't, click **Start the service** on the left of the list after clicking on the Kinect Management service.

After doing this, go back to Amethyst, head over to the Devices tab, then on Xbox 360 Kinect, click "Refresh" on the right.