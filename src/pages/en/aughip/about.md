---
layout: '@layouts/DocsPage.astro'
title: What is Augmented Hip
description: Do you need other devices to use Augmented Hip?
setup: | 
  import Accordion from '@components/Accordion.astro'
  import VideoPlayer from '@components/VideoPlayer.astro'
---
# What is Augmented Hip

Augmented Hip is a virtual hip tracking solution, which works entirely through software. It uses the position of your feet and VR headset to estimate the position and orientation of your hip tracker. It does not require any other devices to work, and can work with any trackers supported by SteamVR, including Kinect, Vive Trackers, and other solutions.

<VideoPlayer src="/shared/video/aughip-vive.mp4" />

> Augmented Hip, using an HTC Vive HMD, and Vive Wands for leg tracking. Note that this was recorded before the [VRchat IK 2.0 Update](https://hello.vrchat.com/blog/vrchat-ik-2).

## How does it work?

Augmented Hip uses inverse kinematics to simulate what your body would do in real-time. This allows for a responsive and mostly accurate hip tracker, with minimal computational overhead.

## Is Augmented Hip better than owoTrack or a Vive Tracker?

The primary advantage Augmented Hip has over other trackers is the fact that it is purely virtual. As a result of this, it doesn't need a battery to operate - as long as your VR headset and feet are tracking well Augmented Hip will also track well.

## Is Augmented Hip better than a Kinect hip tracker?

Augmented Hip might give you more a more responsive hip, and make pulling off certain poses far easier than with a Kinect hip tracker, but this is highly dependent on your setup. Your mileage may vary.

## Is it integrated into Amethyst?

No, but we have plans on doing so later.