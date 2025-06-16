import { loadEnv } from "vite";
import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import { spectreDark } from './src/ec-theme';

const {
  GISCUS_REPO,
  GISCUS_REPO_ID,
  GISCUS_CATEGORY,
  GISCUS_CATEGORY_ID,
  GISCUS_MAPPING,
  GISCUS_STRICT,
  GISCUS_REACTIONS_ENABLED,
  GISCUS_EMIT_METADATA,
  GISCUS_LANG
} = loadEnv(process.env.NODE_ENV!, process.cwd(), "");

// https://astro.build/config
const config = defineConfig({
  site: 'https://Blog.reecehall.com',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      		name: 'Redefined Cipher',
		openGraph: {
			home: {
				title: 'Redefined Cipher',
          description: "Welcome to Reece's blog - sharing thoughts, experiences, and insights on technology, development, and life."
        },
        blog: {
          title: 'Blog',
          description: 'Thoughts, experiences, and insights on technology, development, and life.'
        },
        projects: {
          title: 'Projects',
          description: 'Exploring technology, systems, and strategic frameworks through the lens of mastery. Powered by Redefine Labs.'
        }
      },
      giscus: {
        repository: GISCUS_REPO || "R3defined/PragmaticBlog",
        repositoryId: GISCUS_REPO_ID || "R_kgDOO3h8vw",
        category: GISCUS_CATEGORY || "General",
        categoryId: GISCUS_CATEGORY_ID || "DIC_kwDOO3h8v84CrXSQ",
        mapping: (GISCUS_MAPPING || "pathname") as any,
        strict: GISCUS_STRICT === "true",
        reactionsEnabled: GISCUS_REACTIONS_ENABLED !== "false",
        emitMetadata: GISCUS_EMIT_METADATA === "true",
        lang: GISCUS_LANG || "en",
      }
    })
  ]
});

export default config;