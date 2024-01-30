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
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
});
