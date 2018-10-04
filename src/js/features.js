import $ from "jquery";

$(document).ready(function() {

	/* features show/hide list by click bottom arrow */
		
	$('.features-item-trigger').click(function() {

		var el = $(this)
					.closest('.features-item')
					.find('.features-item-body');

		var learnMore = $(this).find('p');
		var arrow = $(this).find('img');
		var status = el.is(":hidden");
		var delay = 400;
		
		el.slideToggle(delay);

		if(!status) {
			setTimeout(function(){
				learnMore.show();
				arrow.css({'transform' : 'rotate(180deg)'});
			}, delay - 50);
		}else{
			setTimeout(function(){
				arrow.css({'transform' : 'rotate(360deg)'});
				learnMore.hide();				
			}, delay - 50);
		}

	});

	/* end */

	/* features edit content by resize window */

	$(window).resize(function() {
		var windowSize = ($(window).width() + 17);

		if (windowSize >= 980) {
			$('.features-item-body').show();			
			$('.features-item-trigger p').hide();

			$('.features-item-trigger img').remove();
			$('.features-item-trigger')
				.append('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAQ0lEQVQI1y3CwQlAYAAG0E/qn1MGkKsyg0wgZ7nISIwhz0XvRURxOBWRiNrm8djVEpXFq9V4raqY0IvoMMdllN/g/gAEpjdRjHc1UAAAAABJRU5ErkJggg==">');
		}
	});

	/* end */

});