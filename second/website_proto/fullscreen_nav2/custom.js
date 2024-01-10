$(".trigger").click(function () {
  $(".trigger, .overlay, .gnb").toggleClass("active");
});
$(".gnb a").click(function () {
  $(".trigger, .overlay, .gnb").removeClass("active");
});
