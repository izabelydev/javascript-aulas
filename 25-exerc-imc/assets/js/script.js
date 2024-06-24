function criarEscopo() {

    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const resultado = document.querySelector('.resultado');
    const form = document.querySelector('.form');
    const container = document.querySelector('.container');

    function calcularIMC(evento) {
        evento.preventDefault();
        container.classList.add('plus');
        const imc = parseFloat(peso.value) / (parseFloat(altura.value * altura.value));
        
        if (imc < 18.5) {
            resultado.classList.add('show');
            return resultado.innerHTML = `
            <p style="background: #f16e6e;">IMC ${imc.toFixed(2)}, abaixo do peso.</p>` ;
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado.classList.add('show');
            return resultado.innerHTML = `
            <p style="background: #a9f16e;">IMC ${imc.toFixed(2)}, peso normal.</p>` ;
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado.classList.add('show');
            return resultado.innerHTML = `
            <p style="background: #a9f16e;">IMC ${imc.toFixed(2)}, peso normal.</p>` ;
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.classList.add('show');
            return resultado.innerHTML = `
            <p style="background: #f1ef6e;">IMC ${imc.toFixed(2)}, sobrepeso.</p>` ;
        } else if (imc >= 30 && imc <= 34.9) {
            resultado.classList.add('show');
            return resultado.innerHTML = `
            <p style="background: #f1d26e;">IMC ${imc.toFixed(2)}, obesidade grau 1.</p>` ;
        } else if (imc >= 35 && imc <= 39.9) {
            resultado.classList.add('show');
            return resultado.innerHTML = `
            <p style="background: #f1b86e;">IMC ${imc.toFixed(2)}, obesidade grau 2.</p>` ;
        } else if (imc >= 40) {
            resultado.classList.add('show');
            return resultado.innerHTML = `
            <p style="background: #f16e6e;">IMC ${imc.toFixed(2)}, obesidade grau 3.</p>` ;
        } else if (typeof peso != 'number' || typeof altura != 'number') {
            resultado.classList.add('show');
            return resultado.innerHTML = `
            <p style="background: #f86994;">Insira apenas números.</p>` ;
        } 

    }

    form.addEventListener('submit', calcularIMC);
}
criarEscopo();
