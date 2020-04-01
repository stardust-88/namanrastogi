$(document).ready(function(){

/*------------sticky navigation--------------*/
    $('.js--about-section').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    }, {
  offset: '60px'
    });
    

/*-------------scrolling buttons------------------*/
      $('.js--scroll-to-aboutsec').click(function () {
       $('html, body').animate({scrollTop: $('.js--about-section').offset().top}, 1000); 
    });
    
      $('.js--scroll-to-contact').click(function () {
       $('html, body').animate({scrollTop: $('.js--footer').offset().top}, 1000); 
    });
    
    
 /*-------------------nav scrolls--------------------*/
    // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  /*-----------------------------------------------------------*/    
    
/*---------animation on scroll-----------*/
    $('.desc').waypoint(function(direction) {
        $('.desc').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
    
     $('.profile').waypoint(function(direction) {
        $('.profile').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });
    
     $('.row-skills').waypoint(function(direction) {
        $('.row-skills').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
     $('.certi-row').waypoint(function(direction) {
        $('.certi-row').addClass('animated slideInUp');
    }, {
        offset: '50%'
    });
    
      $('.timeline-row').waypoint(function(direction) {
        $('.timeline-row').addClass('animated slideInUp');
    }, {
        offset: '50%'
    });
    
    
/*------mobile navigation-------*/
    
      $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });
    
    
    
});
