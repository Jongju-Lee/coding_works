$(".faq_content").eq(0).show();
$(".faq_title").click(function () {
  $(this).toggleClass("active");
  $(this).next().stop().slideToggle(300);
});
