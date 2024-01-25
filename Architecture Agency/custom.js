$(function () {
  // ##### Trigger #####
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".gnb").toggleClass("active");
  });
  $(".gnb a, section").click(function () {
    $(".trigger, .gnb").removeClass("active");
  });
  // ##### Smooth Scroll #####
  $(".gnb a").click(function (e) {
    $.scrollTo(this.hash || 0, 500);
  });
  // ##### Window Scroll Event #####
  $(window).scroll(function () {
    if (window.scrollY >= 50) {
      // scroll이 50 이상 움직였을때
      $("header, .btn_top").addClass("active");
    } else if (window.scrollY < 50) {
      // scroll이 50 미만으로 움직였을때
      $("header, .btn_top").removeClass("active");
    }
  });
});
