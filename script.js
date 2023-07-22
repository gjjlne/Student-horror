const nailson = document.querySelector('.nailson')
const livro = document.querySelector('.livro')

const jump = () => {
    nailson.classList.add('pulo');

    setTimeout(() => {

        nailson.classList.remove('pulo');

    }, 1100)
}

const loop = setInterval(() => {

    const posicaolivro = livro.offsetLeft;
    const posicaonailson = +window.getComputedStyle(nailson).bottom.replace('px', '');

    if (posicaolivro <= 120 && posicaolivro > 0 && posicaonailson < 80) {

       livro.style.animation = 'none'
       livro.style.left = `${posicaolivro}px`;

       nailson.style.animation = 'none'
       nailson.style.bottom = `${posicaonailson}px`;

       clearInterval(loop);
    }
}, 10)

document.addEventListener('keydown', jump);