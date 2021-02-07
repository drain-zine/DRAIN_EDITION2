module.exports = function (eleventyConfig) {
  res_locations = ["./res", "./StarterPub/res", "./Noticeboard/res"]

  resLocations.map((location) => {
    eleventyConfig.addPassthroughCopy(location)
  })

  configObject = {
    dir: {
      // input: "views", // default `.`
      output: "_site", // default `_site`
      includes: "_includes", // This path is relative to the input dir. default `_includes`
    },
  }

  return configObject
}
