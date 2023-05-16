function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let box = document.querySelector('.box');
    box.innerText = 'innerText таков :)';

setInterval(() => {
    box.style.left = `${random(0,window.innerWidth-101)}px`;
    box.style.top = `${random(0,window.innerHeight-101)}px`;
}, 2000);

