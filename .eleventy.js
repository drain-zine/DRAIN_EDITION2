module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("res")

  configObject = {
    dir: {
      input: "views",
      output: "_site",
      includes: "_includes", // This path is relative to the input dir
    },
  }

  return configObject
}
