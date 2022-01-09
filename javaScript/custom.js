$(window).on('load', function() {
    "use strict";   

    /*=========================================================================
        Menu Clicks
    =========================================================================*/
    // Show the first tab and hide the rest
    $('.anchor-menu li:first-child a').addClass('active');
    $('.animated-section:first').addClass('section-visible');

    // Click function
    $('.anchor-menu li a, a.section-link').on('click', function(){
      $('.anchor-menu li a').removeClass('active');
      $(this).addClass('active');
      $('.animated-section').removeClass('section-visible');
      
      var activeTab = $(this).attr('href');
        $(activeTab).addClass('section-visible');
      return false;
    });

    if(window.location.hash) {
        $('.animated-section').removeClass('section-visible');
        $(window.location.hash).addClass('section-visible');
    } else {
        
    }

    /*=========================================================================
        Preloader
    =========================================================================*/
    $("#preloader").delay(750).fadeOut('slow');
    $(".site-wrapper").delay(750).fadeIn('slow');

    /*=========================================================================
     Isotope
     =========================================================================*/
    $('.portfolio-filter').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.portfolio-filter').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'li', function() {
            $buttonGroup.find('.current').removeClass('current');
            $( this ).addClass('current');
        });
    });

    var $container = $('.portfolio-wrapper');
    $container.imagesLoaded( function() {
      $('.portfolio-wrapper').isotope({
          // options
          itemSelector: '[class*="col-"]',
          percentPosition: true,
          masonry: {
              // use element for option
              columnWidth: '[class*="col-"]'
          }
      });
    });

    var bolbyPopup = function(){
      /*=========================================================================
              Magnific Popup
      =========================================================================*/
      $('.work-image').magnificPopup({
        type: 'image',
        closeBtnInside: false,
        mainClass: 'my-mfp-zoom-in',
      });

      $('.work-content').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: false,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
      });

      $('.work-video').magnificPopup({
        type: 'iframe',
        closeBtnInside: false,
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>', 

            patterns: {
              youtube: {
                index: 'youtube.com/',

                id: 'v=',

                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
              },
              vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: '//player.vimeo.com/video/%id%?autoplay=1'
              },
              gmaps: {
                index: '//maps.google.',
                src: '%id%&output=embed'
              }

            },

            srcAction: 'iframe_src',
          }
      });

      $('.gallery-link').on('click', function () {
          $(this).next().magnificPopup('open');
      });

      $('.gallery').each(function () {
          $(this).magnificPopup({
              delegate: 'a',
              type: 'image',
              closeBtnInside: false,
              gallery: {
                  enabled: true,
                  navigateByImgClick: true
              },
              fixedContentPos: false,
              mainClass: 'my-mfp-zoom-in',
          });
      });
    }

    bolbyPopup();

    /*=========================================================================
     Infinite Scroll
     =========================================================================*/
    var curPage = 1;
    var pagesNum = $(".portfolio-pagination").find("li a:last").text();   // Number of pages

    $container.infinitescroll({
        itemSelector: '.grid-item',
        nextSelector: '.portfolio-pagination li a',
        navSelector: '.portfolio-pagination',
        extraScrollPx: 0,
        bufferPx: 0,
        maxPage: 6,
        loading: {
            finishedMsg: "No more works",
            msgText: '',
            speed: 'slow',
            selector: '.load-more',
        }
    },
    // trigger Masonry as a callback
    function( newElements ) {

      var $newElems = $( newElements );
      $newElems.imagesLoaded(function(){  
        $newElems.animate({ opacity: 1 });
        $container.isotope( 'appended', $newElems );
      });

      bolbyPopup();

      // Check last page
      curPage++;
      if(curPage == pagesNum) {
        $( '.load-more' ).remove();
      }

    });

    $container.infinitescroll( 'unbind' );

    $( '.load-more .btn' ).on('click', function() {
      $container.infinitescroll( 'retrieve' );
      // display loading icon
      $( '.load-more .btn i' ).css('display', 'inline-block');
      $( '.load-more .btn i' ).addClass('fa-spin');

      $(document).ajaxStop(function () {
        setTimeout(function(){
               // hide loading icon
          $( '.load-more .btn i' ).hide();
        }, 1000);
      });
      return false;
    });

    /* ======= Mobile Filter ======= */

    // bind filter on select change
    $('.portfolio-filter-mobile').on( 'change', function() {
      // get filter value from option value
      var filterValue = this.value;
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $container.isotope({ filter: filterValue });
    });

    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };
});

$(document).on('ready', function() {
    "use strict";

    /*=========================================================================
                Slick Slider
    =========================================================================*/
    $('.testimonials-wrapper').slick({
      dots: true,
      arrows: true,
      autoplay: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false
          }
        }
      ]
    });

    $('.clients-wrapper').slick({
      dots: true,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

});

