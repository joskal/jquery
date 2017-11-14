(function(){
	var $cajaAzul = $(".cajaAzul");
	var speed=0.300, space="150", size="50";
	var tl = new TimelineMax();
	
	function mover( dir ){
		console.log("function mover:" + dir);
		$cajaAzul.clearQueue(); 

		switch(dir){
			case "arriba":
				console.log("case arriba");
				tl.to($cajaAzul,speed, {y:"-="+space});
				break;
			case "abajo":
				console.log("case abajo");
				tl.to($cajaAzul,speed, {y:"+="+space});
				break; 
			case "izquierda":
				console.log("case izquierda");
				tl.to($cajaAzul,speed, {x:"-="+space});
				break; 
			case "derecha":
				console.log("case derecha");
				tl.to($cajaAzul,speed, {x:"+="+space});
				break;
			case "reset":
				console.log("reset");
				tl.to($cajaAzul,speed, {
					x		:"0px" ,
					y		:"0px" ,
					width	:"50px",
					height	:"50px"
				})
				tl.to($cajaAzul,0.3,{backgroundColor: "blue"});
				break;
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
		var $cajaAzul = $(".cajaAzul");
		var tl = new TimelineMax();

		tl.to($cajaAzul,0.5,{
			width: "+=50px",
			height: "+=50px"
		})
		.to($cajaAzul,0.3,{backgroundColor: "green"});
	})

	$("button").on("click", function(){
		var dir=$(this).data("dir");
		console.log("boton pulsado:"+ dir);
		mover(dir);
	});

})();