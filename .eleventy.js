const util = require("util");
const htmlmin = require("html-minifier");
const svgContents = require("eleventy-plugin-svg-contents");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  eleventyConfig.addPlugin(svgContents);

  eleventyConfig.addFilter("dump", obj => {
    return util.inspect(obj);
  });

  eleventyConfig.addFilter("copyRightYear", function(type) {
    return new Date().getFullYear().toString();
  });

  eleventyConfig.addFilter("formatDate", dte =>
    dte ? dte.toISOString() : null
  );

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  return {
    dir: { input: "src", output: "dist", data: "_data" },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "html", "yml"],
    htmlTemplateEngine: "njk"
  };
};
