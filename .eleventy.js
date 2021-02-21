const markdown = require("./utils/markdown")
const shortcodes = require("./utils/shortcodes")

module.exports = function (eleventyConfig) {
  // Allow custom markdown parser, switchfrom default engine (liquid) to njk
  eleventyConfig.setLibrary("md", markdown)

  // Shortcodes
  eleventyConfig.addPairedShortcode("markdown", shortcodes.markdown)

  // Pass throughs
  copyDirectories = ["res", "LinkedLounge"]
  copyDirectories.map((path) => {
    eleventyConfig.addPassthroughCopy(path)
  })

  eleventyConfig.addWatchTarget("styles")

  configObject = {
    dir: {
      input: "views", // default `.`
      output: "_site", // default `_site`
      includes: "_includes", // This path is relative to the input dir. default `_includes`
      data: "_data", // defaults to _data, relative to input
    },

    // switch default engines from liquid to njk
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  }

  return configObject
}
