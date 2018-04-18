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
	processingSteps();
	stickyFooter();
	copyText();
	hamburgerHeaderCollapse();

	$('input , textarea').blur(function() {
		if (!$(this).val()) {
			$(this).parent().find('label').removeClass('active');
			$(this).removeClass('active');
		} else {
			$(this).parent().find('label').addClass('active');
			$(this).addClass('active');
		}
	});

	if($('.interface-slider').length) {
		$('.interface-slider').slick({
			slidesToShow: 1,
			nextArrow: '<div class="interface-slider-arrow interface-slider-arrow-next"><i class="icon-arrow-right"></i></div>',
			prevArrow: '<div class="interface-slider-arrow interface-slider-arrow-prev"><i class="icon-arrow-right"></i></div>',
		});
	}



 $('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
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
function processingSteps (){

	$('.js-step-item.active .steps-body').show();

	$('.js-step-next').on('click' , function(){

			var thisStep = $(this).parents('.js-step-item').attr('data-step');
			var nextStep = +thisStep + 1;
			var prevStep = +thisStep;


			$('.js-step-item .steps-body').slideUp();
			$('.js-step-item').removeClass('open');
			$('.js-step-item[data-step="' + prevStep +'"]').removeClass('active');

			$('.js-step-item[data-step="' + nextStep +'"] .steps-body').slideDown();
			$('.js-step-item[data-step="' + nextStep +'"]').addClass('active');
			$('.js-step-item[data-step="' + nextStep +'"]').addClass('open');

			$('.js-step-item[data-step="' + prevStep +'"]').addClass('done');

	});

	$('.js-step-item .steps-header').on('click' , function(){

		if($(this).parents('.js-step-item').hasClass('done') || $(this).parents('.js-step-item').hasClass('active') ){

			if(!$(this).parents('.js-step-item').hasClass('open')) {

				var thisStep = $(this).parents('.js-step-item').attr('data-step');

				$('.js-step-item .steps-body').slideUp();
				$('.js-step-item').removeClass('open');

				$('.js-step-item[data-step="' + thisStep +'"] .steps-body').slideDown();
				$('.js-step-item[data-step="' + thisStep +'"]').addClass('open');
			}

		}
	});
}

function copyText() {

	$('.js-copy-text').on('click' , function(){

		console.log($(this).parent().find('.js-info-copy').text());

		  var $temp = $("<input>");
		  $("body").append($temp);
		  $temp.val($(this).parent().find('.js-info-copy').text()).select();
		  document.execCommand("copy");
		  $temp.remove();

		$(this).tooltip('show');

		setTimeout(function(){

			$('.js-copy-text').tooltip('hide');

		}, 1000);
	});
}

function hamburgerHeaderCollapse(){

	$('.navbar-collapse').on('show.bs.collapse', function () {
	  $('.js-hamburger').addClass('is-active');
	});

	$('.navbar-collapse').on('hide.bs.collapse', function () {
	  $('.js-hamburger').removeClass('is-active');
	});


}

// STICKY FOOTER
function stickyFooter() {
	// 1) height of footer
	var footerHeight = $('.js-footer').outerHeight();

	// 2) compensation
	$('.js-wrap-for-sticky').css({
		'padding-bottom': footerHeight
	});
}

$(window).resize(function() {
	stickyFooter();
});

}(jQuery));