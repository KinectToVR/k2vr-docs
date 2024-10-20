---
layout: '@layouts/DocsPage.astro'
title: Overview
description: What's the Amethyst Plugins Contract, and how does it work?
setup: | 
  import CardTip from '@components/CardTip.astro'
  import CardInfo from '@components/CardInfo.astro'
  import CardWarning from '@components/CardWarning.astro'
  import Accordion from '@components/Accordion.astro'
---

# Localizing Amethyst

<CardInfo title="Fast forward">
To get started quickly, press Win+R and run `amethyst-app:localize`. This will open a folder containing everything you need 
to localize the app and installed plugins. After that, launch Amethyst, modify or update the files, and see the changes in action!
</CardInfo>

### Introduction
This page will help you understand how to localize (translate text resource files for):
- Amethyst (Desktop App)
- Installed App Plugins

Each "module" is a folder with JSON localization files, containing some keys and values.  

<CardTip title="Staying up to date">
It's possible that some new resources will be added to the app or plugins in the future. In such cases, preview app builds may be helpful,
as Store versions are updated much less frequently. To install a preview build, visit the [AppCenter distribution website](https://install.appcenter.ms/orgs/k2vr/apps/amethyst/distribution_groups/blob).
</CardWarning>

### Preparations
To get started, press Win+R and run `amethyst-app:localize`.  
The folder you will be presented with contains some subfolders:
- `Amethyst` - resources for the application itself
- `plugin_*` - resources for each installed plugin

To get started, copy-paste `en.json` and rename it to your language, e.g. `ja.json`.  
Get language code by cropping its [`LCID` tag](https://docs.microsoft.com/en-us/openspecs/office_standards/ms-oe376/6c085406-a698-4e12-9d4d-c3b0ee3dbc4a) before `-`, e.g. Czech `cs-CZ` → `cs`.  

For `ja.json`, the new language would appear in Amethyst as `ja`, edit the `locales.json` file to fix it:

<table>
<tr>
<th>
Before
</th>
<th>
After
</th>
</tr>

<tr style="vertical-align:top">
<td style="vertical-align:top">

```jsonc
/* English & others */
"en": {
    "en": "English",
    "fr": "French",
    "de": "German",
    "ru": "Russian"
},

...









```
</td>
<td>

```jsonc
/* English & others */
"en": {
    "en": "English",
    "fr": "French",
    "de": "German",
    "ru": "Russian",
    "ja": "Japanese" // Add to each
},
...

/* Your langauge */
"ja": {
    "en": "英語",
    "fr": "フランス語",
    "de": "ドイツ語",
    "ru": "ロシア語",
    "ja": "日本語"
}
```
</td>
</tr>
</table>

<CardTip title="Need to restart from scratch?">
By default, `amethyst-app:localize` will not overwrite any files not to suddenly devour your valuable work. However, 
if for some reason, you want to pull all "packed" resources back from the app, running `amethyst-app:localize-force` will overwrite them.
</CardWarning>

### Localization
Now that you've added your language to the global enumeration, you can start localizing.  
Replace the resource string in each key with the translated one. (the one on the right)  

<CardWarning title="Don't translate the keys!">
That should already be obvious, but please do not translate string resource keys. 
These are the ones on the left side of each JSON entry, with many `/` (slash) characters inside them, denoting the "friendly" human-readable resource path.
</CardWarning>

Sample localization before/after:
```jsonc
/* ja.json - not translated */
...
"/GeneralPage/Buttons/Save": "Save",
...
```

```jsonc
/* ja.json - translated */
...
"/GeneralPage/Buttons/Save": "保存",
...
```

<CardTip title="Something looks weird?">
If you see a space at the start/end of a string, please keep it there! Additionally, when editing multiline keys, 
please remember that newline inside the string is a `\n`. (The same goes for tabs: `\t`, you'll get used to it... maybe. Or just take a look at the live preview)  
</CardWarning>

### Hot reload / Live preview
Each time you make changes (e.g. save) your translation file, Amethyst will automatically  
reload it and apply the pending changes to the user interface. (it may blink or lag a little)  
  
This allows for adding, editing and fixing your resources live, while Amethyst is running.  
The same goes for all plugins loaded by Amethyst, for all added and supported languages.

### Localization FAQ

<Accordion title="Is using machine translation okay?">
To the limit that you can be 100% confident what you wrote is proper, you are allowed to use services like DeepL or Google Translate to HELP you. 
Not to write the whole thing. If we wanted ChatGPT-made translations, we wouldn't be asking for your precious time!
</Accordion>

<Accordion title="I want to see how it will look in the app!">
As described a bit upper on this site, you can add, edit and preview your changes on runtime.
</Accordion>

<Accordion title="What about a CLA? How is that gonna work?">
You will be credited in the app's info page for your awesome work. Though, we're not gonna write which language have you Amethyst translated into.
Everything you publish to Amethyst will be licensed under GPLv3, unless an agreement is made between parties for partial licenses.
</Accordion>

<Accordion title="How do I submit work?">
You have a few ways available to do that, actually:
<ul>
  <strong><li>Open a pull request for <a href="https://github.com/KinectToVR/Amethyst">the app</a> and each updated plugin</li></strong>
  <li><a href="https://github.com/KinectToVR/Amethyst-Releases/discussions">Open a discussion</a>, attaching your changed files</li>
  <li>Write to us on <a href="https://discord.gg/YBQCRDG">our Discord server</a> (or to me, directly)</li>
</ul>
</Accordion>

<Accordion title="What about future features and additions?">
You're welcome to update your translations in the future, 
it would be super appreciated, actually! 
Either to fix errors or support new features.
</Accordion>

<Accordion title="Why not Weblate/Crodwin/...?">
It's easier for both you *and us* to to handle localization updates via PRs (really). 
On top of that, you can actually see your changes live in the app if you localize on your own PC!
</br>
</br>
~~Actually, we're on our way to setting up a custom server to handle the API.~~
~~When it's finished, there's a high chance that we'll host our Weblate on it.~~
~~Until then, if editing pure JSON is disturbing for you, you can use a <a href="https://codebeautify.org/online-json-editor">web editor</a>.~~
</Accordion>
