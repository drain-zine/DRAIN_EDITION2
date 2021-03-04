export function toggleSpeech(speechText, style) {
  var textbox = document.getElementById("speechText")
  $(textbox).text(speechText[Math.floor(Math.random() * speechText.length)])
  document.getElementById("speechContainer").style.display = style
}
