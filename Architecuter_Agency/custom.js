/* ##### Slick.js - Section : Plan ##### */
$(".plan-slider").slick({
  dots: true,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
/* ##### Slick.js - Section : Project ##### */
$(".project-photo").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
});
/* Header - Scroll Event */
$(window).scroll(function () {
  if (window.scrollY >= 50) {
    // 스크롤 다운이 50 이상이면
    $("header").addClass("active");
  } else if (window.screenY <= 50) {
    // 스크롤 다운이 50 이하이면
    $("header").removeClass("active");
  }
});
/* Header - Trigger */
$(".trigger").click(function () {
  $(this).toggleClass("active");
  $(".gnb").toggleClass("active");
});
$(".gnb .menu a").click(function () {
  $(".trigger, .gnb").removeClass("active");
});
