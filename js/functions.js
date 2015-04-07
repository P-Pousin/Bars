
$(document).ready(function(){
	setTimeout(function() {
     	$('.loader').css('display', 'none');
		$('.content').css('display', 'block');
	}, 2000);
	
	var $window = $(window);

	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this);
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			var coords = '50% '+ yPos + 'px';
			$bgobj.css({ 
				backgroundPosition: coords 
			});
		});
	});

	(function() {
  		$(window).scroll(function() {
    		var oVal;
    		oVal = $(window).scrollTop() / 300;

    		return $(".blur").css({
    			'-webkit-filter': 'blur('+oVal+'px',
    			'-webkit-filter': 'blur('+oVal+'px',
    			'-o-filter':'blur('+oVal+'px',
    			'-ms-filter':'blur('+oVal+'px',
    			'filter':'blur('+oVal+'px'
    		});
  		});

	}).call(this);

	$(window).scroll(function() {

	    if ($(window).scrollTop() > 400) {
	        $('.main_h').addClass('sticky');
	    } else {
	        $('.main_h').removeClass('sticky');
	    }
	});

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

	$('nav a').click(function(event) {
	    var id = $(this).attr("href");
	    var offset = 50;
	    var target = $(id).offset().top - offset;
	    $('html, body').animate({
	        scrollTop: target
	    }, 500);
	    event.preventDefault();
	});

	/* ----- logo-home ----- */

	var card = $(".card");

	$(document).on("mousemove",function(e) {  
  		var ax = -($(window).innerWidth()/2- e.pageX)/40;
  		var ay = ($(window).innerHeight()/2- e.pageY)/20;
  		card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
	});

	/*
	$('.left-side').blurjs({ 
		source: '.focus-header', 
		cache: true, debug: true,
		overlay: 'rgba(255,255,255,0.3)'
	});
*/
	var menuFocus = $('.left-container li');
	menuFocus.click(function() {
		if ($(this).hasClass('active')) {

		}
		else {
			menuFocus.removeClass('active');
			$(this).addClass('active');
			name = $(this).attr('section');
			$('.right-container .container-element').css('display', 'none');
			$('.right-container .'+name).css('display', 'block');
		}
	});
	$('.menu-resp').click(function() {
		$('.left-container').css({
			'transform': 'scale(1)',
			'width':'100%',
			'text-align': 'center',
			'transition': 'all 0.3s',
			'background-color': '#fff',
			'z-index': '9900'
		});
		$('.left-container li').css('padding-left', '0');
		$('.close-menu-resp').show();
		$(this).hide();
	});
	$('.close-menu-resp').click(function() {
		$('.left-container').css('transform', 'scale(0)');
		$('.left-container li').removeAttr('style');
		$('.menu-resp').show();
		$(this).hide();
	});
	var h = $(window).height();
	$('.boisson-container, .restauration-container, .carte-background, .hovercontent').css('height', h);
	/*$('.restauration-container').height()=h;
	$('.carte-background').height()=h;
	$('.hovercontent').height()=h;*/
});