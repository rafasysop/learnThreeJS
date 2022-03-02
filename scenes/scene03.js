const material = new THREE.MeshStandardMaterial({
  color: '#eb3452',
  side: THREE.DoubleSide,
});

const material2 = new THREE.MeshLambertMaterial({
  color: '#34eb52',
  side: THREE.DoubleSide,
});

const materialFloor = new THREE.MeshPhongMaterial({
  color: '#666',
  depthWrite: false,
  side: THREE.DoubleSide,
});

const path = new THREE.Shape();
const path2 = new THREE.Shape();

path.moveTo(0.3,1.8)
path.lineTo(0.5,1.8)
path.lineTo(0.5,1.1)
path.lineTo(1,0.5)
path.lineTo(1.5,1.1)
path.lineTo(1.5,1.8)
path.lineTo(1.7,1.8)
path.lineTo(1.7,1.0)
path.lineTo(1.0,0.1)
path.lineTo(0.3,1.0)
path.lineTo(0.3,1.8)

path2.moveTo(1.44,1.8)
path2.lineTo(0.8,1.8)
path2.lineTo(0.8,2.3)
path2.lineTo(1.45,2.3)
path2.lineTo(1.45,1.8)


const geometry = new THREE.ExtrudeBufferGeometry(path, {
  depth:0.2,
  bevelEnabled:true,
  bevelSize: 0.01,
  bevelThickness: 0.1
});


const geometry2 = new THREE.ExtrudeBufferGeometry(path2, {
  depth:0.1,
  bevelEnabled:true,
  bevelSize: 0.01,
  bevelThickness: 0.1
});

const geometryFloor = new THREE.PlaneGeometry(100,100)

const light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
light.position.set( -3, 10, 10 ); //default; light shining from top
light.castShadow = true; // default false
scene.add( light );


const floor = new THREE.Mesh(geometryFloor, materialFloor);
floor.receiveShadow = true;
floor.rotation.x = -90 * (Math.PI / 180)

const draw = new THREE.Mesh(geometry, material);
draw.castShadow = true;
draw.receiveShadow = false;
const draw2 = new THREE.Mesh(geometry2, material2);
draw2.castShadow = true;
draw2.receiveShadow = false;

scene.add(floor);
scene.add(draw);
scene.add(draw2);

x3.add(light, {label: 'luz'})
x3.add(draw, {label: 'Provu'})
x3.add(draw2, {label: 'dinheiro'})
let direction = 'rigth';

renderer.setAnimationLoop(() => {

  x3.tick()
  x3.fps(() => {
    renderer.render(scene, camera);
    if (light.position.x >= 7 ) {
      direction = 'left'
    }

    if (light.position.x <= -2 ) {
      direction = 'rigth'
    }

    if (direction === 'rigth') {
      light.position.x += 0.02
      light.position.y -= 0.003

      camera.position.x += 0.01
      camera.position.y -= 0.004
      camera.position.z -= 0.008
    } else {
      light.position.x -= 0.02
      light.position.y += 0.003

      camera.position.x -= 0.01
      camera.position.y += 0.004
      camera.position.z += 0.008
    }
  })
})

