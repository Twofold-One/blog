import { defineConfig } from "astro/config";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "one-dark-pro",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ["go", "js", "ts"],
      // Enable word wrap to prevent horizontal scrolling
      wrap: false,
    },
  },
});
