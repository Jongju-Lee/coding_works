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
  // ##### Slick.js - Section : Project #####
  $(".project-photo").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
  });

  // ##### Slick.js - Section : Plan #####
  $(".history-slider").slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
});
