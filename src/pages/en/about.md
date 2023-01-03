---
layout: '@layouts/DocsPage.astro'
title: About Amethyst and K2VR
description: How the project originally came about, What is Amethyst. And our hopes for the future.
setup: | 
  import Accordion from '@components/Accordion.astro'
---
# About Amethyst and K2VR
## The story
The K2VR Team and project originally started out as KinectToVR. It was an opensource application created by [sharkyh20](https://github.com/sharkyh20) for Kinect and PSMove full-body tracking. It was made as a sort of response to the alternatives being paid.

Because of real life obligations, Sharky stepped away from the project, leaving it unattended for a long time. For some reason, I (Aurora) picked up the project and chose to start giving users support for it, eventually writing a crude installer, meeting up with [Akaya](https://github.com/KimihikoAkayasaki) who at the time had forked the KinectToVR codebase and was intending on using it for an Arduino VR glove project.

Akaya's efforts in fixing up KinectToVR for their usecase led to a new version of the app. Since we didn't have a definitive answer on whether Sharky would pick the project back up at the time, we named this version of the app KinectToVR EX, or K2EX for short. The EX was meant to stand for "extra" or "extended" because it added features to the original work of Sharky.

Years have passed, and an official website, custom graphical installer, multiple large scale *yearly* updates and thousands of users later, we've arrived at present day.

## What is Amethyst?
Amethyst is a modular platform with support for [device plugins](/en/app/overview#4) that [you can write yourself](https://github.com/KinectToVR/K2TrackingDevice-Samples). if you know C++. By default it comes with device plugins for Xbox 360 Kinect, Xbox One Kinect, PSMoveService(Ex) and owoTrack.

It's pretty much a complete departure from the original KinectToVR app.

 For almost as long as K2EX has been a thing, Akaya has worked on a now defunct [rewrite of the app using Qt](https://github.com/kinecttovr/k2vr-application) as a side project, with the intent of having it replace the main app eventually. A lot of the work from this rewrite wasn't in vain though. From it was created [K2API](https://github.com/KinectToVR/K2TrackingDevice-Samples/blob/main/DEVICES.md), which provides the necessary interfaces for any application to communicate with the SteamVR driver. And a lot of boilerplate code for handling Kinect.

After multiple roadblocks were brought up by Qt, Akaya canned it and started working on a "super secret KTVR rewrite" using Microsoft's [WinUI 3](https://docs.microsoft.com/en-us/windows/apps/winui/) for the interface.

Originally titled KinectToVR 1.0, it was given the codename Amethyst. *I came up with that name in about 30 seconds. It was only meant to be a codename for us to refer to the app internally without getting confused.*

It eventually dawned on me that considering the small jump in version numbers, only from 0.9 to 1.0, users might not catch on to the fact that this is an entirely new app. And so the name Amethyst was given to the whole WinUI 3 project. And it was given a shiny new coat of paint on the "dots" logo. It also turns out that people don't tend to misspell Amethyst as much as they do KinectToVR.

## Where are we now?
Now, **the app is called Amethyst, it's created by K2VR Team.** And support for it is given on the K2VR Community Discord server. The application and it's documentation are hosted on the k2vr.tech website. The application used to install Amethyst is called Amethyst Installer.

So, TL;DR  
When you talk about the app: Amethyst  
When you talk about the project: K2VR

## Who is that girl?
That's Violet, she acts as the face of K2VR. Because Amethyst is a body tracking application, it made sense for us to have a consistent character to help us create tracking demos in a way that's consistent with the rest of branding.

You can find her doing some sick tricks on the website's homepage, greeting you in the Amethyst installer and in the calibration window, to show you a direct visual guide on how to move about your room.

## Why maintain Kinect full-body? Isn't it a dead-end technology?
I can see why one would think that, but the reality is that over the years, with different ideas, innovations and such, we've been able to push so much out of this aging hardware, and it gets a ton of existing silicon a new lease on life, and makes people happy.

I won't hide that it often hurts having to deal with the outdated drivers for Kinect, they're very buggy and the source of most of our users' problems. But when people come in the server and tell us just how much fun they had with their Kinect, it makes it all worth it. Having body tracking in VR is one of the most immersion-fullfilling experiences, and we get to provide it free or almost free of charge to anyone.

Kinect is already way better than a 30 dollar sensor from 2010 has any right to be. And we're not done. Because nothing is confirmed yet, I won't reveal potential future plans, but expect some really cool stuff from the team.

## Do you take donations?
Yes, [right here](https://opencollective.com/k2vr) on our OpenCollective page. You can either make a monthly or one-time donation.

Money will go to domain and hosting costs, buying missing hardware for team members to test faster, and compensating everyone's volunteer work they've done for years.

Donators will be given a permanent role on the Discord and have their name listed in the app's credits page. (You can choose not to if you wish to keep anonymity)