import * as THREE from './lib/loaders/three.module.js';
import { MTLLoader } from './lib/loaders/MTLLoader.js';
import { OBJLoader } from './lib/loaders/OBJLoader.js';

var container;
var camera, scene, renderer, light1;
var mouseX = 0, mouseY = 0;
var width = window.innerWidth;
var height = window.innerHeight;
var windowHalfX = width / 2;
var windowHalfY = height / 2;
var clock = new THREE.Clock();

init();
animate();

function init() {
  container = document.getElementById("scene3d");
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera( 45, width / height, 1, 2000 );
  camera.aspect = width / height;
	camera.position.z = 110;

	// scene

  scene = new THREE.Scene();
  // scene.background = new THREE.Color( 0xff0000 );

	var ambientLight = new THREE.AmbientLight( 0x00ffab, 0.4 );
	scene.add( ambientLight );

  scene.fog = new THREE.FogExp2( 0xefd1b5, 0.0005 );

	var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
	camera.add( pointLight );
  scene.add( camera );

  var sphere = new THREE.SphereBufferGeometry( 1, 10, 8 );

  light1 = new THREE.PointLight( 0xfff06b, 5, 100 );
	light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xfff06b } ) ) );
	scene.add( light1 );

	// model

	var onProgress = function ( xhr ) {
    if ( xhr.lengthComputable ) {
      var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
    }
  };
  var onError = function () { };
  var manager = new THREE.LoadingManager();

  new MTLLoader( manager )
	.setPath( './assets/modelo//' )
	.load( 'boceto_optimizado3.mtl', function ( materials ) {
    materials.preload();
    new OBJLoader( manager )
    .setMaterials( materials )
    .setPath( './assets/modelo/' )
    .load( 'boceto_optimizado3.obj', function ( object ) {
      object.position.y = - 50;
      object.scale.x = .05;
      object.scale.y = .05;
      object.scale.z = .05;
      scene.add( object );
    }, onProgress, onError );
  } );

  renderer = new THREE.WebGLRenderer( { alpha: true });
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( width, height );
  container.appendChild( renderer.domElement );

  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  window.addEventListener( 'resize', onWindowResize, false );
  window.addEventListener( 'wheel', onMouseWheel, false );
}

function onWindowResize() {
  var widthRes = window.innerWidth;
  var heightRes = window.innerHeight;
	windowHalfX = width / 2;
  windowHalfY = height / 2;

   camera.aspect = widthRes / heightRes;
   camera.updateProjectionMatrix();
   renderer.setSize( widthRes, heightRes );
}

function onDocumentMouseMove( event ) {
  mouseX = ( event.clientX - windowHalfX ) / 2;
  mouseY = ( event.clientY - windowHalfY ) / 2;
}

function animate() {
  requestAnimationFrame( animate );
  render();
}

function render() {
  var time = Date.now() * 0.005;
	var delta = clock.getDelta();

  var modelo = scene.children[3];
  modelo.rotation.y += 0.005;

  camera.position.x += ( mouseX/4 - camera.position.x ) * .1;
  camera.position.y += ( - mouseY/15 - camera.position.y ) * 1;

  camera.lookAt( scene.position );
  renderer.render( scene, camera );

  light1.position.x = Math.sin( time * 0.7 ) * 20;
	light1.position.y = Math.cos( time * 0.5 ) * 20;
	light1.position.z = Math.cos( time * 0.3 ) * 20;
}

function onMouseWheel( event ) {

  var h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight';
  var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

  var videoBGHeight = document.getElementById('overlay').clientHeight;
  // var carouselPosTop = document.getElementById('menu').offsetTop;
  camera.position.z = 110 - ((90/videoBGHeight)*window.scrollY);
  console.log(camera.position.z );
}
