import * as THREE from 'three';

const geometry = new THREE.PlaneGeometry(100, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x51ac00, side: THREE.DoubleSide });

function generateWorld() {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    return mesh;
}
function spawn(mode) {
    return;
}
export { geometry, material, generateWorld, spawn };