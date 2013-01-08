var camera, camTarget, scene, renderer;
var objects = [], buildings = [], player;
var bob_x, bob_y;
var sky;

var auto = true;

init();
animate();

function init() {
	
	bob_x = bob_y = 0;
	
	scene = new THREE.Scene( );
	
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 5000 );
	camera.position.y = - 35;
	camera.useQuaternion = true;
	
	camTarget = new THREE.Object3D( );
	scene.add( camTarget );

	renderer = new THREE.CSS3DRenderer( );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.domElement.style.position = 'absolute';
	renderer.domElement.style.top = 0;
	document.getElementById( 'container' ).appendChild( renderer.domElement );
	
	onData();
	
	window.addEventListener( 'resize', onWindowResize, false );
}


function onData( ) {
	/*
	var element = document.createElement( 'div' );
	element.style.width = '100px';
	element.style.height = '100px';
	element.style.background = 'rgba(255,0,0,1)';
	
	var image = document.createElement( 'img' );
	image.style.position = 'absolute';
	image.style.width = '200px';
	image.style.height = '100px';
	image.src = 'img/cheerleader.jpg';
	element.appendChild( image );
	
	var object = new THREE.CSS3DObject( element );
	object.position.x = 0;
	// object.position.y = Math.random() * 2000 - 1000;
	object.position.y = 0;
	object.position.z = -100;
	//object.rotation.y = 4;
	*/
	/*
	var skyE = document.createElement( 'div' );
	skyE.style.width = '3000px';
	skyE.style.height = '1500px';
	skyE.style.background = 'rgba(0,0,0,1)';
	var skyImage = document.createElement( 'img' );
	skyImage.style.position = 'absolute';
	skyImage.style.width = '3000px';
	skyImage.style.height = '1500px';
	skyImage.src = 'img/sky.jpg';
	skyE.appendChild( skyImage );
	
	sky = new THREE.Object3D( );
	sky.add( skyE );
	*/
	
	for(var r=0;r<20;r++)
	{
		object = makeBuilding();
		object.position.x = 60;
		object.position.z = r*-210;
		object.rotation.y = Math.PI/2 + (Math.random()*0.2 - 0.1);
		scene.add( object );
		objects.push( object );
	}
	
	for(var l=0;l<20;l++)
	{
		object = makeBuilding();
		object.position.x = -60;
		object.position.z = l*-210;
		object.rotation.y = Math.PI/-2 + (Math.random()*0.2-0.1);
		scene.add( object );
		objects.push( object );
	}
}

function move( delta ) {

	for ( var i = 0; i < objects.length; i ++ ) {

		var object = objects[ i ];

		object.position.z += delta;

		if ( object.position.z > 0 ) {

			object.position.z -= 5000;

		} else if ( object.position.z < - 5000 ) {

			object.position.z += 5000;

		}

	}

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

	requestAnimationFrame( animate );

	//TWEEN.update();

	if ( auto === true ) {
		bob_x += 0.04;
		bob_y += 0.08;
		//move( 1 );
		camera.position.x = Math.sin(bob_x) * 7;
		camera.position.y = Math.sin(bob_y) * 3 - 40;
		camera.position.z -= 1;
		
		//set camera target position based on device compass heading and tilt
		camTarget.position.x = camera.position.x - Math.sin( dir * 0.0174532925 ) * 100;
		camTarget.position.z = camera.position.z - Math.cos( dir * 0.0174532925 ) * 100;
		camTarget.position.y = camera.position.y + tiltFB - 50;
		
		//point camera at the target
		//this method avoids gimbal lock caused by setting rotation directly
		camera.lookAt( camTarget.position );

	}
	
	//document.getElementById( 'debug_data' ).innerHTML = dir + '<br />' + tiltFB;

	renderer.render( scene, camera );

}