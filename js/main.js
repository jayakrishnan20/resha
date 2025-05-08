(function ($) {
"use strict";
/*--
	Preloader
-----------------------------------*/
$(window).on('load', function() {
	$('.preloader').fadeOut('slow');;
});
/*--
	Menu Sticky
-----------------------------------*/
var  hth = $('.header-top-1').height();
$(window).on('scroll', function() {
  if( $(this).scrollTop() > hth ) {
    $('.header-area-1 .header-bottom-1').addClass('stick');
  } else {
    $('.header-area-1 .header-bottom-1').removeClass('stick');
  }
});
/*--
	One Page Menu
-----------------------------------*/
var TopOffsetId = $('.header-bottom-1').height() - 40;
$('.main-menu nav').onePageNav({
	currentClass: 'active',
	scrollThreshold: 0.2,
	scrollSpeed: 1000,
	scrollOffset: TopOffsetId,
});
/*--
	Mean Mobile Menu
-----------------------------------*/
$('.main-menu nav').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanMenuClose: '<i class="zmdi zmdi-close"></i>',
	meanMenuOpen: '<i class="zmdi zmdi-menu"></i>',
	meanMenuCloseSize: '30px',
	meanScreenWidth: '990',
	onePage: true,
});
/*--
	Search Open & Close
-----------------------------------*/
$('.search-toggle').on('click', function(){
	$('#search-area').addClass('active');
})
$('.search-close').on('click', function(){
	$('#search-area').removeClass('active');
})
/*--
	Hero Slider 1
-----------------------------------*/
$('.hero-slider-1').flexslider({
	animation: 'fade',
	easing: 'linear',
	slideshowSpeed: 5000,
	controlsContainer: $('.hs1-control .container'),
	directionNav: false,
	after: function(slider) {
		if (!slider.playing) {
		  slider.play();
		};
	},
});
/*--
	Smooth Scroll
-----------------------------------*/
$('.hero-scroll-down, .mean-nav ul li a').on('click', function(e) {
	e.preventDefault();
	var link = this;
	$.smoothScroll({
	  speed: 1000,
	  offset: -70,
	  scrollTarget: link.hash
	});
});
/*--
	Mix It Up
-----------------------------------*/
$('#portfolio-container').mixItUp();
/*--
	Counter UP
-----------------------------------*/
$('.counter').counterUp({
    time: 3000,
});
/*--
	Testimonial Slider
-----------------------------------*/
$('.testimonial-slider').owlCarousel({
    items:1,
    margin:30,
	loop: true,
	dots: false,
	nav: true,
	navText: ['<i class="zmdi zmdi-arrow-left"></i>','<i class="zmdi zmdi-arrow-right"></i>']
});
/*--
	Brand Slider
-----------------------------------*/
$('.brand-slider').owlCarousel({
    items:5,
    margin: 3,
	loop: true,
	dots: false,
	responsive : {
		// breakpoint from 0 up
		0 : {
			items: 2,
		},
		// breakpoint from 768 up
		768 : {
			items: 3,
		},
		// breakpoint from 970 up
		970 : {
			items: 5,
		}
	}
});
/*--
	Scroll Up
-----------------------------------*/
$.scrollUp({
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade',
	scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
});
/*--
	Text Typed Effect
-----------------------------------*/
$('.text-typed').typed({
	strings: ['Great Service', 'Business'],
	typeSpeed: 50,
	startDelay: 50,
	backSpeed: 50,
	loop: true,
});
/*--
	Background Slideshow
-----------------------------------*/
$('.slideshow-bg').backstretch([
    'img/hero/1.jpg',
    'img/hero/2.jpg',
    'img/hero/3.jpg',
],{
	fade: 750,
	duration: 4000
});
/*--
	Kenburnsy Slideshow
-----------------------------------*/
$('.kenburne-slideshow').kenburnsy({
  fullscreen: true
});

/*--
	HTML5 Background Video
-----------------------------------*/
$('.video-bg').vide({
  mp4: 'video/time-lapse',
  webm: 'video/time-lapse',
  poster: 'video/banner',
}, {
	posterType: 'jpg',
	className: 'video-container'
});

})(jQuery);	