$(function () {
    var hour = dayjs().hour();
    // printing date to currentDay id in header
    $("#currentDay").text("Todays date: " + dayjs().format("MMM D, YYYY"));
    // color change for divs based on time of day
    $('.time-block').each(function() {
      var id = $(this).attr('id').split('-')[1];
      var rowHour = parseInt(id);
      (hour > rowHour) ? $(this).addClass('past')
      : (hour < rowHour) ? $(this).addClass('future') 
      : $(this).addClass('present');
    });
});
  