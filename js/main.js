/*  ---------------------------------------------------
  Template Name: Deerhost
  Description:  Deerhost Hosting HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas__menu__wrapper").addClass("show__offcanvas__menu");
        $(".offcanvas__menu__overlay").addClass("active");
    });

    $(".canvas__close, .offcanvas__menu__overlay").on('click', function () {
        $(".offcanvas__menu__wrapper").removeClass("show__offcanvas__menu");
        $(".offcanvas__menu__overlay").removeClass("active");
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hero__slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    /*------------------
        Radio btn
    --------------------*/
    $(".pricing__swipe-btn label").on('click', function (e) {
        $(".pricing__swipe-btn label").removeClass("active");
        $(this).addClass("active");

        if(e.target.htmlFor == 'month') {
            $(".yearly__plans").removeClass('active');
            $(".monthly__plans").addClass('active');
        } else if (e.target.htmlFor == 'yearly') {
            $(".monthly__plans").removeClass('active');
            $(".yearly__plans").addClass('active');
        }     
    });
    /*------------------
        Achieve Counter
    --------------------*/
    $('.achieve-counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll',
        horizontalOffset: 0,
          verticalOffset: 0
      });
    
    
        var fullHeight = function() {
    
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function(){
                $('.js-fullheight').css('height', $(window).height());
            });
    
        };
        fullHeight();
    
        // loader
        var loader = function() {
            setTimeout(function() { 
                if($('#ftco-loader').length > 0) {
                    $('#ftco-loader').removeClass('show');
                }
            }, 1);
        };
        loader();
    
        // Scrollax
       $.Scrollax();
    
        var carousel = function() {
            $('.home-slider').owlCarousel({
            loop:true,
            autoplay: true,
            margin:0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav:false,
            autoplayHoverPause: false,
            items: 1,
            navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
            responsive:{
              0:{
                items:1,
                nav:false
              },
              600:{
                items:1,
                nav:false
              },
              1000:{
                items:1,
                nav:false
              }
            }
            });
            $('.carousel-testimony').owlCarousel({
                center: true,
                loop: true,
                items:1,
                margin: 30,
                stagePadding: 0,
                nav: true,
                navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                responsive:{
                    0:{
                        items: 1
                    },
                    600:{
                        items: 3
                    },
                    1000:{
                        items: 3
                    }
                }
            });
        };
        carousel();
    
        $('nav .dropdown').hover(function(){
            var $this = $(this);
            // 	 timer;
            // clearTimeout(timer);
            $this.addClass('show');
            $this.find('> a').attr('aria-expanded', true);
            // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
            $this.find('.dropdown-menu').addClass('show');
        }, function(){
            var $this = $(this);
                // timer;
            // timer = setTimeout(function(){
                $this.removeClass('show');
                $this.find('> a').attr('aria-expanded', false);
                // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
                $this.find('.dropdown-menu').removeClass('show');
            // }, 100);
        });
    
    
        $('#dropdown04').on('show.bs.dropdown', function () {
          console.log('show');
        });
    
        // scroll
        var scrollWindow = function() {
            $(window).scroll(function(){
                var $w = $(this),
                        st = $w.scrollTop(),
                        navbar = $('.ftco_navbar'),
                        sd = $('.js-scroll-wrap');
    
                if (st > 150) {
                    if ( !navbar.hasClass('scrolled') ) {
                        navbar.addClass('scrolled');	
                    }
                } 
                if (st < 150) {
                    if ( navbar.hasClass('scrolled') ) {
                        navbar.removeClass('scrolled sleep');
                    }
                } 
                if ( st > 30 ) {
                    if ( !navbar.hasClass('awake') ) {
                        navbar.addClass('awake');	
                    }
                    
                    if(sd.length > 0) {
                        sd.addClass('sleep');
                    }
                }
                if ( st < 30 ) {
                    if ( navbar.hasClass('awake') ) {
                        navbar.removeClass('awake');
                        navbar.addClass('sleep');
                    }
                    if(sd.length > 0) {
                        sd.removeClass('sleep');
                    }
                }
            });
        };
        scrollWindow();
        
        var counter = function() {
            
            $('#section-counter').waypoint( function( direction ) {
    
                if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
    
                    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                    $('.number').each(function(){
                        var $this = $(this),
                            num = $this.data('number');
                            console.log(num);
                        $this.animateNumber(
                          {
                            number: num,
                            numberStep: comma_separator_number_step
                          }, 7000
                        );
                    });
                    
                }
    
            } , { offset: '95%' } );
    
        }
        counter();
    
        var contentWayPoint = function() {
            var i = 0;
            $('.ftco-animate').waypoint( function( direction ) {
    
                if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
                    
                    i++;
    
                    $(this.element).addClass('item-animate');
                    setTimeout(function(){
    
                        $('body .ftco-animate.item-animate').each(function(k){
                            var el = $(this);
                            setTimeout( function () {
                                var effect = el.data('animate-effect');
                                if ( effect === 'fadeIn') {
                                    el.addClass('fadeIn ftco-animated');
                                } else if ( effect === 'fadeInLeft') {
                                    el.addClass('fadeInLeft ftco-animated');
                                } else if ( effect === 'fadeInRight') {
                                    el.addClass('fadeInRight ftco-animated');
                                } else {
                                    el.addClass('fadeInUp ftco-animated');
                                }
                                el.removeClass('item-animate');
                            },  k * 50, 'easeInOutExpo' );
                        });
                        
                    }, 100);
                    
                }
    
            } , { offset: '95%' } );
        };
        contentWayPoint();
    
    
        // navigation
        var OnePageNav = function() {
            $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
                 e.preventDefault();
    
                 var hash = this.hash,
                         navToggler = $('.navbar-toggler');
                 $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 700, 'easeInOutExpo', function(){
                window.location.hash = hash;
              });
    
    
              if ( navToggler.is(':visible') ) {
                  navToggler.click();
              }
            });
            $('body').on('activate.bs.scrollspy', function () {
              console.log('nice');
            })
        };
        OnePageNav();
    
    
        // magnific popup
        $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
         gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          verticalFit: true
        },
        zoom: {
          enabled: true,
          duration: 300 // don't foget to change the duration also in CSS
        }
      });
    
      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
    
        fixedContentPos: false
      });
    
    
      // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);
