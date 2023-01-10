$(".count-btn").click(function () {
  // .attr() 屬性，點擊判斷data
  var btnType = $(this).attr("data");
  // 取input的值，以方便做運算
  var inputVal = $("#addResult").val();
  // if點下去的按鈕data="add"  數字加1
  if (btnType == "add") {
    $("#addResult").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#addResult").val(parseInt(inputVal) - 1);
  }
});

$(".button1").click(function () {
  $(".howMany").show();
});

$(".close").click(function () {
  $(".howMany").hide();
});
