module.exports = {
  permalink: (data) => {
    topLevelFiles = ["overworld", "noticeboard"]
    if (topLevelFiles.includes(data.page.fileSlug))
      return `/${data.page.fileSlug}.html`
    else return `/${data.page.filePathStem}.html`
  },
  paths: {
    fileCssHref: (data) => `/styles${data.page.filePathStem}.css`,
    parentCssHref: (data) =>
      `/styles${data.page.filePathStem.replace(
        new RegExp(`${data.page.fileSlug}$`, "g"),
        ""
      )}style.css`,
  },
}
