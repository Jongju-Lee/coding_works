$(".faq_list .title").click(function () {
  $(this).siblings(".title").removeClass("active");
  $(this).toggleClass("active");
  $(this).siblings(".content").stop().slideUp(300);
  $(this).next().stop().slideDown(300);
});
