const cubeGeometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({
  color: '#fff',
});

const cube = new THREE.Mesh(cubeGeometry, material);

scene.add(cube);

const posX = cube.position.x
const posY = cube.position.y

x3.add(cube)

renderer.setAnimationLoop(() => {
  if (cube.position.x <= -4.7) {
    cube.position.x = 4.7
  }
  cube.rotation.x += 0.02
  cube.rotation.y += 0.01
  cube.rotation.z += 0.01

  x3.tick()
  x3.fps(() => {
    renderer.render(scene, camera);
  })
})

