---
layout: '@layouts/DocsPage.astro'
title: Improve tracking
description: Best practices to make your Kinect tracking work better
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardWarning from '@components/CardWarning.astro'
---
# Improve tracking
**The difference between a well configured Kinect setup and one that was plonked down without much thought is pretty big.** There are a number of things you should take into consideration if you wish to get the most out of Kinect.

- Room size and cleanliness
- Kinect placement
- Clothing material
- Avoiding sunlight and other infrared interference
- Not using lens adapters
- Playing into the Kinect's strengths
- Using overrides to augment tracking

## Room size and cleanliness
As shown in [the page about getting a Kinect and adapter](/en/buying-kinect), **there is a non-negligible minimum distance required for tracking to work at all,** and for tracking to work best.

**Xbox 360 Kinect:**
Recommended: 9ft (3m)
Minimum: 6ft (2m)

**Xbox One Kinect:**
Recommended: 7ft (2.6m)
Minimum: 5ft (1.7m)

As a general rule of thumb, **your entire body should be visible in the Amethyst tracking preview.** As well, **clearing out your space** of any furniture or objects that could obscure the depth of the Kinect **will help with tracking.**

## Kinect placement
As an extension of room size, **placing your Kinect properly in relation to both the room, and how tall you are, is just as important.**

If the Kinect is too low, the tracking quality will go down.  
Too high and it will also lower quality.

You should **aim for around shoulder to eye level, with an angle and distance that allows the Kinect to see you from head to toe**, and see the floor.

Avoid very steep angles, **anything past -21 degree is going to reduce the tracking quality** by a lot.

## Clothing material
**The color of your clothes doesn't matter, but the type of fabric, and the shape does.**
Wearing baggy clothes like loose sweatpants, dresses, or skirts, will obscure the actual shape of your body, making it harder for the Kinect to track.

As well, **consider the way that the Kinect tracks.** The fabric your clothes are made of should not only be reflective to infrared, **but also reflect it clearly.**

**Think of clear versus frosted glass.** Both of them reflect light, but the **frosted glass refracts the light bouncing onto it into a blurry mess.** The Kinect needs to send a precise pattern of dotted light that it then scans with an infrared camera. **If that pattern isn't properly reflected, then that depth is either completely discarded, or has to be guessed.**

## Avoid sunlight
While Kinect is imperviable to most types of lighting, be it incandescent, neon, or LED lights, **the sun emits a lot of infrared light,** which when mixed with the Kinect's need to see it's own infrared structured light, causes issues. **Try putting/closing blinds, or moving the Kinect so it does not face directly into a window.**

## Do not use lens adapters such as Nyko Zoom
While it is understandable that one would wish to increase the tracking volume of the Xbox 360 Kinect with an aftermarket lens accessory. These gizmos, gadgets, doohickeys, **use fisheye lenses, which cause the structured light and the view of the camera to become heavily distorted.** While it may have worked for games such as Just Dance, which did not use skeleton tracking, instead merely matching the body shape in the depth map to what it expected the player to do, it won't work for games that require skeleton tracking. **Either the skeleton tracking system will never pick you up, or your movements will be very distorted in 3D space.**

Also, [Microsoft themselves warned against using it](https://web.archive.org/web/20110711194855/http://www.computerandvideogames.com/310675/news/ms-warns-against-kinect-zoom-modification/) (Ignore the comments from the morons that had no idea how Kinect works.)

## Play into the Kinect's strengths
The tracking SDK was made specifically to run very fast, on very little power (10% of an Xbox 360), as such, many concessions were made, **for example, during the development of the skeleton tracking system, only poses that were deemed useful for "gaming" were kept in the training dataset.** The tracking SDK **assumes the player's head to be up, and that the player is facing forward.** It's not that the SDK cannot understand the difference between front and back, it's that **it was artificially limited to increase stability** in a computationally cheap manner.

Understanding this, you can temper your expectations on tracking in situations where the SDK wasn't trained. And you can try to avoid these, so people don't point at you and laugh "haha, you kinect loser, buy vive pucks, just print money idiot."

## Using overrides to augment tracking
Considering the often lackluster joint rotation on the Kinect SDK, **you can use PS Move controllers, or phones with owoTrack to replace the rotation of one or more joints from the skeleton with more accurate data.**

See [this page](/en/app/overrides) for more information about setting up overrides.