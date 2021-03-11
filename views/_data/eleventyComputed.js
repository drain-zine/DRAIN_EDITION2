module.exports = {
  permalink: (data) => {
    if (
      data.page.fileSlug == "overworld" ||
      data.page.fileSlug == "Noticeboard"
    )
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
