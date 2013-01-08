function makeBuilding()
{
	
	var i = Math.floor( Math.random() * 8 );
	switch( i )
	{
		case 0:
			return makeBuilding1();
			break;
		case 1:
			return makeBuilding2();
			break;
		case 2: case 3: case 4: 
			return makeBuilding2();
			break;
		case 5: case 6: case 7:
			return makeBuilding4();
			break;
	}
	return o;
	
	//return makeBuilding1();
}

function makeBuilding1()
{
	/*
	var e1 = document.createElement( 'div' );
	e1.style.width = '100px';
	e1.style.height = '100px';
	e1.style.background = 'rgba(0,0,0,1)';
	
	var e2 = document.createElement( 'div' );
	e2.style.width = '100px';
	e2.style.height = '80px';
	e2.style.background = 'rgba(0,0,0,1)';
	
	var e3 = document.createElement( 'div' );
	e3.style.width = '200px';
	e3.style.height = '125px';
	e3.style.background = 'rgba(0,0,0,1)';
	var image = document.createElement( 'img' );
	image.style.position = 'absolute';
	image.style.width = '200px';
	image.style.height = '125px';
	image.src = 'img/street.jpg';
	e3.appendChild( image );
	
	var e4 = document.createElement( 'div' );
	e4.style.width = '60px';
	e4.style.height = '20px';
	e4.style.background = 'rgba(0,0,0,1)';
	
	var e5 = document.createElement( 'div' );
	e5.style.width = '100px';
	e5.style.height = '200px';
	e5.style.background = 'rgba(0,0,0,1)';
	
	var fascia1 = new THREE.CSS3DObject( e1 );
	var fascia2 = new THREE.CSS3DObject( e2 );
	var fascia3 = new THREE.CSS3DObject( e3 );
	var fascia4 = new THREE.CSS3DObject( e4 );
	var fascia5 = new THREE.CSS3DObject( e5 );
	
	var o = new THREE.Object3D( );
	o.add( fascia1 );
	o.add( fascia2 );
	//o.add( fascia3 );
	o.add( fascia4 );
	o.add( fascia5 );
	
	fascia1.position.y = -40;
	fascia2.position.y = 40;
	fascia2.position.z = -5;
	fascia3.rotation.x = Math.PI/2;
	fascia3.position.y = -89;
	fascia3.position.z = -60;
	fascia4.position.z = -10;
	fascia5.rotation.y = Math.PI/2;
	fascia5.position.x = -49;
	fascia5.position.z = 50;
	
	return o
	*/
	var e1 = document.createElement( 'div' );
	e1.style.width = '70px';
	e1.style.height = '250px';
	e1.style.background = 'rgba(0,0,0,0)';
	e1.style.overflow = 'hidden';
	var image = document.createElement( 'img' );
	image.style.position = 'absolute';
	image.style.width = '70px';
	image.style.height = '250px';
	image.src = 'img/lamp.png';
	e1.appendChild( image );
	
	
	var e4 = document.createElement( 'div' );
	e4.style.width = '200px';
	e4.style.height = '125px';
	e4.style.background = 'rgba(0,0,0,1)';
	var image2 = document.createElement( 'img' );
	image2.style.position = 'absolute';
	image2.style.width = '200px';
	image2.style.height = '125px';
	image2.src = 'img/street.jpg';
	e4.appendChild( image2 );
	
	var fascia1 = new THREE.CSS3DObject( e1 );
	var street = new THREE.CSS3DObject( e4 );
	
	var o = new THREE.Object3D( );
	o.add( fascia1 );
	o.add( street );
	
	fascia1.position.y = 30;
	fascia1.position.z = 10;
	fascia1.rotation.y = -Math.PI/2;
	street.rotation.x = Math.PI/2;
	street.position.y = -89;
	street.position.z = -60;
	
	return o
}

