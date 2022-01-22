(function(){

    // variable
    const cursorItem = document.querySelector('.cursor_item');
    const anchors = document.querySelectorAll('a');
    const btns = document.querySelectorAll('button');
    const ACTIVE = 'active';

    // function
    function moveCursor(event) {
        const x = event.clientX;
        const y = event.clientY;

        // cursorItem의 좌표를 mouse 좌표로 정해라
        cursorItem.style.top = `${y}px`;
        cursorItem.style.left = `${x}px`;
    }

    function cursorAddClass(classname) {
        cursorItem.classList.add(ACTIVE);
    }

    function cursorRemoveClass(classname) {
        cursorItem.classList.remove(ACTIVE);
    }

    // event
    window.addEventListener('mousemove', moveCursor);
    anchors.forEach(anchor => {
        anchor.addEventListener('mouseenter', cursorAddClass);
        anchor.addEventListener('mouseleave', cursorRemoveClass);
    })
    btns.forEach(btn => {
        btn.addEventListener('mouseenter', cursorAddClass);
        btn.addEventListener('mouseleave', cursorRemoveClass);
    })
})();