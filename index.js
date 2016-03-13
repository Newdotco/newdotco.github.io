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

  $('.signin-button').click(function() {
    $('.pagination').append("<a href='#invitation' class='dot' id='fifth'></a>");
    $('#fourth').removeClass("select");
    $('#fifth').addClass("select");
    $('.pagination').hide();
  })

  $('.logo-register').click(function() {
    $('.pagination').show('slow', function() {
      $('#fifth').removeClass("select");
      $('#first').addClass("select");
      $('#fifth').hide();
    });
  });

  $('#invitation-mobile').click(function() {
    //$('.info-newdot, .info-newdot-extra, .register').css('display', 'none');
    $('.about-newdot').hide();
    $('.invitation').css('display', 'block');
  });

  $('.pagination a').click(function() {
    $(this).addClass("select").siblings().removeClass("select");
  });
});