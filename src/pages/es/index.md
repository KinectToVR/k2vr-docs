---
layout: '@layouts/DocsPage.astro'
title: Amethyst Docs
locale: es
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import TableOfContents from '@components/TableOfContents.astro'
---
# Amethyst Docs
<CardInfo title="About these docs">
Esta es la página inicial para la documentación de Amethyst. Está hecho a base de la fuente Markdown en https://github.com/kinecttovr/k2vr-docs, siéntete libre de contribuir o abrir errores si encuentras erratas o información incorrecta, o si simplemente quieres añadir más información.
</CardInfo>

---
Aquí hay una lista completa de páginas ordenadas por categorías

<TableOfContents locale="es" ignoreItem="General"/>