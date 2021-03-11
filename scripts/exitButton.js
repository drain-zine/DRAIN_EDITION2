$(document).ready(function () {
  $("#exitButton").mouseover(function () {
    console.log("hover!")
    $(this).delay(1000).attr("src", "/res/StarterPub/dynamic/cheers.gif")
  })

  $("#exitButton").mouseout(function () {
    $(this).delay(1000).attr("src", "/res/StarterPub/dynamic/cheersStill.gif")
  })

  $("#exitButton").click(function () {
    const audio = new Audio("/res/StarterPub/sound/cheers.mp3")
    audio.play()
    // $("#introBodyDiv").fadeOut(6000);
    setTimeout("window.open('welcome.html', '_self')", 2000)
  })
})
