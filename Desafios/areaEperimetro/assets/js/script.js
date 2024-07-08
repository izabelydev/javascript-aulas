// Declaração de variáveis globais
const container = document.querySelector('.container');
const divSelecionar = document.querySelector('.selecionar');
const form = document.querySelector('.form');
const btArea = document.querySelector('.area');
const btPerimetro = document.querySelector('.perimetro');
const btCalcular = document.querySelector('.btCalcular');
const p = document.querySelector('.titulo');

// Capturando o primeiro evento dos botões A ou P para abrir o form
document.addEventListener('click', (elemento) => {
    const el = elemento.target;

    if(el.classList.contains('area')) {
        container.classList.remove('plus');
        form.classList.remove('perimetro');
        form.classList.add('area');
        criarForm('area');
    } else if (el.classList.contains('perimetro')) {
        container.classList.remove('plus');
        form.classList.remove('area');
        form.classList.add('perimetro');
        criarForm('perimetro');
    }

    try {
        container.removeChild(divSelecionar);   
    } catch (error) {
        console.log('Já removido');
    }

});

// Função para criar o formulário
function criarForm(classe) {
    if (classe === 'area') {
        form.innerHTML = `<p class="titulo">Calcular área</p>`;
    } else if (classe === 'perimetro') {
        form.innerHTML = `<p class="titulo">Calcular perímetro</p>`;
    }

    form.innerHTML += `
        <input type="number" class="comprimento" placeholder="Comprimento">
        <input type="number" class="largura" placeholder="Largura">
        <input type="button" class="btCalcular" value="Calcular"">
    `;

    // Botão calcular
    const btCalcular = document.querySelector('.btCalcular');
    btCalcular.addEventListener('click', calcular);
} 

// Função calcular a área ou o perímetro
function calcular() {
    const inputComprimento = document.querySelector('.comprimento').value;
    const inputLargura = document.querySelector('.largura').value;
    let resultado;

    // identificar tipo de calculo à ser executado
    if(form.classList.contains('area')) {
        const area = parseFloat(inputComprimento) * parseFloat(inputLargura);
        resultado = area;
    } else if (form.classList.contains('perimetro')) {
        const perimetro = (parseFloat(inputComprimento) + parseFloat(inputLargura)) * 2;
        resultado = perimetro;
    }

    // Criar elemento para mostrar o resultado
    const h1Resultado = document.createElement('h1');
    h1Resultado.classList.add('resultado', 'show');
    h1Resultado.innerText = `${resultado}m²`;

    // apagar resultado anterior (se tiver)
    const resultadoAnterior = document.querySelector('.resultado');
    if (resultadoAnterior) {
        container.removeChild(resultadoAnterior);
    }

    // adicionar elemento com o resultado no container
    container.appendChild(h1Resultado);
    container.classList.add('plus');
}
