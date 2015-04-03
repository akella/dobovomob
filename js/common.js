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
	$('.js-slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 200,
		cssEase: 'linear',
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.slider-auto').on('init', function(slick){
		var totalReviews = $('.slider-auto .slick-slide').length;
		$('.js-number-total').text(totalReviews);
		$('.js-number-current').text('1');
	});
	$('.slider-auto').slick({
		arrows: false,
		dots: false,
		infinite: true,
		speed: 200,
		cssEase: 'linear',
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.slider-auto').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		nextSlide++;
		$('.js-number-current').text(nextSlide);
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
		var array = ["2015-04-18","2015-04-19","2015-04-20"]
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

	// description
	$('.js-description-btn').on("click", function () {
		$('.js-description').toggleClass('is-active');
		return false;
	});

	// discounts open block
	$('.js-open-block').on('click', function (){
		var this_par = $(this).parent();
		var text = $('.js-open-block span');
		if (this_par.hasClass('is-active')) {
			this_par.removeClass('is-active');
			text.text('все акции и скидки');
		}
		else {
			this_par.addClass('is-active');
			text.text('скрыть');
		}
		return false;
	});

	// tabs
	$( "#tabs" ).tabs();
	$('#tabs li a').on('click', function (){
		var href = $(this).attr("href");
		var content = $(this).parents('.tabs').find(href);
		if (!$(this).hasClass('is-init')) {
			content.find('.slider').slick({
				arrows: false,
				dots: true,
				infinite: true,
				speed: 200,
				cssEase: 'linear',
				adaptiveHeight: true,
				slidesToShow: 1,
				slidesToScroll: 1
			});
			$(this).addClass('is-init');
		};
	});

	// tab
	function tab() {
		$(".js-tab").each(function(){
			var tab_link = $(this).find("a");
			var tab_item = $(this).find("li");
			var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
			tab_link.on("click", function() {
				var index = $(this).attr("href");
				$('.js-tab-item').removeClass("is-active");
				$(this).parent().addClass("is-active");
				tab_cont.removeClass('is-active');
				$(this).parents(".js-tab-group").find("."+index).addClass("is-active");
				return false;
			});
		});
	}
	tab();

	// map in tabs
	function initialize_map_tab() {
		var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
		var mapOptions = {
			zoom: 10,
			center: myLatlng
		};

		var map = new google.maps.Map(document.getElementById('map'), mapOptions);

		var contentString = '<div class="popup-map">'+
				'<div class="popup-map__top">'+
					'<div class="popup-map__img">'+
						'<img src="img/img-map.png" alt="">'+
						'<div class="price-black">'+
							'<strong class="price-black__top">9.1</strong>'+
							'<span class="price-black__bott">12 отзывов</span>'+
						'</div>'+
					'</div>'+
					'<div class="popup-map__right">'+
						'<a href="#" class="popup-map__title">Двухуровневая квартира в самом центре столицы</a>'+
						'<div class="popup-map__id">(AV 2478)</div>'+
						'<div class="popup-map__address">Двухкомнатная</div>'+
						'<div class="popup-map__row">'+
							'<div class="popup-map__col">'+
								'<div class="popup-map__price popup-map__price_green"><span>320</span>грн. в сутки</div>'+
								'<p>без предоплаты</p>'+
							'</div>'+
							'<div class="popup-map__col">'+
								'<div class="popup-map__price"><span>960</span>грн.</div>'+
								'<p>за 3 ночи</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<div class="popup-map__bottom">'+
					'<button class="btn btn_green-arr">Забронировать</button>'+
				'</div>'+
			'</div>';

		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 1 + "px"
		});
		var image = new google.maps.MarkerImage('img/marker2x.png', null, null, null, new google.maps.Size(20,30));
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image,
			title: 'Двухуровневая квартира в самом центре столицы'
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	};
	$('.js-open-map').on('click', initialize_map_tab);

	// menu
	$('.js-btn-menu').on('click', function (){
		$('body').toggleClass('is-fixed');
		$('.js-menu').toggleClass('is-active');
		$('.js-menu').removeClass('is-languages');
		$('.js-menu').removeClass('is-currency');
	});
	$('.js-open-languages').on('click', function (){
		$('.js-menu').addClass('is-languages');
		return false;
	});
	$('.js-close-languages').on('click', function (){
		$('.js-menu').removeClass('is-languages');
		return false;
	});
	$('.js-open-currency').on('click', function (){
		$('.js-menu').addClass('is-currency');
		return false;
	});
	$('.js-close-currency').on('click', function (){
		$('.js-menu').removeClass('is-currency');
		return false;
	});

	// add value languages, curreccu, people
	$('.js-label-languages').on('click', function (){
		$( ".js-languages-check" ).text( $( ".js-input-languages:checked" ).val());
	});
	$('.js-label-curreccu').on('click', function (){
		$( ".js-currency-check" ).html( $( ".js-input-currency:checked" ).val());
	});
	$('.js-label-people').on('click', function (){
		$( ".js-people" ).html( $( ".js-input-people:checked" ).val());
	});

	// like
	$('.like').on('click', function(){
		$(this).addClass('is-active');
	});

	// popup
	$('.js-open-popup').on('click', function (){
		$(this).parent().find('.popup').show();
		$('body').addClass('is-fixed');
		// calendar init
		$('.popup').find('.calendar').addClass('is-init');
		if ($('.calendar').hasClass('is-init')) {
			var calendar = $('.calendar');
			$('.calendar').find('.calendar__day.is-today').prevAll('.calendar__day').addClass('is-last-days');
			$('.calendar').find('.calendar__day').addClass('is-other-month');
			$('.calendar').find('.calendar__day span').parent().removeClass('is-other-month');
		}
	});
	$('.popup, .popup__close').on('click', function(event){
		$('.popup').hide();
		$('body').removeClass('is-fixed');
	});
	$( ".popup__in" ).click(function(event) {
		event.stopPropagation();
	});

	// calendar
	function calendar() {
		var calendar = $('.calendar');
		calendar.each(function(){
			var day_in = '.calendar__day.in';
			var out = '.calendar__day.out';
			// check first last day
			$('.calendar__day').on("click", function (){
				var day = $('.calendar__day');
				var index = $(this).index();
				var month = $(this).parent('.calendar__days');
				var all = 'out in is-selected';

				if (month.find(day_in).length){
					var start_index = month.find(day_in).index();
					if (index > start_index) {
						$(this).addClass('out');
						$(".out").nextAll(day).removeClass('is-selected out');
					}
					else if (index < start_index) {
						day.removeClass(all);
					}
				}
				else {
					$(this).addClass('in');
				}

				if (month.find(out).length) {
					var finish_index = month.find(out).index();
					if (index > finish_index) {
						day.removeClass(all);
					}
				}

				if (month.find('.calendar__day.is-today').length) {
					var today_index = month.find('.calendar__day.is-today').index();
					if (index < today_index) {
						$(this).removeClass(all);
					}
				}

				if (day.hasClass('is-inactive' || 'is-other-month')) {
					$('.calendar__day.is-inactive, .calendar__day.is-other-month').removeClass(all);
				}

				month.find(out).prevAll(day).addClass('is-selected');
				month.find(day_in).prevAll(day).removeClass('is-selected');
			});
			// get date
			// add date
			$('.js-check-date').bind("click", function(){
				var from = $(day_in).attr('date');
				var to = $(out).attr('date');
				var to_text = $(".datepicker__to-text");
				var from_text = $(".datepicker__from-text");
				to_text.html(to);
				from_text.html(from);
				// add span from (to)
				var to_block = to_text.html();
				var new_to_block = "";
					to_block = to_block.split(" ");
					for ( i = 0; i < to_block.length; i++ ) {
					new_to_block = new_to_block + "<span>" + to_block[i] + "</span>";
				}
				to_text.html(new_to_block);
				// add span from (from)
				var from_block = from_text.html();
				var new_from_block = "";
					from_block = from_block.split(" ");
					for ( i = 0; i < from_block.length; i++ ) {
					new_from_block = new_from_block + "<span>" + from_block[i] + "</span>";
				}
				from_text.html(new_from_block);
				// hide popup calendar
				$('.popup').hide();
				$('body').removeClass('is-fixed');
				return false;
			});
		});
	}
	calendar();

	// toggle checkbox
	function toggle() {
		$('.js-toggle').on('change', function() {
			if ($(this).is(':checked')) {
				$(this).parent().parent().addClass('is-active');
				$(".select-chosen").trigger('chosen:activate');
			}
			else {
				$(this).parent().parent().removeClass('is-active');
			}
		});
	}
	toggle();

	// addcomment
	$('.js-addcomment').on('click', function(){
		$(this).parent().toggleClass('is-active');
	});

	// add date 
	function discounts_day(){
		var day = $(".js-discounts-day");
		var to_text = $(".datepicker__to-text");
		var from_text = $(".datepicker__from-text");
		day.on('click', function(){
			var from = $(this).attr('date-from');
			var to = $(this).attr('date-to');
			var page = $(this).attr("href");
			// scroll top
			$('html, body').animate({
				scrollTop: $(page).offset().top
			}, 600);
			// add date
			to_text.html(to);
			from_text.html(from);
			// add span from (to)
			var to_block = to_text.html();
			var new_to_block = "";
				to_block = to_block.split(" ");
				for ( i = 0; i < to_block.length; i++ ) {
				new_to_block = new_to_block + "<span>" + to_block[i] + "</span>";
			}
			to_text.html(new_to_block);
			// add span from (from)
			var from_block = from_text.html();
			var new_from_block = "";
				from_block = from_block.split(" ");
				for ( i = 0; i < from_block.length; i++ ) {
				new_from_block = new_from_block + "<span>" + from_block[i] + "</span>";
			}
			from_text.html(new_from_block);
			return false;
		});
	}
	discounts_day();

	// accordion
	$('.js-accordion').on('click', function() {
		var parent = $(this).parent();
		if (parent.hasClass('is-active')) {
			parent.removeClass('is-active');
		}
		else {
			$('.js-accordion').parent().removeClass('is-active');
			parent.addClass('is-active');
		}
	});

	// validate
	$("#form").validate({
		rules: {
			firstname: "required",
			lastname: "required",
			email: "required",
			password: "required",
			country: "required",
			phone: "required",
			textarea: "required",
			id: "required",
			code: "required"
		}
	});
	$("#form1").validate({
		rules: {
			id: "required",
			code: "required"
		}
	});
	
	// $('#form').on('submit', function(event) {
	// 	event.preventDefault();
	// 	if(($('.select-chosen').valid()) == false){
	// 		$('.select-chosen').addClass('error');
	// 	} 
	// 	else {
	// 		$(".select-chosen").removeClass('error');
	// 	}
	// }); 
	$('.select-chosen').change(function() {
		$(".select-chosen").removeClass('error');
	});
	$('.select-chosen').each(function() {
		var validator = $("#form").data('validator');
		validator.settings.ignore = ":hidden:not(select)";
	});

});

