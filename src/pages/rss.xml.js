import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Twofold-One | Blog",
    description: "Learning Astro Journey",
    site: "https://twofold-one.netlify.app/",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en-us</language>`,
  });
