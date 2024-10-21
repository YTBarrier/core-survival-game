import * as THREE from 'three';

function generatePlane(scene) {
    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 100),
        new THREE.MeshBasicMaterial({ color: 0x51ac00 })
    );
    plane.rotation.x = -Math.PI / 2;

    scene.add(plane);
}
function generateTrees(scene) {
    for(let i = 0; i < 5; i++) {
        const trunk = new THREE.Mesh(
            new THREE.CylinderGeometry(2, 2, 15, 10),
            new THREE.MeshBasicMaterial({ color: 0x725c42 })
        );
        const leaves = new THREE.Mesh(
            new THREE.SphereGeometry(7.5, 25, 10),
            new THREE.MeshBasicMaterial({ color: 0x228b22 })
        );

        const boundary = {
            minX: -50,
            maxX: 50,
            minZ: -50,
            maxZ: 50
        };

        const randPositionX = Math.random() * (boundary.maxX - boundary.minX) + boundary.minX;
        const randPositionZ = Math.random() * (boundary.maxZ - boundary.minZ) + boundary.minZ;
        trunk.position.set(randPositionX, 7.5, randPositionZ);
        leaves.position.set(randPositionX, 20, randPositionZ);

        scene.add(trunk);
        scene.add(leaves);
    }
}
function generateRocks(scene) {
    for(let i = 0; i < 3; i++) {
        const rock = new THREE.Mesh(
            new THREE.SphereGeometry(2, 10, 15, Math.floor(Math.random() * 11) + 5),
            new THREE.MeshBasicMaterial({ color: 0x708090 })
        );

        const boundary = {
            minX: -50,
            maxX: 50,
            minZ: -50,
            maxZ: 50
        };

        const randPositionX = Math.random() * (boundary.maxX - boundary.minX) + boundary.minX;
        const randPositionZ = Math.random() * (boundary.maxZ - boundary.minZ) + boundary.minZ;
        rock.position.set(randPositionX, 0, randPositionZ);

        scene.add(rock);
    }
}

export { generatePlane, generateTrees, generateRocks };