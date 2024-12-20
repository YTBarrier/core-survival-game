import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/Addons.js';

import * as World from './modules/world.js';
import * as Utils from './modules/utils.js';
import * as UI from './modules/ui.js';

// scene, camera, and renderer setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x87ceeb, 1);
renderer.shadowMap.enabled = true;
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
let movement = { forward: false, backward: false, left: false, right: false, up: false, down: false, sprint: false };
Utils.initializeMovement(movement);

// objects to render
World.generatePlane(scene);
World.generateTrees(scene);
World.generateRocks(scene);

const light = new THREE.DirectionalLight(0xffffff, 2.5);
light.position.set(0, 50, 0);
light.castShadow = true;
light.shadow.camera.left = -50;
light.shadow.camera.right = 50;
light.shadow.camera.top = 50;
light.shadow.camera.bottom = -50;
light.shadow.mapSize.height = 4096;
light.shadow.mapSize.width = 4096;
light.shadow.camera.far = 100;
scene.add(light);
const helper = new THREE.CameraHelper(light.shadow.camera);
scene.add(helper);

const ambient = new THREE.AmbientLight(0xffffff, 0.15);
scene.add(ambient);

UI.initHotbar();

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
renderer.setAnimationLoop(() => {
    Utils.movementCheck(movement, camera);
    coords.update();

    renderer.render(scene, camera);
});