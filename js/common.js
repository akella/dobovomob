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
			var plus_guests = $(this).find(".js-choose-guests .js-plus");
			var minus_guests = $(this).find(".js-choose-guests .js-minus");
			plus.bind("click", function(){
				var val = +(input.val());
				if (val >= max_number) {
					return false
				}
				else {
					val += 1;
					input.val(val);
				}
			});
			minus.bind("click", function(){
				var val = +(input.val());
				if (val > 1) {
					val -= 1;
					input.val(val);
				}
				else {
					input.val('');
					return false
				}
			});
			plus_guests.bind("click", function(){
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
			minus_guests.bind("click", function(){
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
	$('#from').on('click', function(){
		$(this).parent().parent().parent().addClass('is-active');
		var array = ["2015-03-18","2015-03-19","2015-03-20"]
		$( "#from" ).datepicker({
			 beforeShowDay: function(date){
		        var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
		        return [ array.indexOf(string) == -1 ]
		    },
			inline: true,
			dateFormat: 'd MM D',
			monthNamesShort: ['янв.', 'фев.', 'март.', 'апр.', 'май.', 'июнь.', 'июль.', 'авг.', 'сент.', 'окт.', 'ноя.', 'дек.'],
			monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			dayNamesShort: ['вс','пн','вт','ср', 'чт', 'пт','сб'],
			dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			firstDay: 1,
			minDate: 0,
			onSelect: function( selectedDate ) {
				$( "#to" ).datepicker({
					inline: true,
					minDate: selectedDate,
					dateFormat: 'd MM D',
					monthNamesShort: ['янв.', 'фев.', 'март.', 'апр.', 'май.', 'июнь.', 'июль.', 'авг.', 'сент.', 'окт.', 'ноя.', 'дек.'],
					monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
					dayNamesShort: ['вс','пн','вт','ср','чт','пт','сб'],
					dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
					firstDay: 1,
					onSelect: function( selectedDate ) {
						$('#to').removeClass('hasDatepicker');
						$('#to .ui-datepicker').hide();
						$(".datepicker__to-text").text(selectedDate);
						var OurString = $(".datepicker__to-text").html();
						var NewOurString = "";
							OurString = OurString.split(" ");
							for ( i = 0; i < OurString.length; i++ ) {
							NewOurString = NewOurString + "<span>" + OurString[i] + "</span>";
						}
						$(".datepicker__to-text").html(NewOurString);
						$(this).parent().parent().parent().removeClass('is-active');
					}
				});
				$('#from').removeClass('hasDatepicker');
				$('#from .ui-datepicker').hide();
				$(".datepicker__from-text").text(selectedDate);
				var OurString = $(".datepicker__from-text").html();
				var NewOurString = "";
					OurString = OurString.split(" ");
					for ( i = 0; i < OurString.length; i++ ) {
					NewOurString = NewOurString + "<span>" + OurString[i] + "</span>";
				}
				$(".datepicker__from-text").html(NewOurString);
			}
		});
	});
	$('#to').on('click', function(){
		$( "#to" ).datepicker({
			inline: true,
			dateFormat: 'd MM D',
			monthNamesShort: ['янв.', 'фев.', 'март.', 'апр.', 'май.', 'июнь.', 'июль.', 'авг.', 'сент.', 'окт.', 'ноя.', 'дек.'],
			monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			dayNamesShort: ['вс','пн','вт','ср','чт','пт','сб'],
			dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			firstDay: 1,
			minDate: 0,
			onSelect: function( selectedDate ) {
				$('#to').removeClass('hasDatepicker');
				$('#to .ui-datepicker').hide();
				$(".datepicker__to-text").text(selectedDate);
				var OurString = $(".datepicker__to-text").html();
				var NewOurString = "";
					OurString = OurString.split(" ");
					for ( i = 0; i < OurString.length; i++ ) {
					NewOurString = NewOurString + "<span>" + OurString[i] + "</span>";
				}
				$(".datepicker__to-text").html(NewOurString);
				$(this).parent().parent().parent().removeClass('is-active');
			}
		});
		$(".datepicker__from-text").text('--');
	});
	
	// cost
	$('.js-cost-input').on('input', function (){
		if ( $(this).val().length) {
			$('.js-cost-checkbox').attr('disabled', 'disabled');
		}
		else {
			$('.js-cost-checkbox').removeAttr('disabled');
		}
	});

});