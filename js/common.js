(function ($) {

'use strict';

$(document).ready(function() {

	// SCROLL TO TOP
	$('.scroll-top').on('click', function() {
		$('html, body').animate({ scrollTop: 0 }, 1000);
		return false;
	});


	// Init

	customSelect();

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



function customSelect(){

	$('.js-custom-select').on('click' , function(){
			$(this).parent().find('.custom-dropdown').fadeIn();
	});

	$('.js-custom-dropdown_close').on('click' , function(){
		$(this).parent().fadeOut();
	});

	$('.js-filter-search').on('keyup' , function(){

		var thisValue = $(this).val().toLowerCase(),
			  itemsList = $('.js-filter-list .currency-item');

		itemsList.each(function(index, el) {

				var thisTitle = $(this).find('.currency-title').text().toLowerCase(),
					  thisSubTitle = $(this).find('.currency-subtitle').text().toLowerCase();


				if(!thisTitle.includes(thisValue) && !thisSubTitle.includes(thisValue)) {
					$(this).parent().addClass('d-none');
				} else {
					$(this).parent().removeClass('d-none');
					
				}
		});		


	});

	$('.js-currency-link').on('click' , function(){

		var thisTitle = $(this).find('.currency-title').text(),
				thisIconClass = $(this).find('.currency-icon i').attr("class"),
				customSelectTitle = $(this).parents('.form-group_wrapper').find('.js-custom-select .currency-title'),
				customSelectIconClass = $(this).parents('.form-group_wrapper').find('.js-custom-select .currency-icon i');

		$(this).parents('.custom-dropdown').fadeOut();

		customSelectTitle.text(thisTitle);
		customSelectIconClass.attr('class', thisIconClass )

	});

}

}(jQuery));