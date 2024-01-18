// Scroll Event
$(window).scroll(function () {
  if (window.scrollY > 500) {
    // 스크롤이 500px 초과하면
    $(".download_btn").addClass("active");
  } else if (window.scrollY < 500) {
    // 스크롤이 500px 미만이면
    $(".download_btn").removeClass("active");
  }
});
// Footer Accordion Event
$("footer .item_title").click(function () {
  $(this).addClass("active");
  $(this).parent().siblings().children(".item_title").removeClass("active");
  $(this).next().stop().slideDown();
  $(this).parent().siblings().children(".item_content").slideUp();
});
