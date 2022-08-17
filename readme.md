# K2VR documentation source
This repository contains the source files used to generate the Amethyst docs at [docs.k2vr.tech](https://docs.k2vr.tech).

It uses the same docs generator as for HekkyPBR. Created by [@Hyblocker](https://github.com/hyblocker).

### Contributing
If you see any issues, typos, missing information or want to add entire new pages, or provide translations, feel free to make a pull request. Any and all efforts to improve this documentation is welcome.

To know what components are available to you, check out [the playground](https://docs.k2vr.tech/en/playground) and [the source for it](https://github.com/KinectToVR/k2vr-docs/blob/master/src/pages/en/playground.md).

Full GitHub-flavored markdown can be used in docs pages, though you should always check in the browser how things render, especially when nesting items.

### Building
- Clone the `master` branch and navigate to it.
- Install NPM
- Install pnpm with `npm install pnpm --global`
- Initialize the dev environment through pnpm `pnpm i --frozen-lockfile`

You can now start a dev server locally with `pnpm astro dev`  
Pages will update automatically in the browser on file save.

The actual pages are stored in `src/pages/[lang]/`  
Images and other resources are stored in the `public` folder.

We recommend using VSCode for editing, because it will let you easily re-generate search through the NPM Scripts panel.

### License
This documentation is licensed under a Creative Commons CC-BY-NC-SA 4.0 license. Please see the [Creative Commons](https://github.com/KinectToVR/k2vr-docs/blob/master/LICENSE) for more info.

![CC-BY-NC-SA](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)