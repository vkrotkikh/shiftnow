(function ($) {

'use strict';

$(document).ready(function() {

	// SCROLL TO TOP
	$('.scroll-top').on('click', function() {
		$('html, body').animate({ scrollTop: 0 }, 1000);
		return false;
	});

});

}(jQuery));