const paragrafos = document.querySelector('.paragrafos');
const todosParagrafos = paragrafos.querySelectorAll('p'); // nodeList - semelhante a um array, mas não é necessariamente um array

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (p of todosParagrafos) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffffff';
}

