# K2VR documentation source
This repository contains the source files used to generate the docs portion of the [k2vr.tech](https://k2vr.tech) website.

It uses the same docs generator as for HekkyPBR. Created by @Hyblocker.

### Contributing
If you see any issues, typos, missing information or want to add entire new pages, feel free to make a pull request. Any and all efforts to improve this documentation is welcome. You can look at the existing files for reference, or see [non existent link]() for the HekkyDocs spec.

### Building
Do this in the folder of your local repo
- Install NPM
- Install pnpm `npm install pnpm --global`
- Initialize dev environment through pnpm `pnpm i --frozen-lockfile`

You can now start a dev server locally with `pnpm astro dev`  
Pages will update automatically in the browser on file save.

The actual pages are stored in `src/pages/[lang]/`  
Images and other resources are stored in the `public` folder.

### License
This documentation is licensed under a Creative Commons CC-BY-NC-SA 4.0 license. Please see the [Creative Commons](https://github.com/KinectToVR/k2vr-docs/blob/master/LICENSE) for more info.

![CC-BY-NC-SA](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)