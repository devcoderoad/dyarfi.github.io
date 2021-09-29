$(document).ready(function() {			
/* ==============================================
    Preloader
    =============================================== */
    // Will first fade out the loading animation
    $("#loading-animation").fadeOut();
    // Will fade out the whole DIV that covers the website.
    $("#preloader").delay(600).fadeOut("slow");
    var animEndEventNames = {
        'WebkitAnimation' : 'webkitAnimationEnd',
        'OAnimation' : 'oAnimationEnd',
        'msAnimation' : 'MSAnimationEnd',
        'animation' : 'animationend'
    },
    // animation end event name
    animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ], support = Modernizr.cssanimations;
    $('#navbar-top').addClass('pt-page-moveFromTop pt-page-delay1000').on(animEndEventName,function(){
        $(this).off(animEndEventName);
    });

// Elements Animation
	if($('.wow').length){
		var wow = new WOW({
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  });
		wow.init();
	}
	$('.slick-carousel-fade').slick({
			focusOnSelect:false, 
			autoplay:true,        
			autoplaySpeed: 2000, 
			arrows:false, 
			speed:2200, 
			// cssEase:'ease',
			easing:'ease-out',
			// easing:'ease',
			fade:true,
			pauseOnFocus:false,
			pauseOnHover:false,
			waitForAnimate:false
	});
	$('.slick-fade').slick({
			focusOnSelect:false, 
			autoplay:true,
			// autoplaySpeed: 2000,
			arrows:false, 
			speed:2200, 
      // cssEase:'ease',
      // easing:'ease-out',
			// easing:'ease',
			// fade:true,
			pauseOnFocus:false,
			pauseOnHover:false,
			waitForAnimate:false
	});
	$('.slick-carousel').slick({
			focusOnSelect:false, 
			autoplay:true,        
			autoplaySpeed:2000, 
			arrows:false, 
			speed:2000, 
			cssEase:'ease', 
			easing:'ease',
			pauseOnFocus:false,
			pauseOnHover:false,
			waitForAnimate:false,
			asNavFor: '.slick-carousel-nav'
	});
	$('.slick-carousel-nav').slick({
		asNavFor: '.slick-carousel',
		infinite:false,
		focusOnSelect:true, 
		accessibility:false,
		arrow:false,
		dots:false,
		slidesToShow:4,
		slidesToScroll:4
	});	
	$('.slick-fullscreen').slick({
		speed: 1600,
		autoplay: true,
		autoplaySpeed: 2600,
		fade: true,
		arrows: true,
		dots: true,
		centerPadding: '0',
		focusOnSelect: false,
		cssEase:'ease', 
		pauseOnFocus:false,
		pauseOnHover:false,
		pauseOnDotsHover:true,
		nextArrow: '<a href="javascript:;" class="carousel-control-next" data-slide="prev"><i class="fas fa-chevron-right fa-2x"></i></a>',
		prevArrow: '<a href="javascript:;" class="carousel-control-prev" data-slide="next"><i class="fas fa-chevron-left fa-2x"></i></a>'
	});	
	// .on('init reInit afterChange beforeChange', function (event, slick, currentSlide, nextSlide) {
		// $status = $('.pagingInfo');
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		// var i = (currentSlide ? currentSlide : 0) + 1;
		// $status.text(i + " / " + slick.slideCount);
	// });
	//Sponsors Carousel
	if ($('.sponsors-carousel').length) {
      $('.sponsors-carousel').slick({
        slidesToShow: 5,
        infinite: true,
        centerMode: true,
        centerPadding: '25px',
        variableWidth: true,
        focusOnSelect: true, 
        autoplay:true,
        autoplaySpeed: 1600, 
        speed:1600,
        // cssEase:'linear', 
        // easing:'ease',
        arrows: false,
        dots: false,
        responsive:[
        {
          breakpoint: 426,
          settings: {
            // slidesToShow: 1,
            // variableWidth: true,
            centerMode: true
          }
        }]
      });
	  }
  /*! === 13.1 Match Height on Divs === */
  $('.gallery-list__media, .menu-list-boxed__rounded').matchHeight();
    
  if ($('.navbar-gallery li a').length)  { 
  
    $('.navbar-gallery li a').eq(0).click();
        
	};

	$('.navbar-gallery li a').eq(0).click();

	if ($('.gallery-list').length) {
		var $grid = $('.gallery-list').isotope({
			// options
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-sizer'
			},
			filter: '*'
		});
		// filter items on button click
		$('.navbar-gallery').on( 'click', 'li a', function() {
			var filterValue = $(this).attr('data-filter');
			$('.navbar-gallery li a').removeClass('active');
			$(this).addClass('active');
			$grid.isotope({filter: filterValue});
		});
	}
	

	// $('.navbar-toggler').on('click',function(e) {
	// 	e.preventDefault();
	// 	$('#navbar-top').removeClass('navbar-transparent');
  // });
  
	// if($.getURLParameter('item') != null) {
		// var selected = $.getURLParameter('item');
		// $('#inlineFormInputGroupQuote option').each(function(){
		// 	console.log($(this).val());
		// });
	// }	

	// Scroll to Top
	var scrollTop = $(".scrollTop");
	$(window).scroll(function() {
		// declare variable
		var topPos = $(this).scrollTop();
		// if user scrolls down - show scroll to top button
		if (topPos > 200) {
			$(scrollTop).css({"opacity":"1","z-index":"1",'bottom':'16px'});
		} else {
			$(scrollTop).css({"opacity":"0","z-index":"-1",'bottom':'-70px'});
		}
  }); // scroll END
  
	// Click event to scroll to top
	$(scrollTop).click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1900);
		return false;
  }); // click() scroll top END
  // navlink-item
  // $('.navlink-item').hover(function(){
  //   $('.'+$(this).data('tab')).css({'opacity':1});
  // },function(){  
  //   $('.'+$(this).data('tab')).css({'opacity':0});
  // });
});

var transparent = true;
$(window).on('scroll',function () {
    /*
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.section').each(function(i) {
            if ($(this).position().top <= (windscroll + 100)) {
                $('.menus-nav li.nav-item').not('.dropdown').removeClass('active');
                $('.menus-nav li.nav-item').not('.dropdown').eq(i).addClass('active');
            }
        });
    } else if (windscroll < 100) {
        $('.menus-nav li.nav-item.active').not('.dropdown').removeClass('active');
        $('.menus-nav li.nav-item').eq(0).not('.dropdown').addClass('active');
    } else {
        $('.menus-nav li.nav-item').eq(0).not('.dropdown').addClass('active');
    }
    */
    var $navbar = $('#navbar-top');
    var scroll_distance = $navbar.data('scroll') || 100;
    if ($(document).scrollTop() > scroll_distance) {
      if (transparent) {
        transparent = false;
        $('#navbar-top').removeClass('navbar-transparent').addClass('shadow-md');
      }
    } else {
      if (!transparent) {
        transparent = true;
        $('#navbar-top').addClass('navbar-transparent').removeClass('shadow-md');
      }
	  }

});

$.extend({
    getURLParameter: function (paramName) {
        var searchString = window.location.search.substring(1),
            i, val, params = searchString.split("&");

        for (i = 0; i < params.length; i++) {
            val = params[i].split("=");
            if (val[0] == paramName) {
              return unescape(val[1]);
            }
        }
        return null;
    }
});
