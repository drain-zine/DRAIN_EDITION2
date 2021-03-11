$(document).ready(function () {
  $("#exitButton").mouseover(function () {
    console.log("hover!")
    $(this).delay(1000).attr("src", "/res/YeOldeFountain/dynamic/cheers.gif")
  })

  $("#exitButton").mouseout(function () {
    $(this)
      .delay(1000)
      .attr("src", "/res/YeOldeFountain/dynamic/cheersStill.gif")
  })

  $("#exitButton").click(function () {
    const audio = new Audio("/res/YeOldeFountain/sound/cheers.mp3")
    audio.play()
    // $("#introBodyDiv").fadeOut(6000);
    setTimeout("window.open('welcome.html', '_self')", 2000)
  })
})
