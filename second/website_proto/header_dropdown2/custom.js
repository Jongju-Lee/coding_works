$(".banner_outer i").click(function () {
  $(".banner_outer").slideUp();
});
$(".gnb li:last-child").click(function () {
  $(".trigger, .gnb, .site_map").toggleClass("active");
});
