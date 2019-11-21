const util = require("util");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addFilter("dump", obj => {
    return util.inspect(obj);
  });

  eleventyConfig.addFilter("copyRightYear", function(type) {
    return new Date().getFullYear().toString();
  });

  return {
    dir: { input: "src", output: "dist", data: "_data" },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "html", "yml"],
    htmlTemplateEngine: "njk"
  };
};
