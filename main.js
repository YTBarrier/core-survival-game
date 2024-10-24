import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/Addons.js';
import * as World from './modules/world.js';
import * as Utils from './modules/utils.js';

// scene, camera, and renderer setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x87ceeb, 1);
document.body.appendChild(renderer.domElement);

// camera controls setup
const controls = new PointerLockControls(camera, document.body);
controls.pointerSpeed = 1;
let inMenu = false;
document.addEventListener('click', () => {
    if(!inMenu) {
        controls.lock();
    }
});

// movement controls
let movement = { forward: false, backward: false, left: false, right: false, sprint: false };
Utils.initializeMovement(movement);


// objects to render
World.generatePlane(scene);
World.generateTrees(scene);
World.generateRocks(scene);


camera.position.y = 6;

// animation loop
let coords = {
    x: 0,
    y: 0,
    z: 0,
    update: function() {
        coords.x = Math.round(camera.position.x);
        document.getElementById('x').innerHTML = `X: ${coords.x}`;
        coords.y = Math.round(camera.position.y - 6);
        document.getElementById('y').innerHTML = `Y: ${coords.y}`;
        coords.z = Math.round(camera.position.z);
        document.getElementById('z').innerHTML = `Z: ${coords.z}`;
    },
}
renderer.setAnimationLoop(function() {
    Utils.movementCheck(movement, camera);
    coords.update();

    renderer.render(scene, camera);
});