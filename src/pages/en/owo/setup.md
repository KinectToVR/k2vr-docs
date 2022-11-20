---
layout: '@layouts/DocsPage.astro'
title: How to configure and use owoTrack
description: How to use the Amethyst owoTrack plugin to use a phone as a waist tracker.
setup: | 
  import Accordion from '@components/Accordion.astro'
  import CardInfo from '@components/CardInfo.astro'
  import CardError from '@components/CardError.astro'
  import CardWarning from '@components/CardWarning.astro'
  import LinkButton from '@components/LinkButton.astro'
  import VideoPlayer from '@components/VideoPlayer.astro'
---
# How to configure and use owoTrack

## Can I use my Samsung Smart Fridge for this?

owoTrack requires a compatible phone, and a stable WiFi connection. A stable WiFi connection **does NOT** mean that you need a stable internet connection to use owoTrack.

![Look, we've tried.](/shared/img/fridge-my-behated.png)

## Using owoTrack with Amethyst

1. Inside of Amethyst, navigate to the devices page, then select "owoTrack".
2. Click the "Refresh" button to start the server.
3. Open owoTrack on your mobile device, and enable auto-discovery.
4. Point your phone forward like a remote.
5. Calibrate forward.
6. Place your phone upright, with the screen facing, and place it in your pants or however you're mounting your phone.
7. Calibrate down.
8. You're using owoTrack now!

## Installing owoTrack

### Android 4.4 (KitKat) or newer
- Check if your phone has an **accelerometer** and a **gyroscope** by going to [GSMArena](https://www.gsmarena.com/) and checking if your phone has these sensors.
- Download the [owoTrack](https://play.google.com/store/apps/details?id=org.ovrgyrotrackersync) app from Google Play.

### iOS 13 or newer

- Download and install [TestFlight](https://apps.apple.com/us/app/testflight/id899247664).
- Download and install [owoTrack](https://testflight.apple.com/join/1DZAkuCX) via TestFlight.

<CardInfo title="TestFlight Code">
The TestFlight code for owoTrack is `1DZAkuCX`.
</CardInfo>

### iOS 12

<CardWarning title="Jailbreak required">
iOS devices running iOS 12 require a jailbreak to install apps which are not available via the App Store. We are not responsible for any damage you perform on your device, proceed at your own risk.
</CardWarning>

<Accordion title="iOS 12">

- Jailbreak your phone. That is beyond the scope of this documentation.
- Open Cydia.
- Add `repo.hackyouriphone.org` to the list of sources in repo sources.
- Install AppStore++.
- Open the AppStore and search for TestFlight.
- Press and hold "Get". Install **version 2.7.0**.
- Download and install [owoTrack](https://testflight.apple.com/join/1DZAkuCX) via TestFlight from here.

</Accordion>

## Troubleshooting

### Disabling the SteamVR Add-on
Amethyst is not compatible with the owoTrack SteamVR add-on. You must disable owoTrack from SteamVR settings > Startup > Add-ons.

<LinkButton href="amethyst://disableowotrack">Disable owoTrack SteamVR add-on</LinkButton>

### Firewall
Your firewall might prevent owoTrack from being able to connect to your computer. Please make sure that ports `6969` and `35903` are open on UDP.

<CardInfo title="Amethyst Installer">
Amethyst Installer automatically handles this for Windows Firewall, but you may need to open these ports on other firewalls if you have any.
</CardInfo>