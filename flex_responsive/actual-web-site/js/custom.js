// ########## Scroll Event ##########
$(window).scroll(function () {
  if ($(window).scrollTop() > 50) {
    //  현재 스크롤 양이 500보다 크다면 이곳을 실행.
    $("header .banner").slideUp();
    $("nav").addClass("active");
    $(".btn_top").addClass("active");
  } else {
    //  현재 스크롤 양이 500보다 작다면 이곳을 실행
    $("header .banner").slideDown();
    $("nav").removeClass("active");
    $(".btn_top").removeClass("active");
  }
});
// ########## Slick Slider ##########
$(".my-slider").slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
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
      breakpoint: 800,
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
