---
layout: '@layouts/DocsPage.astro'
title: Setting up Augmented Hip
description: How to setup Augmented Hip
setup: | 
  import CardWarning from '@components/CardWarning.astro'
  import CardError from '@components/CardError.astro'
  import Accordion from '@components/Accordion.astro'
---
# Setting up Augmented Hip

<CardWarning title="Doesn't work with ALVR">
Augmented Hip has been reported to break on setups where ALVR is used. Since I (Hekky) do not own an Meta Quest, I can't fix this. Of course, you can change this [by donating to us on OpenCollective](https://opencollective.com/k2vr).
</CardWarning>

<CardError title="Sometimes installs don't work properly">
The installer is broken on certain setups. If the installer breaks on your setup, please follow the [manual install instructions on the GitHub repo](https://github.com/aughip/augmented-hip#method-2-manual-install-1).
</CardError>

To setup Augmented Hip:

1. Navigate to [the Augmented Hip website](https://getaughip.com), and download the installer.
2. Run the installer, making sure SteamVR is closed.
3. Install Augmented Hip.
4. Start SteamVR, and turn on your fullbody trackers.