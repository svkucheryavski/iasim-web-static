export default function(eleventyConfig) {
   eleventyConfig.addPassthroughCopy("src/images");
   eleventyConfig.addPassthroughCopy("src/documents");
   eleventyConfig.addPassthroughCopy("src/fonts");
   eleventyConfig.addPassthroughCopy("src/styles");

  eleventyConfig.addGlobalData("eleventyComputed", {
      bodyClass: data => {
         // "/events/" -> "page_events"
         // "/about/"  -> "page_about"
         let slug = data.page.url.replace(/\//g, "_").replace(/^_+|_+$/g, "");
         return `page__${slug || "home"}`;
      }
   });

   return {
      dir: {
         input: "src",
         includes: "_includes",
         output: "dist"
      },
      dataTemplateEngine: "liquid",
      htmlTemplateEngine: "liquid",
      markdownTemplateEngine: "liquid",
   }
};

