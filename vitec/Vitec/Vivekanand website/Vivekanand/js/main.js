(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
  
    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();
  
      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
      }
    });
  });



  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

})(jQuery);






// careers js
function myFunction1() {
  document.getElementById("demo1").innerHTML = "&ensp; Please share your resume with hr@vitec.co.in";
  var e2 = document.getElementById('demo1');
  e2.style.visibility = 'visible'
}
function myFunction2() {
  document.getElementById("demo2").innerHTML = "&ensp; Please share your resume with hr@vitec.co.in";
  var e2 = document.getElementById('demo2');
  e2.style.visibility = 'visible'
}
function myFunction3() {
  document.getElementById("demo3").innerHTML = "&ensp; Please share your resume with hr@vitec.co.in";
  var e2 = document.getElementById('demo3');
  e2.style.visibility = 'visible'
}
function myFunction4() {
  document.getElementById("demo4").innerHTML = "&ensp; Please share your resume with hr@vitec.co.in";
  var e2 = document.getElementById('demo4');
  e2.style.visibility = 'visible'
}

function myFunctionc1() {
  var el = document.getElementById('demo1');
  el.style.visibility = 'hidden'
}

function myFunctionc2() {
  var el = document.getElementById('demo2');
  el.style.visibility = 'hidden'
}

function myFunctionc3() {
  var el = document.getElementById('demo3');
  el.style.visibility = 'hidden'
}

function myFunctionc4() {
  var el = document.getElementById('demo4');
  el.style.visibility = 'hidden'
}





// form clearing out javascript


function changeVal(){
  setTimeout(() => {
    let var1=document.querySelector(".text-in");
    var1.value="";
    
  }, 50);
}
function changeEmailVal(){
  setTimeout(() => {
    let var1=document.querySelector("#email");
    var1.value="";
    
  }, 50);
}

function changeSubVal(){

  setTimeout(() => {
    let var1=document.querySelector("#subject");
    var1.value="";
    
  }, 50);
}

function changeMessVal(){
  
  setTimeout(() => {
    let var1=document.querySelector("#message-areaa");
    var1.value="";
    
  }, 50);
}
