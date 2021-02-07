module.exports = function (eleventyConfig) {
  resLocations = ["res", "styles"]

  resLocations.map((location) => {
    eleventyConfig.addPassthroughCopy(location)
  })

  configObject = {
    dir: {
      input: "views", // default `.`
      output: "_site", // default `_site`
      includes: "_includes", // This path is relative to the input dir. default `_includes`
    },
  }

  return configObject
}
