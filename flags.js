// This code runs when the page loads
$(function() {
	var flagcounter =0;
  $(".thumbnail").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    flagcounter++;
    console.log(elementThatWasClicked);
    console.log(flagcounter);
    $(".flagcounter").text(flagcounter);
    elementThatWasClicked.parent().remove();
  })

})
