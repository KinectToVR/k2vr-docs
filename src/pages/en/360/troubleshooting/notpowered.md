---
layout: '@layouts/DocsPage.astro'
title: How to fix E_NUI_NOTPOWERED
description: What to do if your Xbox 360 Kinect comes up with a Not Powered error
setup: | 
  import CardNoIcon from '@components/CardNoIcon.astro'
  import CardTip from '@components/CardTip.astro'
  import CardWarning from '@components/CardWarning.astro'
  import Accordion from '@components/Accordion.astro'
  import LinkButton from '@components/LinkButton.astro'
---
# How to fix E_NUI_NOTPOWERED
This error usually has two possible causes.
- A bug occured during the Kinect for Windows driver installation, leaving one or more devices as "unknowns" until manually refreshed.
- The adapter is not sending 12 volts power to the Kinect, either because it's not plugged into a working power outlet, or because it's faulty.

## Fixing the device installation bug

<LinkButton href="amethyst://notpowered">Fix E_NUI_NOTPOWERED</LinkButton>

<CardTip title="When using Amethyst Installer">
If you used Amethyst Installer, it already attempted to fix this.
</CardTip>

Open Device Manager, you can do so by right-clicking on the Start Menu button.
![right-clicking on start](/en/img/device-manager-poweruser-menu.png)
In Device Manager, locate the **Other Devices** category and extend it.
In there you should see up to 3 of the following devices:
- Audios
- Kinect for Windows Security
- Xbox NUI Camera

For each of them, right-click, then **Uninstall device** then OK.

<CardWarning title="Don't uninstall anything else!">
The Other Devices category may contain devices unrelated to Kinect. Only uninstall devices matching the list above!
</CardWarning>

Finally, right-click on any device, then **Scan for hardware changes**.
<Accordion title="Video instructions">
<video controls muted src="/en/mp4/notpowered.mp4"></video>
</Accordion>

## Nothing appears in "Other Devices"
First, check that your adapter is getting power. There should be a light either where the Kinect plugs in, or on the part that plugs into the wall.
![360 adapter light placement](/shared/img/360-adapter-light.jpg)
If you don't see any light. Try connecting it to a different outlet, but you probably have a faulty/broken adapter.
### What now?
If you just purchased the adapter, try returning it or asking for a refund if possible. Then [get another adapter](/en/buying-kinect#5) from a recommended source.