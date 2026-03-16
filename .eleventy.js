const { I18nPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // Add i18n plugin
  eleventyConfig.addPlugin(I18nPlugin, {
    defaultLanguage: "en",
    errorMode: "allow-fallback"
  });

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("public/css");
  eleventyConfig.addPassthroughCopy("public/img");
  eleventyConfig.addPassthroughCopy("public/*.json");
  eleventyConfig.addPassthroughCopy({ "public/img/favicon.png": "favicon.png" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
