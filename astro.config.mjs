// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),

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
});
