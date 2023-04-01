const today = dayjs();
$("#currentDay").text(today.format("MMM D, YYYY"));

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    const text = $(this).siblings(".description").val();
    const time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  });

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  $(".time-block").each(function () {
    const hour = dayjs().format("H");
    const divId = parseInt($(this).attr("id"));
    if (divId < hour) {
      $(this).removeClass("present future").addClass("past");
    } else if (divId === hour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });
});
