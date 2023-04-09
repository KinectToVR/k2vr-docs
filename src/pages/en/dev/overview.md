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

# What's the Amethyst Plugins Contract, and how does it actually work?

<CardInfo title="Preview content!">
Both the plugin contract and Amethyst itself are still in the Technical Preview stage, and you may 
need to manually update your plugins to work with the latest version of Amethyst. 
We'll try to keep the API backward-compatible as much as we can, though.
</CardInfo>

### Amethyst.NET plugins
**Plugins are the base of how Amethyst works.** They are used to feed the app with the body tracking data
of your choice (`ITrackingDevice`) and then for receiving it (`IServiceEndpoint`), parsed and processed accordingly.
**Multiple plugins can be used to provide tracking data** at a time (the *Base* device and optionally one or more *Override* devices), 
but **only one actual tracking output is supported** (the *Service*). 

<CardTip title="Multiple plugin exports">
[MEF](https://learn.microsoft.com/en-us/dotnet/framework/mef/) provides support for exporting multiple
plugins from one assembly, and Amethyst will load them & satisfy their (optional) imports on one-by-one
basis. Though it is actually possible to use, we stronly encourage you to separate your plugins, each 
inside its own container assembly. This will help you keep a clean codebase, and minimize potential errors.
</CardTip>

<CardInfo title="Exporting the plugin">
Your plugin assembly (the .dll file) will need to be named like `plugin*` for Amethyst to find it.
Multiple plugin assemblies can be put in one folder, and the folder name may be completely random.
Please just remember to name the exported assembly file like `plugin*` to skip the unnecessary pain.
</CardInfo>

### Interfacing with Amethyst
By importing the `IAmethystHost` interface and using it, **plugins can also request other data from their host**, 
and invoke functions within Amethyst itself. You can acquire various runtime configuration variables, request 
a **reload of your plugin's interface and status**, or even stop the update loop for a moment via a scoped lock.

<CardWarning title="Importing IAmethystHost">
Though it may appear possible to import the `IAmethystHost` extension from any (even a non-exported class), 
the import will not be met in that case. That is because the host is exported for each plugin
completely separately, and may only be imported from a valid, exported plugin. To use the host
in child classes, you can either forward it, or set up events. [You can find an example here.](https://github.com/KinectToVR/plugin_openvr)
</CardWarning>

### Plugin Metadata
**That said, you also have to decorate each of your plugins with [Exported Metadata](https://learn.microsoft.com/en-us/dotnet/framework/mef/attributed-programming-model-overview-mef)**,
which Amethyst will read and parse prior to loading your actual plugin assembly. **You have to export a display
name for your plugin** (one for each exported *Device* or *Service*) **and a serial for it** (we'll call it `Guid`).
The exported metadata may also include a publisher name, and a website your plugin source (or documentation) resides.

Sample plugin metadata export:
```c#
[ExportMetadata("Name", "SamplePlugin")]
[ExportMetadata("Guid", "SCONTOSO-AME2-APII-DVCE-DVCESMPLUGIN")]
[ExportMetadata("Publisher", "Contoso")]             // Optional
[ExportMetadata("Website", "https://contoso.com")]   // Optional
```

This sample **metadata will attribute** a plugin with **displayed name `SamplePlugin`**, internally labeled by its `Guid` 
as `SCONTOSO-AME2-APII-DVCE-DVCESMPLDVCE`, by `Contoso` pointing to its site, `https://contoso.com`.
**Plugin `Guid`s must not repeat!** If a plugin declares an already-exisitng `Guid`, **it will be discarded 
upon initial loading and marked as invalid.** (It will be shown as a `duplicate` in the Amethyst Plugin Manger)
These decorations must be put on top of the `public class [Plugin] : [Interface]` class defintion.

### Choosing the plugin type
**Writing a plugin, you will need to pick the interface to be implemented.** Your plugin will either feed the app with 
the body tracking data of your choice (`ITrackingDevice`) or be used for receiving it (`IServiceEndpoint`).
Sample `TrackingDevice`s include Microsoft Kinect or PSMoveService, and a sample `ServiceEndpoint` is SteamVR.
**Plugins are separated** via [Assembly Load Contexts](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.loader.assemblyloadcontext?view=net-7.0)
and cannot use import other loaded already-loaded plugins, no matter how hard they would try to do so.

| `ITrackingDevice` | `IServiceEndpoint` |
| ----------------- | ------------------ |
| Provides the trakcing data to Amethyst | Receives parsed and processed data |
| Multiple devices can be used at the same time for compound tracking | Only one endpoint can receive data from Amethyst at a time (*see below) |

<CardTip title="Only one Service Endpoint">
Though only one `IServiceEndpoint` can receive the tracking data at a time, you can request the plugin host (Amethyst)
to send you RAW poses of its internal tracker objects. Do it so by calling `AppJointPoses` on your imported `IAmethystHost`.
</CardTip>

### Choosing the language
Plugins can be **written in all Microsoft-Interface projectable languages** but **exported only from these of .NET (Core)**.
That means **you can write your plugin in C++, F# or even Swift**, and import it to your C# exported plugin.
An example of such a plugin is the official [owoTrackVR Plugin](https://github.com/KinectToVR/plugin_owoTrackVR), written in C++/WinRT, then projected to C# and exported.

We strongly recommend using C# for all plugins, whenever possible (example: the official [Kinect V2 Plugin](https://github.com/KinectToVR/plugin_KinectV2)).
**You can also combine languages**, and an example of which is the [Kinect V1 Plugin](https://github.com/KinectToVR/plugin_KinectV1), which base is written in C++/CLI, 
then referenced from a C# plugin, which is then exported to Amethyst. 

You can also export your plugin directly from any .NET (Core) language! (C#, C++/CLI, VB.NET, F#)
Though, declaring custom plugin settings user interface is **only available** for C# and C++/WinRT-Projected plugins.
Closing, a plugin using VB.NET is the official [PSMoveService Plugin](https://github.com/KinectToVR/plugin_PSMoveService).

For examples of `ServiceEndpoint`s, please check out our official [OpenVR/SteamVR](https://github.com/KinectToVR/plugin_OpenVR) and [(VRChat) OSC](https://github.com/KinectToVR/plugin_OSC) plugins!

<CardInfo title="Unresolved dependencies">
You can safely import everything you need to, please remember about trimming your plugin for it to be more lightweight though.  
Additionally, we recommend making sure that your plugin is **self-contained** when publishing it, because no one knows what's gonna be missing on the user's machine!  
If some dependency fails to resolve, your plugin will **not be loaded** by Amethyst and an appropriate log will be written to note that.
</CardInfo>

<CardTip title="Lazy loading">
You may want to enable lazy loading to save your time and nerves, then an unresolved dependency will cause a composition error
and add your plugin to the load-attempted plugin list, instead of making Amethyst silently reject even trying to load the plugin.
</CardTip>

<Accordion title="Choosing the right configuration for your plugin">
Here are some possible language configurations for your plugin:

- .NET Supported (Pure)
  - [**Recommended**, Easy] `C#` => The easiest one to implement, maintain and deploy, quite scalable and fast. Generally recommended because of wide access to packages, extensions and docs. Also takes the least time to write plugins in, can use C/C++ stuff via C++/CLI (CLR) wrappers and P/Invoke or projected WinRT methods (MIDL/WinMD) if/when needed. Supports Amethyst Settings Interface via Windows App SDK and/or CsWinRT.
  - `C++/CLI` => `C# `but with sick syntax, can't actually use native stuff (like STL and C libraries) Suitabke for devs who prefer manual management of stuff, C++ syntax, or plan on extending their Pure plugin with Mixed CLR mode (use dynanically-aligned C++ stuff inside their plugin / static is simply and strictly not supported!) Quite large compilation times and output, Mixed mode is kinda more recommended, Amethyst Settings Interface not supported.
  - `F#` => Only if you're a `JS` developer looking for a familiar syntax, plugins involving data science handlers, or just somehow like it. Generally small user and usage base, although all .NET stuff is probably OK. Amethyst Settings Interface not supported.
  - `Visual Basic .NET` => Only if you like `VB` (`.NET`) or are already quite familiar with it, similarly to F#. Generally small user and usage base, although all .NET stuff is probably OK. Very simple to start with and develop in, though... that's pretty much all of it. Amethyst Settings Interface not supported.

- `CLR` Supported (Mixed)
  - [Intermediate] `C++/CLI` => You can use both managed (`.NET`) and native (C++) types, great for devs who have some grasp over both C# & C++ and need to use both of them in their plugin. You can use most stuff from both language and runtime types, although with several limitations. This mode (Mixed CLR mode) may only use dynanically-aligned C++ stuff inside the plugin, static alignment is simply and strictly not supported in this case! Amethyst Settings Interface not supported.

- Projected (Pure + Native)
  - [**Recommended**, Advanced] `WinRT` => You create a device handler shim in C# and call your handler methods using projection. This is the best approach for most larger already-existing plugins, you typically want to use C++/WinRT runtime library (cppwinrt) as your plugins implementation handler, though any WinRT-enabled language is OK. Uses a severe amount of resources upon compilation, generation & pre-deployment. Supports Amethyst Settings Interface via Windows App SDK and/or CsWinRT. (From the level of the `C#` shim handler!)
</Accordion>
