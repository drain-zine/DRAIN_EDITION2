module.exports = {
  paths: {
    fileCssHref: (data) => `/styles${data.page.filePathStem}.css`,
    parentCssHref: (data) =>
      `/styles${data.page.filePathStem.replace(
        new RegExp(`${data.page.fileSlug}$`, "g"),
        ""
      )}style.css`,
  },
}
