jQuery(function($){
	$('.menu-main .menu-item-has-children').hover(
	    function () {
	      $(this).children('ul').stop(true, true).slideDown(400); 
	      $(this).addClass('active');
	    },
	    function () {
	      $(this).children('ul').stop(true, true).slideUp(400); 
	      $(this).removeClass('active');
	    }
	);

	$('.top-slider').slick({
		infinite: true,
		dots: true,
		arrows: true,
      autoplay: true,
	})

	$('.toogle-menu').click(function(){
		 $('body, html').toggleClass('menu-scroll');
		$(this).toggleClass('exit');
		$('#header').toggleClass('menu-open');
		return false;
	});

	$('.menu-main-sp .menu-item-has-children > span').click(function(){
		$(this).parent().children('ul').slideToggle();
		$(this).parent().toggleClass('active');
		return false;
	})
	$('.menu-main-sp .menu-item-has-children > ul > li > span').click(function() {
		$(this).parent().children('ul').slideToggle();
		$(this).parent().toggleClass('active');
		return false;
	})

	$('.tab-title a').click(function(){
		var href = $(this).attr('href');
		$('.tab-title a').removeClass('active');
		$(this).addClass('active');
		$('.tab-item').hide();
		$(href).fadeIn();
		return false;
	});


})