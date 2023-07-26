const score = document.querySelector('.score')
const nailson = document.querySelector('.nailson')
const livro = document.querySelector('.livro')
const nuvem = document.querySelector('.nuvem')
let aljump = false;
let count = 0

const jump = () => {
    nailson.classList.add('pulo');
    aljump = true;

    setTimeout(() => {

        nailson.classList.remove('pulo');
        aljump = false;

    }, 1100)
}

const loop = setInterval(() => {

    const posicaolivro = livro.offsetLeft;
    const posicaonuvem = nuvem.offsetLeft;
    const posicaonailson = +window.getComputedStyle(nailson).bottom.replace('px', '');

    if (posicaolivro <= 105 && posicaolivro > 0 && posicaonailson < 80 && !aljump) {
        //alert(`Game over! Seu score foi: ${count}`);//

       livro.style.animation = 'none'
       livro.style.left = `${posicaolivro}px`;
 
       nailson.style.animation = 'none'
       nailson.style.bottom = `${posicaonailson}px`;

       nuvem.style.animation = 'none'
       nuvem.style.left = `${posicaolivro}px`;

       clearInterval(loop);
    }

    count++;
    score.innerHTML = `SCORE: ${count}`;
}, 10)

document.addEventListener('keydown', jump);