$(function(){
    "use strict";

    /*=========================================================================
            Mobile Menu Toggle
    =========================================================================*/
    $('.menu-icon button').on( 'click', function() {
        $('header.header, main.content').toggleClass('open');
    });

    $('.menu-icon button').on( 'click', function() {
      $('header.mobile-header').toggleClass('open');
      $('.menu-icon button span').toggleClass('open');
    });

    $('main.content').on( 'click', function() {
        $('header.header, main.content, header.mobile-header').removeClass('open');
        $('.menu-icon button span').removeClass('open');
    });

    $('.main-menu li a, .main-menu li').on( 'click', function() {
        $('header.header, main.content, header.mobile-header').removeClass('open');
        $('.menu-icon button span').removeClass('open');
    });

    /*=========================================================================
     Spacer with Data Attribute
     =========================================================================*/
    var list = document.getElementsByClassName('spacer');

    for (var i = 0; i < list.length; i++) {
      var size = list[i].getAttribute('data-height');
      list[i].style.height = "" + size + "px";
    }

    /*=========================================================================
     Background Image with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('data-bg-image');

     for (var i = 0; i < list.length; i++) {
       var bgimage = list[i].getAttribute('data-bg-image');
       list[i].style.backgroundImage  = "url('" + bgimage + "')";
     }

    /*=========================================================================
     Background Color with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('data-bg-color');

     for (var i = 0; i < list.length; i++) {
       var bgcolor = list[i].getAttribute('data-bg-color');
       list[i].style.backgroundColor = "" + bgcolor + "";
     }

     /*=========================================================================
     Color with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('data-color');

     for (var i = 0; i < list.length; i++) {
       var color = list[i].getAttribute('data-color');
       list[i].style.color = "" + color + "";
     }

     /*=========================================================================
     Border Color with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('data-border-color');

     for (var i = 0; i < list.length; i++) {
       var border_color = list[i].getAttribute('data-border-color');
       list[i].style.borderColor = "" + border_color + "";
     }

     /*=========================================================================
     Progress Bar width with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('progress-bar');

     for (var i = 0; i < list.length; i++) {
       var barwidth = list[i].getAttribute('data-width');
       list[i].style.width = "" + barwidth + "%";
     }

    /*=========================================================================
            Main Menu
    =========================================================================*/
    $( ".submenu" ).before( '<i class="ion-md-add switch"></i>' );

    $(".vertical-menu li i.switch").on( 'click', function() {
        var $submenu = $(this).next(".submenu");
        $submenu.slideToggle(300);
        $submenu.parent().toggleClass("openmenu");
    });


    /*=========================================================================
              Custom cursor
      =========================================================================*/
      var mouse = { x: 0, y: 0 };
      var pos = { x: 0, y: 0 };
      var ratio = 0.25;     
      var active = false;     
      var ball = document.getElementById("ball");
      
      
      TweenLite.set(ball, { xPercent: -50, yPercent: -50 });
      
      document.addEventListener("mousemove", mouseMove);
      
      function mouseMove(e) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        mouse.x = e.pageX;
        mouse.y = e.pageY - scrollTop;
      }
      
      TweenLite.ticker.addEventListener("tick", updatePosition);
      
      function updatePosition() {
        if (!active) {
          pos.x += (mouse.x - pos.x) * ratio;
          pos.y += (mouse.y - pos.y) * ratio;
      
          TweenLite.set(ball, { x: pos.x, y: pos.y });
        }
      }

      $('a, button, .portfolio-filter li').on('mouseenter',
        function(event) {
          TweenMax.to(ball, 0.3, { scale: 2.5, borderWidth: '0', background: 'rgba(0,0,0,0.1)' });
        }).on('mouseleave', function() {
          TweenMax.to(ball, 0.3, { scale: 1, borderWidth: '1px', background: 'none' });
        }
      );

      $('.simplebar-scrollbar').on('mouseenter touchstart',
        function(event) {
          $('#ball').addClass('empty');
          TweenLite.ticker.addEventListener("tick", updatePosition);
          TweenMax.to(ball, 0.3, { scale: 6.5, borderWidth: '0', background: 'rgba(0,0,0,1)' });
        }).on('mouseleave touchend', function() {

        }
      );

      $('.portfolio-link').on('mouseenter',
        function(event) {
          TweenMax.to(ball, 0.3, { scale: 2.5, borderWidth: '0', background: 'rgba(0,0,0,0.4)' });
          $('#ball').addClass('plus');
        }).on('mouseleave', function() {
          TweenMax.to(ball, 0.3, { scale: 1, borderWidth: '1px', background: 'none' });
          $('#ball').removeClass('plus');
        }
      );

      $('.blog-link').on('mouseenter',
        function(event) {
          TweenMax.to(ball, 0.3, { scale: 2.5, borderWidth: '0', background: 'rgba(0,0,0,0.4)' });
          $('#ball').addClass('link');
        }).on('mouseleave', function() {
          TweenMax.to(ball, 0.3, { scale: 1, borderWidth: '1px', background: 'none' });
          $('#ball').removeClass('link');
        }
      );

      $('.section-inner').each((index, element) => new SimpleBar(element), { autoHide: false });

});