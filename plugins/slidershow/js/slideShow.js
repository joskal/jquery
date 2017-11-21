(function () {
	$.slideShow = function (opciones) {
		opciones = $.extend({
			divDestino: ".slideShow",
			intervalo: 1500,
			slides: [],
			velocidad: 1200,
			ancho: 600,
			color: "#ba007c"
		}, opciones);

		if (opciones.slides.length == 0) {
			alert("Los slides son necesarios");
			return 0;
		}
		opciones.velocidad = opciones.velocidad / 1000;
		var actual = 0;
		var ancho = opciones.ancho;
		var slides = opciones.slides.length;
		var timer;

		//creacion del contenido
		var contenido = "";
		contenido += "<ul>";
		for (var i = 0; i < slides; i++) {
			contenido += '<li><img src="' + opciones.slides[i] + '"></li>';
		}
		contenido += "</ul>";
		$(opciones.divDestino).append(contenido);
		var $slideshow = $(opciones.divDestino + " ul");


		//Creacion de los botones
		contenido = "";
		contenido += '<div class="slideShowButtons">';
		for (var i = 0; i < slides; i++) {
			contenido += '<div data-idx="' + i + '" class="slideButton"></div>';
		}
		contenido += '</div>';
		$(opciones.divDestino).append(contenido);

		start_timer();
		
		$(opciones.divDestino).on({
			mouseenter: function(){ clearInterval(timer)},
			mouseleave: function(){ start_timer()}
		});
		
		var $puntos = $(".slideShowButtons");
		
		$puntos.find("div").eq(0).css({
			backgroundColor: opciones.color
		});
		
		$(".botSlide").on("click", function () {
			var dir = $(this).data("mov");
			mover(dir, true);
		});

		$(".slideButton").on("click", function () {
			var idx = $(this).data("idx");
			idx = idx * -1
			mover_por_punto(idx, true);
		});
		
		function start_timer(){
			timer = setInterval(function () {
				mover("sig", false);
			}, opciones.intervalo);
			return 0;
		}

		function mover(dir, click) {
			(dir === "sig") ? actual-- : actual++;
			if (actual > 0) {
				actual = (slides - 1) * -1;
			} else if (actual <= (slides * -1)) {
				actual = 0;
			}
			mover_por_punto(actual, click);
			return 0;
		}

		function mover_por_punto(actual, click) {
			var margen = actual * ancho;
			var tl = new TimelineMax();
			var idx = actual * -1;
			var $puntoActual = $puntos.find("div").eq(idx);
			var $demasPuntos = $puntos.find("div").not($puntoActual);
			// if (click) clearInterval(intervalo);
			tl.to($slideshow, opciones.velocidad, {
					marginLeft: margen,
					ease: Elastic.easeOut.config(1, 0.75)
				})
				.to($puntoActual, 0.5, {
					backgroundColor: opciones.color
				}, "-=1.2")
				.to($demasPuntos, 0.5, {
					backgroundColor: "#a1a1a1"
				}, "-=1.2");
			return 0;
		}
	};
})();
