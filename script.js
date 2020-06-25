document.onkeydown = logKey;
let box = document.getElementById('box');
box.style.top = '200px';
box.style.left = '200px';
let boxTop = 200;
let boxLeft = 200;

function logKey(e) {
    if (e.keyCode == '38') {
        console.log('up arrow')
        boxTop = boxTop - 10
        updatePosition();
    }
    else if (e.keyCode == '40') {
        console.log('down arrow')
        boxTop = boxTop + 10
        updatePosition();
    }
    else if (e.keyCode == '37') {
        console.log('left arrow')
        boxLeft = boxLeft - 10
        updatePosition();
    }
    else if (e.keyCode == '39') {
        console.log('right arrow')
        boxLeft = boxLeft + 10
        updatePosition();
    }
}

function updatePosition(){
    console.log('boxTop',boxTop)
    box.style.top = boxTop + 'px'
    box.style.left = boxLeft + 'px'
}

