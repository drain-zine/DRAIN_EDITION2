$(document).ready(function () {
  $(document).mousemove(function (e) {
    $("cursorImg").css("left", e.pageX + "px")
    $("cursorImg").css("top", e.pageY + "px")
  })
})
