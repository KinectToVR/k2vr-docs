import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import { h } from 'hastscript';
import rehypeSlugifyCounter from 'rehype-slugify-counter';

const AnchorLinkIcon = h('svg', {
  width: 16,
  height: 16,
  version: 1.1,
  viewBox: '0 0 16 16',
  xlmns: 'http://www.w3.org/2000/svg'
}, h('path', {
  fillRule: 'evenodd',
  fill: 'currentcolor',
  d: 'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'
}));

export default defineConfig({
  site: 'https://docs.k2vr.tech',
  integrations: [preact(), react(), sitemap()],
  markdown: {
    mode: 'mdx',
    syntaxHighlight: 'shiki',
    rehypePlugins: [
    // These are here because setting custom plugins disables the default plugins
    'remark-smartypants', 'remark-gfm',
    // This generates a set of IDs and numeric counters for headers
    rehypeSlugifyCounter,
    // This adds said IDs to headings
    ['rehype-autolink-headings', {
      properties: {
        class: 'anchor-link'
      },
      behavior: 'after',
      group: ({tagName, counter}) => h(`div.heading-wrapper.level-${tagName}`, {
        id: counter
      }),
      content: heading => [h(`span.anchor-icon`, {
        ariaHidden: 'true'
      }, AnchorLinkIcon)]
    }]],
    shikiConfig: {
      theme: '../../../../../../src/srcery', // YES I KNOW THIS IS HACKY AS FUCK, IDC LOL
      wrap: true
    }
  }
});