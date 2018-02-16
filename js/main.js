
$(document).ready(function(){
	$($('.ba-game__item__head').attr("href")).show();

	$('.ba-game__item__head').on('click', function(event) {
		event.preventDefault();

		$('.ba-game__items-wrapper').hide();

		$(this).addClass("ba-game__item__head--active");
		$($(this).attr("href")).show();
		
		if ($(this).siblings().has(".ba-game__item__head--active")){
			$(this).siblings().removeClass("ba-game__item__head--active");
		}
		
	});

});