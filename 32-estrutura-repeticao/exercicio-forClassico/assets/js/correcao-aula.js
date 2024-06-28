const container = document.querySelector('.container');
const div = document.createElement('div');

const elementos = [ // iterar = percorrer
    { tag: 'h3', texto: 'Objeto' },
    { tag: 'div', texto: 'Objeto' },
    { tag: 'footer', texto: 'Objeto' },
    { tag: 'nav', texto: 'Objeto' }
]

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let elemento = document.createElement(tag);
    let textoNode = document.createTextNode(texto);

    elemento.appendChild(textoNode);
    div.appendChild(elemento);
}

container.appendChild(div);