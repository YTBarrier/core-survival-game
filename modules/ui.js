function initHotbar() {
    let slots = document.querySelectorAll('.slot');
    let selected = 0;
    const maximum = () => {
        document.querySelectorAll('.slot').length;
    }    
    slots[0].style.border = '1.5vh ridge #a0a0a0';
    document.addEventListener('keyup', e => {
        if(parseInt(e.key) && parseInt(e.key) !== 0 && parseInt(e.key) <= 2) {
            slots[selected].style.border = '1.5vh ridge whitesmoke';
            selected = parseInt(e.key) - 1;
            slots[selected].style.border = '1.5vh ridge #a0a0a0';
        }
    });
}

export { initHotbar };