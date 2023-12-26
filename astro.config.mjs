import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  base: "shise-docs",
  integrations: [tailwind(), mdx()],
  shikiConfig: {
    theme: "light-plus",
    wrap: true,
  },
});
