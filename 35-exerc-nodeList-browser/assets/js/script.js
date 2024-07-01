const paragrafos = document.querySelector('.paragrafos');
const todosParagrafos = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (p of todosParagrafos) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffffff';
}

