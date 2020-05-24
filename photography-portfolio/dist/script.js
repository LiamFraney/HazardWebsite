// Scroll reveal
window.sr = ScrollReveal();
sr.reveal("img", {
  duration: 800,
  origin: "bottom",
  mobile: true
});
//Focus on image


// Sticky Header
$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
      $('.main_h').addClass('sticky');
  } else {
      $('.main_h').removeClass('sticky');
  }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
  if ($('.main_h').hasClass('open-nav')) {
      $('.main_h').removeClass('open-nav');
  } else {
      $('.main_h').addClass('open-nav');
  }
});

$('.main_h li a').click(function() {
  if ($('.main_h').hasClass('open-nav')) {
      $('.navigation').removeClass('open-nav');
      $('.main_h').removeClass('open-nav');
  }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
  var id = $(this).attr("href");
  var offset = 70;
  var target = $(id).offset().top - offset;
  $('html, body').animate({
      scrollTop: target
  }, 500);
  event.preventDefault();
});

$('.grid-container a').click(function(event){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    event.preventDefault();
    } else {
        event.preventDefault();
        $('[data-toggle="lightbox"]').click(function(event) {
          event.preventDefault();
          $(this).ekkoLightbox();
        });
    }
});	
