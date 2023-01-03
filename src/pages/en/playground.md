---
layout: '@layouts/DocsPage.astro'
title: Amethyst docs component playground
description: Why did you link to this?
index: false
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardTip from '@components/CardTip.astro'
  import CardHelp from '@components/CardHelp.astro'
  import CardWarning from '@components/CardWarning.astro'
  import CardError from '@components/CardError.astro'
  import ComparisionCard from '@components/ComparisionCard.astro'
  import Accordion from '@components/Accordion.astro'
---

# Amethyst docs component playground

----

# Full markdown support:


# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar


## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica 

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Custom Controls

### Cards

There are five (5) types of cards:

<CardInfo title="Info Card">
You can have *fucking* ***MARKDOWN*** ~~in~~ these!
</CardInfo>

<CardTip title="Tip Card">
You can have *fucking* ***MARKDOWN*** ~~in~~ these!
</CardTip>

<CardHelp title="Help Card">
You can have *fucking* ***MARKDOWN*** ~~in~~ these!
</CardHelp>

<CardWarning title="Warning Card">
You can have *fucking* ***MARKDOWN*** ~~in~~ these!
</CardWarning>

<CardError title="Error Card">
You can have *fucking* ***MARKDOWN*** ~~in~~ these!
</CardError>

<Accordion title="We have accordions too!">
## REMINDER YOU CAN HAVE FULL BLOODY MARKDOWN IN THESE THINGS TOO!!!!
*omg no way!*
</Accordion>

<ComparisionCard beforeSrc="/shared/img/toon-off.png" beforeTxt="Realistic Lighting" afterSrc="/shared/img/toon-on.png" afterTxt="Toon Lighting"/>