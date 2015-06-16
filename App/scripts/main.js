$(window).scroll(function() {

	var winScroll = $(this).scrollTop();

	$('.logo').css({
		'transform' : 'translate(0px,' + winScroll/3.3 + '%)'
	});

	$('.grill, .cutlery').css({
		'transform' : 'translate(0px,' + winScroll/8 + '%)'
	});

  	//Food Section

	if(winScroll > $('.image-gallery').offset().top - ($(window).height() / 1.5)) {

	    $('.img').each(function(i){

	      setTimeout(function(){
	        $('.image-gallery .img').eq(i).addClass('visible');
	      }, (700 * (Math.exp(i * 0.14))) - 700);
	    });

	    $('.grill, .cutlery').fadeOut();

  	}

  	if(winScroll > $('.flex-info').offset().top - $(window).height()){

    var offset = (Math.min(0, winScroll - $('.flex-info').offset().top +$(window).height() - 350)).toFixed();

    $('.info-item1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.info-item3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }

});

