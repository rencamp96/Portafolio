init();

function init() {
	window.addEventListener( 'resize', onWindowResize, false );
	window.addEventListener( 'wheel', onMouseWheel, false );
	document.getElementById("boton1").addEventListener("mouseover", mouseOverBoton1);
	document.getElementById("boton1").addEventListener("mouseout", mouseOutBoton1);
	document.getElementById("boton2").addEventListener("mouseover", mouseOverBoton2);
	document.getElementById("boton2").addEventListener("mouseout", mouseOutBoton2);
	document.getElementById("boton3").addEventListener("mouseover", mouseOverBoton3);
	document.getElementById("boton4").addEventListener("mouseover", mouseOverBoton4);
}

function onWindowResize() {
}

function onMouseWheel( event ) {

  var h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight';
  var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

  var videoBGHeight = document.getElementById('scene3d').clientHeight;
  var carouselPosTop = document.getElementById('scene3d').offsetTop;

	var h1Elements = document.getElementById("titulo").style.color = "#e7ee5a";

}

function mouseOverBoton1() {
  var menu = document.getElementById("menu").style.backgroundColor = "pink";
}

function mouseOutBoton1() {
  var menu = document.getElementById("menu").style.backgroundColor = "grey";
}

function mouseOverBoton2() {
	  var menu = document.getElementById("menu").style.backgroundColor = "#353b5d";
		var menu = document.getElementById("lottie").style.display= "inline-block";
}

function mouseOutBoton2() {
  var menu = document.getElementById("menu").style.backgroundColor = "grey";
	var menu = document.getElementById("lottie").style.display= "none";
}

function mouseOverBoton3() {
  var menu = document.getElementById("menu").style.backgroundColor = "lightblue";
}

function mouseOverBoton4() {
  var menu = document.getElementById("menu").style.backgroundColor = "lightgreen";
}
