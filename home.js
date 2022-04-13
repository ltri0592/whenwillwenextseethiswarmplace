let mcqueen = document.querySelector('.mcqueen');
let moveBy = 20;
let story = document.querySelector('.story');

window.addEventListener('load', () => {
    mcqueen.style.position = 'absolute';
    mcqueen.style.left = 0;
});

window.addEventListener( 'keydown', (e) => {
    switch(e.key) {
        case 'ArrowLeft' :
            mcqueen.style.left = parseInt(mcqueen.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight' :
            mcqueen.style.left = parseInt(mcqueen.style.left) + moveBy + 'px';
            break;
    }
});
