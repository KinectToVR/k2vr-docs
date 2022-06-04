---
layout: '@layouts/DocsPage.astro'
title: How to use overrides
setup: | 
  import Accordion from '@components/Accordion.astro'
---
# How to use overrides
Overrides in Amethyst allow you to take the rotation and/or position of one device and replace it with that of another. It is only limited to two devices though.

You could for example use an Xbox 360 Kinect for your general tracking. And use PSMoveService as an override, using rotation from PS Move controllers for your feet while still using the Kinect's skeleton tracking for the position.

Note for example, when using PS Moves for foot rotation like this, **the center of rotation of the controller is not going to match where the joint from the Kinect is. So you'll most likely want to use offsets** in the general page to adjust the position until it matches more closely. Or else you'll have weird displacement when turning.

When an override runs into an error, the base device will still be affected, which means that in our PS Move feet example, your feet would lose all rotation until the device is deselected.

Also, you can only select a device as override if it's status is successful.