const markdown = require("./markdown")
const { outdent } = require("outdent")

module.exports = {
  // Allowing for embedding markdown in njk layouts ->
  // Cleans root directory and allows for seperation of data content and layouts/views
  markdown: (content) => markdown.render(outdent.string(content)),
}
