module.exports = function (eleventyConfig) {
  copyDirectories = ["res", "styles", "LinkedLounge"]
  copyDirectories.map((path) => {
    eleventyConfig.addPassthroughCopy(path)
  })

  configObject = {
    dir: {
      input: "views", // default `.`
      output: "_site", // default `_site`
      includes: "_includes", // This path is relative to the input dir. default `_includes`
      data: "_data", // defaults to _data, relative to input
    },
  }

  return configObject
}