function makeBuilding2()
{
	var e1 = document.createElement( 'div' );
	e1.style.width = '200px';
	e1.style.height = '200px';
	e1.style.background = 'rgba(0,0,0,1)';
	var image = document.createElement( 'img' );
	image.style.position = 'absolute';
	image.style.width = '200px';
	image.style.height = '200px';
	image.src = 'img/building1.jpg';
	e1.appendChild( image );
	
	var e2 = document.createElement( 'div' );
	e2.style.width = '100px';
	e2.style.height = '200px';
	e2.style.background = 'rgba(0,0,0,1)';
	
	var e3 = document.createElement( 'div' );
	e3.style.width = '100px';
	e3.style.height = '200px';
	e3.style.background = 'rgba(0,0,0,1)';
	
	var fascia1 = new THREE.CSS3DObject( e1 );
	var side1 = new THREE.CSS3DObject( e2 );
	var side2 = new THREE.CSS3DObject( e3 );
	
	var o = new THREE.Object3D( );
	o.add( fascia1 );
	o.add( side1 );
	o.add( side2 );
	
	fascia1.position.y = 0;
	fascia1.position.z = 30;
	side1.rotation.y = Math.PI/2;
	side1.position.x = -99;
	side1.position.z = 79;
	side2.rotation.y = Math.PI/2;
	side2.position.x = 99;
	side2.position.z = 79;
	
	return o
}

function makeBuilding3()
{
	var e1 = document.createElement( 'div' );
	e1.style.width = '100px';
	e1.style.height = '190px';
	e1.style.background = 'rgba(0,0,0,1)';
	var image = document.createElement( 'img' );
	image.style.position = 'absolute';
	image.style.width = '100px';
	image.style.height = '190px';
	image.src = 'img/building1.jpg';
	e1.appendChild( image );
	
	var e2 = document.createElement( 'div' );
	e2.style.width = '100px';
	e2.style.height = '190px';
	e2.style.background = 'rgba(0,0,0,1)';
	
	var e3 = document.createElement( 'div' );
	e3.style.width = '100px';
	e3.style.height = '190px';
	e3.style.background = 'rgba(0,0,0,1)';
	
	var fascia1 = new THREE.CSS3DObject( e1 );
	var side1 = new THREE.CSS3DObject( e2 );
	var side2 = new THREE.CSS3DObject( e3 );
	
	var o = new THREE.Object3D( );
	o.add( fascia1 );
	o.add( side1 );
	o.add( side2 );
	
	fascia1.position.y = 0;
	fascia1.position.z = 15;
	side1.rotation.y = Math.PI/2;
	side1.position.x = -49;
	side1.position.z = 65;
	side2.rotation.y = Math.PI/2;
	side2.position.x = 49;
	side2.position.z = 65;
	
	return o
}

function makeBuilding4()
{
	var e1 = document.createElement( 'div' );
	e1.style.width = '100px';
	e1.style.height = '180px';
	e1.style.background = 'rgba(0,0,0,1)';
	var image = document.createElement( 'img' );
	image.style.position = 'absolute';
	image.style.width = '100px';
	image.style.height = '180';
	image.src = 'img/building1.jpg';
	e1.appendChild( image );
	
	var e2 = document.createElement( 'div' );
	e2.style.width = '100px';
	e2.style.height = '180px';
	e2.style.background = 'rgba(0,0,0,1)';
	
	var e3 = document.createElement( 'div' );
	e3.style.width = '100px';
	e3.style.height = '180px';
	e3.style.background = 'rgba(0,0,0,1)';
	
	var fascia1 = new THREE.CSS3DObject( e1 );
	var side1 = new THREE.CSS3DObject( e2 );
	var side2 = new THREE.CSS3DObject( e3 );
	
	var o = new THREE.Object3D( );
	o.add( fascia1 );
	o.add( side1 );
	o.add( side2 );
	
	fascia1.position.y = 0;
	side1.rotation.y = Math.PI/2;
	side1.position.x = -49;
	side1.position.z = 50;
	side2.rotation.y = Math.PI/2;
	side2.position.x = 49;
	side2.position.z = 50;
	
	return o
}