(function ($) {

'use strict';

$(document).ready(function() {

	// SCROLL TO TOP
	$('.scroll-top').on('click', function() {
		$('html, body').animate({ scrollTop: 0 }, 1000);
		return false;
	});

	$('input , textarea').blur(function() {
		if (!$(this).val()) {
			$(this).parent().find('label').removeClass('active');
			$(this).removeClass('active');
		} else {
			$(this).parent().find('label').addClass('active');
			$(this).addClass('active');
		}
	});

});

}(jQuery));