function initHotbar() {
    let slots = document.querySelectorAll('.slot');
    let selected = 0;
    const getMaxSlots = () => {
        return document.querySelectorAll('.slot').length;
    }
    slots[0].style.border = '1.5vh ridge #a0a0a0';
    document.addEventListener('keyup', e => {
        if(parseInt(e.key) && parseInt(e.key) !== 0 && parseInt(e.key) <= getMaxSlots()) {
            slots[selected].style.border = '1.5vh ridge white';
            selected = parseInt(e.key) - 1;
            slots[selected].style.border = '1.5vh ridge #a0a0a0';
        }
    });
}

export { initHotbar };