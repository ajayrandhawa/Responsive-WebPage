;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

	var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'armentum-mobile-nav').hide();
                    var hasChildMenu = $('#armentum-mobile-nav').find('li:has(ul)');

                    $('#header').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.armentum-btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#armentum-mobile-nav').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.armentum-btn-menu').on('click', function() {         
            $('#armentum-mobile-nav').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#armentum-mobile-nav li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    };

    var headerFixed = function() {
        if ( $('body').hasClass('header_sticky') ) {
            var nav = $('#header');

            if ( nav.size() !== 0 ) {
                var offsetTop = $('#header').offset().top,
                    headerHeight = $('#header').height(),
                    injectSpace = $('<div />', { height: headerHeight }).insertAfter(nav);   
                    injectSpace.hide();                 

                $(window).on('load scroll', function(){
                    if ( $(window).scrollTop() > offsetTop ) {
                        if ( $('#header').hasClass('header-main') ) {
                            injectSpace.show();
                        }
                        $('#header').addClass('downscrolled');                        
                    } else {
                        $('#header').removeClass('header-small downscrolled');
                        injectSpace.hide();
                    }                    
                })
            }
        }
    };


    $(function() {   
        responsiveMenu();     
   	});
/*=========================================================================
	Main Slider
=========================================================================*/
	$('#main-slider').owlCarousel({
        loop:true,
        autoplay: true,
        smartSpeed: 500,
        items: 1,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });


    $('#coustomer-slider').owlCarousel({
        loop:true,
        autoplay: true,
        smartSpeed: 500,
        items: 3,
        dots: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    
    /*=========================================================================
	Main Slider
=========================================================================*/
	
	    // ------- PARALLAX  -------
    $(".parallaxie").parallaxie({
        speed: 0.6,
        offset: 0,
    });

   //--------------------team page carousel---------------------
    $("#blog .owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: false,
        margin: 30,
        stagePadding: 25,
        autoplay: true,
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 1,
            },
            768: {
                items: 1
            },
            992: {
                items: 3
            }
        }
    });	

    $(document).ready(function() {
 
        $("#owl-customer").owlCarousel({
       
            autoPlay: 3000, //Set AutoPlay to 3 seconds
       
            items : 4,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3]
       
        });
       
      });

})(jQuery);