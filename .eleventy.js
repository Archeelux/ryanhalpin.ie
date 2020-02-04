const util = require("util");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  eleventyConfig.addFilter("dump", obj => {
    return util.inspect(obj);
  });

  eleventyConfig.addFilter("copyRightYear", function(type) {
    return new Date().getFullYear().toString();
  });

  eleventyConfig.addFilter("formatDate", dte =>
    dte ? dte.toISOString() : null
  );

  return {
    dir: { input: "src", output: "dist", data: "_data" },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "html", "yml"],
    htmlTemplateEngine: "njk"
  };
};
