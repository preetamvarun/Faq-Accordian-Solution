$(document).ready(function () {
  $('.show-img').click(function () {
    $('.answer').slideUp();
    $('.show-img').show();
    $('.collapse-img').hide();
    $(this).hide();
    $(this).siblings('.collapse-img').show();
    $(this).siblings('.answer').slideDown();
  });
  $('.collapse-img').click(function () {
    $(this).hide();
    $(this).siblings('.show-img').show();
    $(this).siblings('.answer').slideUp();
  });
});
