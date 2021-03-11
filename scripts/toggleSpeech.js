export function toggleSpeech(speechText, fadeIn = 1000, fadeOut = 3000) {
  var textbox = document.getElementById("speechText")
  $(textbox).text(speechText)

  setTimeout(function () {
    document.getElementById("speechContainer").style.display = "block"
  }, fadeIn)

  setTimeout(function () {
    document.getElementById("speechContainer").style.display = "none"
  }, fadeOut)
}
