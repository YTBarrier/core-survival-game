import * as THREE from 'three';

function initializeMovement(movement) {
    document.addEventListener('keydown', e => {
        switch(e.code) {
            case 'KeyW':
                movement.forward = true;
                break;
            case 'KeyS':
                movement.backward = true;
                break;
            case 'KeyA':
                movement.left = true;
                break;
            case 'KeyD':
                movement.right = true;
                break;
        }
    });
    document.addEventListener('keyup', e => {
        switch(e.code) {
            case 'KeyW':
                movement.forward = false;
                break;
            case 'KeyS':
                movement.backward = false;
                break;
            case 'KeyA':
                movement.left = false;
                break;
            case 'KeyD':
                movement.right = false;
                break;
        }
    });
}
function movementCheck(movement, camera) {
    if(movement.forward) {
        const movementDistance = 0.1;
        const direction = new THREE.Vector3();
        camera.getWorldDirection(direction);
        const horizontalDirection = direction.clone().setY(0).normalize();

        camera.position.addScaledVector(horizontalDirection, movementDistance);
    }
    if(movement.backward) {
        const movementDistance = -0.1;
        const direction = new THREE.Vector3();
        camera.getWorldDirection(direction);
        const horizontalDirection = direction.clone().setY(0).normalize();
        
        camera.position.addScaledVector(horizontalDirection, movementDistance);
    }
    if(movement.left) {
        camera.translateX(-0.1);
    }
    if(movement.right) {
        camera.translateX(0.1);
    }
}
export { initializeMovement, movementCheck };