$(function() {
  $('#first').addClass("select");

  $('a[href^="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, 'swing');
        return false;
      }
    }
  });

  $('.about-newdot').click(function() {
    $('#first').removeClass("select");
    $('#second').addClass("select");
  })

  $('.pagination a').click(function() {
    $(this).addClass("select").siblings().removeClass("select");
  });
});