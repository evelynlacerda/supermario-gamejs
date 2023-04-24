const mario = document.querySelector('.supermario__mario');
const pipe = document.querySelector('.supermario__pipe');
const clouds = document.querySelector('.supermario__clouds');

let fallMario = null;

const jumpMario = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 550);
}

function gameStart() {

}

const gameOver = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 150) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = './src/img/game-over.png';
        mario.style.width = '80px';
        mario.style.left = '25px';
        
        clouds.style.animationPlayState = 'paused';

        clearInterval(gameOver);

        let position = marioPosition;
        fallMario = setInterval(() => {
            position -= 1.5;
            mario.style.bottom = `${position}px`;

            if (postion <= -mario.offsetHeight) {
                clearInterval(fallMario);
            }
        }, 10);
    };

}, 10);

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowUp') {
        jumpMario();
    }
});