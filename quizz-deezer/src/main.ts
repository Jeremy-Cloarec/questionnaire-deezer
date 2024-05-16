import {
  BoxGeometry,
  BufferGeometry,
  Clock,
  Float32BufferAttribute,
  Group,
  Line,
  LineBasicMaterial,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  TextureLoader,
  WebGLRenderer
} from "three";
import "./style.css";

const textureLoader = new TextureLoader();
const alphaMap = textureLoader.load("/note.png");
const logo = textureLoader.load("/logo.png");

const scene = new Scene();

const count = 100;
const distance = 1.5;
const size = 0.4;

const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// Change on phone
camera.position.z = 5; // Set the position of the camera
camera.position.y = -0.5;
camera.position.x = 0.5;
scene.add(camera);

const points = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);
for (let i = 0; i < points.length; i++) {
  points[i] = MathUtils.randFloatSpread(distance * 2);
  colors[i] = Math.random();
}

const geometry = new BufferGeometry();
geometry.setAttribute("position", new Float32BufferAttribute(points, 3));
geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
const pointsMaterial = new PointsMaterial({
  size,
  vertexColors: true,
  alphaTest: 0.5,
  alphaMap,
  transparent: true,
});
const pointsObject = new Points(geometry, pointsMaterial);
scene.add(pointsObject);
const group = new Group();
group.add(pointsObject);

const lineMaterial = new LineBasicMaterial({
  color: 0x808080,
  opacity: 0.5,
  depthWrite: false,
});
const lineObject = new Line(geometry, lineMaterial);
group.add(lineObject);

const sphere = new Mesh(new BoxGeometry(1, 1, 1), new MeshBasicMaterial({map: logo }));

scene.add(sphere);
scene.add(group);

const renderer = new WebGLRenderer({
  antialias: true,
  alpha: true,
});
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight); // Set the size of the renderer
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Set the pixel ratio

document.body.appendChild(renderer.domElement); // Append the renderer to the body
renderer.render(scene, camera);

const clock = new Clock();

const tick = () => {
  const time = clock.getElapsedTime();
  group.rotation.y = time * 0.5;
  group.rotation.x = time * 0.5;

  // Rotate the box in the opposite direction
  sphere.rotation.y = -time * 0.5;
  sphere.rotation.x = -time * 0.5;

  renderer.render(scene, camera);
  requestAnimationFrame(tick); // Call the tick function
};

tick();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
