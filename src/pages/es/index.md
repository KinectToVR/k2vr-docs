---
layout: '@layouts/DocsPage.astro'
title: Amethyst Docs
locale: es
setup: | 
  import CardTip from '@components/CardTip.astro'
  import CardNoIcon from '@components/CardNoIcon.astro'
  import TableOfContents from '@components/TableOfContents.astro'
---
<div class="docs-index-header">
  <img src="/shared/img/amethyst-logo.webp">
  <h1>Amethyst</h1>
</div>
<br>

<CardTip title="This website is incomplete!">
This documentation is still a work-in-progress, it will hopefully be done by the time Amethyst releases. **You're welcome to help by contributing pages or translating [over on GitHub](https://github.com/kinecttovr/k2vr-docs).**
</CardTip>

This is the homepage for the Amethyst documentation. It's built from the markdown source at https://github.com/kinecttovr/k2vr-docs. Feel free to contribute.

<CardNoIcon title="About Amethyst and K2VR" href="about">
Learn more about the history and development of the app and everyone in the team.  
</CardNoIcon>

<CardNoIcon title="How Amethyst compares to other options" href="comparison">
A comprehensive comparison of using various devices in Amethyst compared to other full-body tracking solutions.
</CardNoIcon>

<CardNoIcon title="Getting a Kinect and adapter" href="buying-kinect">
Where and which Kinect and USB and power adapter should you purchase?
</CardNoIcon>
<TableOfContents locale="es" ignoreItem="General"/>