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
    
    
});