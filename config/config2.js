const options = {
  targetSelector: '#scene',
  backgroundColor: '#222',
  width: 800,
  height: 600,
}

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio)

renderer.setSize(options.width, options.height);

document.querySelector(options.targetSelector)
  .appendChild(renderer.domElement)

const scene = new THREE.Scene();

scene.background = new THREE.Color(options.backgroundColor)
scene.fog = new THREE.Fog( 0xa0a0a0, 10, 50 );

const camera = new THREE.PerspectiveCamera(50, options.width / options.height)

camera.position.x = -1.5
camera.position.y = 4.43
camera.position.z = 6.36

const x3 = new THREEx3({
  THREE,
  OrbitControls: THREE.OrbitControls,
  camera,
  renderer,
  scene
})


x3.add(camera)
//renderer.outputEncoding = THREE.sRGBEncoding;
renderer.shadowMap.enabled = true;
