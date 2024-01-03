$(".item").mouseenter(function () {
  $(this).children(".item_desc").stop().fadeIn("fast");
});
$(".item").mouseleave(function () {
  $(this).children(".item_desc").stop().fadeOut("fast");
});
