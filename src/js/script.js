const mario = document.querySelector('.supermario__mario');
const pipe = document.querySelector('.supermario__pipe');

const jumpMario = () => {
    mario.classList.add('jump');
    
    setTimeout (() => {
        mario.classList.remove('jump');
    }, 650);
}

const gameOver = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 145 && pipePosition > 0 && marioPosition < 145) {

        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';
        
        mario.style.animation = 'none';
        mario.style.left = '${marioPosition}px';

        mario.src = './src/img/game-over.png';
        mario.style.width = '80px';
    }

}, 10);

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowUp') {
        jumpMario();
    }
});