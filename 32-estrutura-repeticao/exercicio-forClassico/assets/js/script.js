const container = document.querySelector('section.container');
const div = document.createElement('div');

const elementos = [
    { tag: 'h3', texto: 'Objeto' },
    { tag: 'div', texto: 'Objeto' },
    { tag: 'footer', texto: 'Objeto' },
    { tag: 'nav', texto: 'Objeto' }
]

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let elementoNome = tag;
    let elemento = document.createElement(tag);
    let textoNode = document.createTextNode(texto + ` ${i + 1}: ${elementoNome} | Índice: ${i}`);

    elemento.appendChild(textoNode);
    div.appendChild(elemento);
}

container.appendChild(div);

/* ---------SOLUÇÃO ANTERIOR À CORREÇÃO------------------------
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    container.innerHTML += (
        `<${tag}>
            ${`${texto} ${i + 1}: ${tag} | Índice: ${i}`}
        </${tag}>`
    );
}
*/