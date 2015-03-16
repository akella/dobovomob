head.ready(function() {

	// click function
	$('body').on('click', function() {
		$('.js-town').removeClass('is-active');
	});
	$("body").on("click", ".js-open-town", function(event){
		event.stopPropagation();
	});

	// drop-town
	$('.js-open-town').on('click', function() {
		$('.js-town').toggleClass('is-active');
	});

	// chosen
	$(".select-chosen").chosen({
		template: function (text, value, templateData) {
			return [
				text +  "<span>" + templateData.user + "</span> "
			].join("");
		},
		max_selected_options: 1
	});
	
	//slick
	$('.slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	// filter open
	$('.js-open').on('click', function() {
		$(this).parent().toggleClass('is-active');
	});

	// choose
	function choose() {
		var number = $(".js-choose");
		number.each(function(){
			var max_number = +($(this).attr("data-max-number"));
			var input = $(this).find("input");
			var plus = $(this).find(".js-plus");
			var minus = $(this).find(".js-minus");
			plus.bind("click", function(){
				var val = +(input.val());
				if (val >= max_number) {
					return false
				}
				else {
					val += 1;
					input.val(val);
					$('.js-guests').text("гостей");
				}
			});
			minus.bind("click", function(){
				var val = +(input.val());
				if (val > 1) {
					val -= 1;
					input.val(val);
					if (val == 1) {
						$('.js-guests').text("гость");
					}
				}
				else {
					return false;
				}
			});
		});
	}
	choose();

	// datepicker
	$("#from").change(function() {
		var date = $(this).datepicker("getDate");
		$("#d1").text(date);	
	});
	$( "#from" ).datepicker({
		inline: true,
		dateFormat: 'MM d',
		monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		firstDay: 1,
		onClose: function( selectedDate ) {
			$( "#to" ).datepicker( "option", "minDate", selectedDate );
		}
	});
	$( "#to" ).datepicker({
		inline: true,
		dateFormat: 'MM d',
		monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		firstDay: 1,
		onClose: function( selectedDate ) {
			$( "#from" ).datepicker( "option", "maxDate", selectedDate );
		}
	});


});