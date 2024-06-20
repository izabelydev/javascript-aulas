function criarEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function receberEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        return resultado.innerHTML += `
                <h3 class="nomeResult">${nome.value}</h3>
                <p class="sobrenomeResult">${sobrenome.value}</p>
                <p class="pesoResult">${peso.value}</p>
                <p class="alturaResult">${altura.value}</p>`;
    }

    form.addEventListener('submit', receberEventoForm);
}
criarEscopo();