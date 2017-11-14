(function(){
	var $cajaRoja = $(".cajaRoja");
	var $cajaAzul = $(".cajaAzul");
	var speed=100;
	var tl = new TimelineMax();
	
	function mover( dir ){
		console.log("function mover:" + dir);
		$cajaRoja.clearQueue(); //anular las repeticiones de tecla
		$cajaAzul.clearQueue(); 

		switch(dir){
			case "arriba":
				console.log("case arriba");
				$cajaRoja.animate({
					top: "-=50px"
				},speed);
				tl.to($cajaAzul,0.100, {y:"-=50"});
				break;
			case "abajo":
				console.log("case abajo");
				$cajaRoja.animate({
					top: "+=50px"
				},speed);
				tl.to($cajaAzul,0.100, {y:"+=50"});
				break; 
			case "izquierda":
				console.log("case izquierda");
				$cajaRoja.animate({
					left: "-=50px"
				},speed);
				tl.to($cajaAzul,0.100, {x:"-=50"});
				break; 
			case "derecha":
				console.log("case derecha");
				$cajaRoja.animate({
					left: "+=50px"
				},speed);
				tl.to($cajaAzul,0.100, {x:"+=50"});
				break;
			default:
				console.log("reset");
				$cajaRoja.animate({
					top: "0px",
					left: "0px"
				},speed);
				tl.to($cajaAzul,0.100, {x:"0px", y:"0px"});


		}
	}

	$(document).on("keypress",function(e){
		var keyCode=e.keyCode;
		console.log(keyCode);

		switch(keyCode){
			case 38:
				mover("arriba");
			break;
			case 40:
				mover("abajo");
			break;
			case 37:
				mover("izquierda");
			break;
			case 39:
				mover("derecha");
			break;
		}
	});

	$("#botAncho").on("click",function(){
		var $cajaRoja = $(".cajaRoja");
		var $cajaAzul = $(".cajaAzul");
		var tl = new TimelineMax();

		$cajaRoja.animate({
			width: "+=150",
			height: "+=150"
		},500);
		tl.to($cajaAzul,0.5,{
			width: "+=150",
			height: "+=150"
		})
		.to($cajaAzul,0.3,{backgroundColor: "green"});
	})

	$("button").on("click", function(){
		var dir=$(this).data("dir");
		mover(dir);
		console.log("boton pulsado:"+ dir);
	});

})();