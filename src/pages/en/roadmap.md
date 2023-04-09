---
layout: '@layouts/DocsPage.astro'
title: Amethyst roadmap
description: What are we working on or planning
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardWarning from '@components/CardWarning.astro'
  import LinkButton from '@components/LinkButton.astro'
---
# Amethyst roadmap

<CardInfo title="What is this?">
This page is about what we're working on and planning. This can change at any time without warning.
</CardInfo>

> As well, there are no ETAs for anything, we release stuff when it's ready.

## Near future

#### Elbow tracking improvements
Elbow trackers on Kinect are currently just using the direct elbow point from the Kinect skeleton. This isn't the best, because games like VRChat expect the tracker to be a little before the elbow on your forearm. For more stability, and to get the shoulder position. The elbows will now mix in the shoulder data from the skeleton to account for this.

#### Tracking improvements
This is basically low hanging fruit we're looking into implementing into Amethyst to possibly improve tracking tenfold. We will be using a mix of various kinematics techniques to compensate for when the Kinect loses confidence in its tracking. Meaning there should be less instances of glitchy legs. This won't magically solve the tracking if you're standing too close, but it will improve the quality overall in situations that were previously borderline unusable.  
More details will be revealed when ready.

## Semi-far future
> The stuff here is in the planning and "can we even do this? is this worth it?" stages.

<CardWarning title="These are only plans">
None of these are guaranteed to be arriving to Amethyst.
</CardWarning>

#### AI-based Kinect tracking
99% of the Kinect's limitations are due to it using a proprietary skeleton tracking SDK created by Microsoft Research in the mid-2000s.

They were using what was considered state-of-the-art in machine learning at the time, but even then also had to make sure it ran on **10% of an Xbox 360!** so they made a ton of concessions. Limited the training dataset to poses they deemed useful for Xbox games, and imposed hardcoded limitations like the Kinect always facing forward.

We wish to take the Kinect's depth map, and create our own pose estimation neural network with the help of the community to gather a large dataset. This is very still in the planning stages, but we're really hopeful we can pull it off.

#### Amethyst on Linux???!???
This one is a maybe. With Amethyst.NET, the UI and the logic are being decoupled. Meaning that in theory, Amethyst could run as a .NET Core app on Linux, with it's UI in UNO Platform.

The Kinect plugin would not have skeleton tracking (Unless we've got AI tracking working by then), PSMove couldn't work (PSMSEX is Windows only), so, you'd be left with owoTrack, and maybe an OpenHMD plugin to use a Rift as trackers.

The technical aspect is very feasible, but it's moreso we're wondering if it's worth it at all.