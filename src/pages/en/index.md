---
layout: '@layouts/DocsPage.astro'
title: Amethyst Docs
setup: | 
  import CardNoIcon from '@components/CardNoIcon.astro'
  import TableOfContents from '@components/TableOfContents.astro'
---
<div class="docs-index-header" style="height: 10em; display:flex; justify-content:center;">
  <img src="/shared/img/amethyst-logo.png" height="100%">
  <h1 style="line-height:2.7em; margin-left:.5em">Amethyst</h1>
</div>
<br>

This is the homepage for the Amethyst documentation. It's built from the markdown source at https://github.com/kinecttovr/k2vr-docs feel free to contribute.

<CardNoIcon title="About Amethyst and K2VR" href="about">
Learn more about the history and development of the app and everyone in the team.  
</CardNoIcon>

<CardNoIcon title="How Amethyst compares to other options" href="comparison">
A comprehensive comparison of using various devices in Amethyst compared to other full-body tracking solutions.
</CardNoIcon>

<CardNoIcon title="Getting a Kinect and adapter" href="buying-kinect">
Where and which Kinect and USB and power adapter should you purchase?
</CardNoIcon>
<TableOfContents locale="en" ignoreItem="General"/>