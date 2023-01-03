---
layout: '@layouts/DocsPage.astro'
title: Making content about Amethyst
description: Tips and guidelines to make better focused content and videos when covering Amethyst
setup: | 
  import CardWarning from '@components/CardWarning.astro'
  import CardTip from '@components/CardTip.astro'
---
# Making content about Amethyst
Amethyst is a complex app. It's amde to be easy to use. But **there's a lot that users can screw up without the right information on hand.**

## Considerations when making videos

**We understand the usefulness of video as a medium for conveying information.** It's perfect for those who prefer a visual approach to learning things, and it can allow you to explain complicated concepts more succinctly.

**That being said, videos, due to their nature are often hard to update.** Especially on platforms like YouTube, where one might make a tutorial to help others, but also for their own gain in views, money or notoriety. So, video creators are often incentivized to leave their content up instead of replacing the video, or unlisting it then making another one when the old video has gone out of fashion.

There are a few things you can follow and keep in mind to make tutorial videos the best they can be:

### Be clear and concise!
In our own documentation and getting started pages, **we made every page so it could be skimmed over only reading text in bold**, warnings and lists **and still provide all the important information to the user**. This methodology translates to video as well. You don't need to spend 2 minutes explaining what a Kinect does, people already know that, why do you think they clicked on the video?

### Don't kid yourself
Finding a new shiny piece of tech can put rose-tinted glasses on you, and you'll want to tell everyone about how cool and awesome it is, with good reason. But **if you're going to make an informative video, you have to take the glasses off and look at the bigger picture**, see the flaws in things, the problems that can arise. Because **hiding any of the issues to users would just lead to them developing distrust in the software or in you when something breaks.**

### Timeliness is key
**Videos are stuck in time**, but that doesn't mean they can't be aware of it. **Make a call-out to the official website, or even simply to the fact the video could be outdated** in the future. People can continue watching your video, but that way, **users will know to be careful and double-check info elsewhere**. Leading to less issues, and better satisfaction with your 3 year old video because you had a really good explanation of the calibration process that clicked with people.

### Anecdotal evidence does not make a tutorial
**If you find some arcane steps to fix some obscure issue** you had that wasn't shown anywhere else, **try reproducing the problem and the fix first**, researching into why the fix works, and possibly asking us over on Discord (We've seen a lot of weird stuff over the years.) **Nothing sucks more than finding a tutorial** about a random obscure bug, **only to find out that the fix only works for the setup of the person** who made the video.

## What should you cover?

### Amethyst is constantly being updated and worked on
**The app is in active development**, while the feature-set is mostly set in stone by now. **Things can change drastically at any time.**

Even after release, **future updates may bring large changes.**

### Kinect is not for everyone
While Kinect is awesome for it's price, **some people just want Vive Trackers**, and you gotta tell them the truth about Kinect, **it's not perfect:**

* Sideways tracking breaks down after a few seconds.
* Sitting down works fine only under proper tracking conditions.
* Users need a large room, otherwise tracking quality will take a hit.
* Foot rotation is doable. But when using nothing but the Kinect, it won't do miracles.
* Any poses where the head is lower than the waist, e.g. handstands, are impossible.
* Laying down is possible, but only in perfect conditions, and given you use the tracker freeze feature.

<br>

### Read the docs, we wrote them for you
**Unless a team member says otherwise, treat the docs as the most accurate information you can find on the matter.** We put a lot of work into covering every possible topic, please feel free to use the search feature.

**If you're unsure** about something you wish to put in a video, **don't hesitate to ask us on Discord.**

### Xbox 360 Kinect > Xbox One Kinect
Newer is not always better, and it couldn't be more true than with the Xbox One Kinect. Between **incompatibility with lighthouse devices, even stricter and higher USB controller requirements and a hardware flaw that causes the foot rotation to jitter back and forth (There's a semi-fix in Amethyst for it)**, it's really not a good option for anyone compared to Xbox 360 Kinect.

You can find more info [on this page](/en/one/common-issues) about the matter.

### Avoid Amazon when purchasing adapters
Statistics from our Discord server show that **every adapter that has been dead on arrival, or died later on, was purchased from Amazon.**

**With Kinect 360, third-party adapters are fine, as long as they're not from Amazon.**

With Kinect One, you need to ensure it has a signal repeater, and the cables aren't bad, *and that it says Microsoft on it*, and generally, **getting a 360 Kinect and an adapter for it costs less than a good quality Xbox One adapter.**

### Users need a very large playspace.
As shown on the [Improve tracking](/en/app/improve-tracking) page, the **difference between a room that is too small for Kinect, and one that lets you stand a few meters away, is HUGE.**

It goes from unuseable garbage, to fooling people into thinking it's Vive pucks.

As a general rule of thumb, **tracking starts at about 6ft (2m), and isn't very good until 8-9ft (~3m).**

As well, **the user needs to be able to place the Kinect around chest to eye level**, putting it very low or on the floor will yield worse results.

Equally, putting it too high will also result in bad tracking quality.

### Some USB controllers are not compatible at all
USB controllers are the actual chipset mini-CPU things on your motherboard or laptop logic board, that take care of handling the in/out data from USB devices.

These controllers are made by multiple manufacturers, and **certain models are not made very well, and driver updates can't fix them.** Here's a list of very bad ones:

* ASMedia 3.0 controllers
* VIA 3.0 controllers
* Pre-Ryzen AMD 3.0 controllers
* Fresco Logic 3.0 controllers

These should be avoided. **You can see what host controllers you have in Device Manager under the Universal Serial Bus controllers section.**

### Point users to the website, not GitHub or our Discord
**The website is made to cover everything** the user may need to know about Amethyst and it's supported devices and apps. And it will point the user towards the installer download. **Avoid using direct GitHub links because then we need to put warnings on every corner**, to ensure users are always getting the latest info.

### Run the installer, follow the on-screen instructions
The installer is built to be easy to use and understand. **You should not have to explain how it works to the user.**

### Users WILL run into problems
Assume that only 1 in 100 users will have a flawless setup experience. **It's very common for the Kinect SDK to randomly break for a multitude of reasons, or for other problems to happen.** There are a lot of moving parts to the Kinect full-body setup after all.

### And most importantly
**Remind users to tell us that they came from YOUR video** if they come to our Discord server, this will help us in knowing exactly what instructions were given to them. And what they could've misunderstood causing the error they're having.

## In conclusion
I'm sorry that this seems rather draconian, you can ignore half of these things, but **if you make a video that gets popular and has a lot of wrong info in it**, causing misinformation to be spread, **you're gonna hear from us.**

Happy video making!