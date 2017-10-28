$(document).ready(function() {
    
    /* Switch between main navbar and sticky navigation when page is scrolled */    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
    /* Scroll to correct section when buttons in header are clicked */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });

    /* Scroll to correct section when links in navbar are clicked */
    $(function() {
        $('a[href*="#"]')
          .not('[href="#"]')
          .click(function(event) {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
          });    
    });
    
    /* Animate features on scroll */
    $('.js--waypoint-1').waypoint(function(direction) {
        $('.js--waypoint-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    /* Animate app-screen image on scroll */
    $('.js--waypoint-2').waypoint(function(direction) {
        $('.js--waypoint-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    /* Animate cities on scroll */    
    $('.js--waypoint-3').waypoint(function(direction) {
        $('.js--waypoint-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    /* Animate pricing plans on scroll */    
    $('.js--waypoint-4').waypoint(function(direction) {
        $('.js--waypoint-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /* Mobile nav */
    $('.js--nav-icon, .js--main-nav a, .logo-black').click(function(element) {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        var clicked = element.target.classname;
        
        // exit if user clicked the logo and not the menu button
        if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black') {
            return;
        }
        
        // open or close mobile nav menu screen width is less than 768px
        if ($(window).width() < 768){
            nav.slideToggle(200);
        }
        
        // toggle icon for menu button when it is clicked
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');            
        }        
        
    });
    
    $(window).resize(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        if ($(window).width() > 767){
            nav.css("display", "block");
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });    
    
});