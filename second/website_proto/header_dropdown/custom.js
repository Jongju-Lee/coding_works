$(".banner i").click(function () {
  $(".banner_outer").slideUp("slow");
});
$(".trigger").click(function () {
  $(this).toggleClass("active");
  $(".gnb, .sitemap").toggleClass("active");
});
