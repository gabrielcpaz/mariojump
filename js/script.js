const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump'); /* Adicionou a classe JUMP na função do CSS*/

    setTimeout(() => { /* () => Isso é uma função anômima */
        mario.classList.remove('jump');
    }, 500) /* Tempo de esperar para executar essa função*/
}

const loop = setInterval( () => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    /* O + no inicio da função transformou o valor em numero */

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 50){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop); /* Quando o jogo acaba, o loop para de rodar*/
    }
}, 10)

document.addEventListener('keydown', jump)