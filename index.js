$(document).ready(function() {
  $("#header").hover(function(ev) {
    $(this).text("Not yours").addClass("angry")
  }, function(ev) {
    $(this).text("Sheern's website").removeClass("angry")
  })
})

function onClick() {
  $.getJSON("https://api.kanye.rest/", function(data) {
    $("#data").text(data.quote).show()
  })
}