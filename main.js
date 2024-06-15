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

  $('.Each-Accordian img').hover(
    // Mouse enter event
    function () {
      $(this).siblings('.question').addClass('hovered');
    },
    // Mouse leave event
    function () {
      $(this).siblings('.question').removeClass('hovered');
    }
  );
});
