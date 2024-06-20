const criarCardInput = document.getElementById('criarCardInput');
const mostrarCardInput = document.getElementById('mostrarCardInput');

function criarCard () {
    return criarCardInput.innerHTML = `
        <input id="titulo" type="text" placeholder="Título">
        <input id="descricao" type="text" placeholder="Descrição">
        <button onclick="mostrarCard()">Salvar</button>`;
}

function mostrarCard() {
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;

    return mostrarCardInput.innerHTML = `
            <div style="width: 500px; height: 500px; background-color: blue; color: #ffffff;">
                <h1 class="titulo">${titulo}</h1>
                <p class="descricao">${descricao}</p>
            </div>
            <button onclick="apagar()">Apagar</button>`;
}

function apagar() {
    criarCardInput.innerHTML = ``;
    mostrarCardInput.innerHTML = ``;

    return criarCardInput, mostrarCardInput;
}