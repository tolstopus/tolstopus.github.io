import $ from "jquery";

$(document).ready(function() {

	/* advantages slider */

	$('.adv-pag-item').click(function(){

		var goCoord = $(this).data('slider-coord');

		$(this)
			.closest('.advantages-pag')
			.find('div')
			.removeClass('active');

		$(this).addClass('active');

		$('.advantages-item-wrap').css('left', goCoord + 'px');		

	});

	/* end */

	/* advantages item change text info */

	$('.advantages-item-menu div').click(function(){

		var showInfo = $(this).data('show-info');
		var arrowCoord = $(this).data('arrow-position');

		$(this)
			.closest('.advantages-item-menu')
			.find('div')
			.removeClass('active');

		$(this).addClass('active');

		$(this)
			.closest('.advantages-item')
			.find('.adv-mob-arrow')
			.css('left', arrowCoord + 'px');

		$(this)
			.closest('.advantages-item')
			.find('.advantages-item-info div')
			.hide();

		$(this)
			.closest('.advantages-item')
			.find(showInfo)
			.show();

	});

	/* end */

});