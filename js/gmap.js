head.ready(function() {

	// gmap
	function initialize() {
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
	}
	// google.maps.event.addDomListener(window, 'load', initialize);
	initialize();

});