$(".add_on .like").click(function () {
  $(this).toggleClass("active");
});
$(".dark_mode").click(function () {
  $(this).toggleClass("dark");
  $(".card").toggleClass("dark");
  $(".add_on .like").toggleClass("dark");
  $(".add_on .more_btn").toggleClass("dark");
  $(".sns .item").toggleClass("dark");
});
