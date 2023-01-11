$(".count-btn").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#addResult").val();
  if (btnType == "add") {
    $("#addResult").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#addResult").val(parseInt(inputVal) - 1);
  }
});

$(".count-btn-2").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#addResult-2").val();
  if (btnType == "add") {
    $("#addResult-2").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#addResult-2").val(parseInt(inputVal) - 1);
  }
});

$(".count-btn-3").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#addResult-3").val();
  if (btnType == "add") {
    $("#addResult-3").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#addResult-3").val(parseInt(inputVal) - 1);
  }
});

$(".count-btn-4").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#addResult-4").val();
  if (btnType == "add") {
    $("#addResult-4").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#addResult-4").val(parseInt(inputVal) - 1);
  }
});

$(".button1").click(function () {
  $(".howMany1").show();
});

$(".close").click(function () {
  $(".howMany1").hide();
});

$(".button1").click(function () {
  $(".popup-background").show();
});

$(".close").click(function () {
  $(".popup-background").hide();
});

$(".button2").click(function () {
  $(".howMany2").show();
});

$(".close").click(function () {
  $(".howMany2").hide();
});

$(".button2").click(function () {
  $(".popup-background").show();
});

$(".button3").click(function () {
  $(".howMany3").show();
});

$(".close").click(function () {
  $(".howMany3").hide();
});

$(".button3").click(function () {
  $(".popup-background").show();
});

$(".button4").click(function () {
  $(".howMany4").show();
});

$(".close").click(function () {
  $(".howMany4").hide();
});

$(".button4").click(function () {
  $(".popup-background").show();
});
