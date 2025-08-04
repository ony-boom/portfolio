// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",

  markdown: {
    shikiConfig: {
      theme: "catppuccin-latte",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },

  integrations: [icon()],

  adapter: node({
    mode: "standalone",
  }),
});
