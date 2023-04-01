var today = dayjs();
$("#currentDay").text(today.format("MMM D, YYYY"));

var saveButtonEl = document.querySelector("save");
var now = dayjs().hour();
var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour13 = $("#13");
var hour14 = $("#14");
var hour15 = $("#15");
var hour16 = $("#16");
var hour17 = $("#17");

$(document).ready(function () {

  $(".saveBtn").on("click", function () {

    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  $("#9 .description").val(localStorage.getItem("9"))
  $("#10 .description").val((localStorage.getItem("10")))
  $("#11 .description").val((localStorage.getItem("11")))
  $("#12 .description").val((localStorage.getItem("12")))
  $("#13 .description").val((localStorage.getItem("13")))
  $("#14 .description").val((localStorage.getItem("14")))
  $("#15 .description").val((localStorage.getItem("15")))
  $("#16 .description").val((localStorage.getItem("16")))
  $("#17 .description").val((localStorage.getItem("17")))
  
$(".time-block").each(function(){
var hour = dayjs().format("H")
console.log(hour);
var divId = parseInt($(this).attr("id"))
if (divId<hour) {
  $(this).removeClass("present")
  $(this).removeClass("future")
  $(this).addClass("past")
  
}
else if (divId == hour) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
}
else {
   $(this).removeClass("past");
   $(this).removeClass("present");
   $(this).addClass("future");
}
}) 
});