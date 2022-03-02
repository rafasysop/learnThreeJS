const material = new THREE.MeshLambertMaterial({
  color: '#348feb',
});

const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,1,1),
    material
  );

const circle = new THREE.Mesh(
    new THREE.CircleBufferGeometry(1,50),
    material
  );

circle.position.x = -2

scene.add(cube);
scene.add(circle);

x3.add(cube, { label: 'Cube'})
x3.add(circle, { label: 'circle'})

renderer.setAnimationLoop(() => {

  x3.tick()
  x3.fps(() => {
    renderer.render(scene, camera);
  })
})

