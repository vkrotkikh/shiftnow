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
	exchangeSwap();

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
			customDropdownClose();

			$(this).parent().find('.custom-dropdown').fadeIn();
			$(this).parent().find('.custom-dropdown').addClass('-open');
	});

	$('.js-custom-dropdown_close').on('click' , function(){
		customDropdownClose();
	});

	$('.js-filter-search').on('keyup' , function(){

		var thisValue = $(this).val().toLowerCase(),
			  itemsList = $(this).parents('.custom-dropdown').find('.js-filter-list .currency-item');

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
		$(this).parents('.custom-dropdown').removeClass('-open');

		customSelectTitle.text(thisTitle);
		customSelectIconClass.attr('class', thisIconClass )

	});

 	$(document).click(function(event) {
	  //if you click on anything except the modal itself or the "open modal" link, close the modal
	  if (!$(event.target).closest(".custom-dropdown, .js-custom-select").length) {
	  	customDropdownClose();
	  }
	});

}

function customDropdownClose() {
		$('.custom-dropdown').fadeOut();
		$('.custom-dropdown').removeClass('-open');
}

function exchangeSwap() {

	$('.js-exhange-swap').on('click' , function(){

		var sendValue = $('.js-send-value .js-custom-select-value').val(),
				sendCurrencyTitle =  $('.js-send-value .js-custom-select .currency-title').text(),
				sendIconClass = $('.js-send-value .js-custom-select .currency-icon i').attr('class'),
				getValue = $('.js-get-value .js-custom-select-value').val(),
				getCurrencyTitle =  $('.js-get-value .js-custom-select .currency-title').text(),
				getIconClass = $('.js-get-value .js-custom-select .currency-icon i').attr('class');


				
		$('.js-send-value .js-custom-select-value').val( getValue);
		$('.js-send-value .js-custom-select .currency-title').text(getCurrencyTitle);
		$('.js-send-value .js-custom-select .currency-icon i').attr('class', getIconClass );


		$('.js-get-value .js-custom-select-value').val( sendValue);
		$('.js-get-value .js-custom-select .currency-title').text(sendCurrencyTitle);
		$('.js-get-value .js-custom-select .currency-icon i').attr('class', sendIconClass );

	});
}

}(jQuery));