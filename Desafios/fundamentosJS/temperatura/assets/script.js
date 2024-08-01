const content = document.querySelector('.content');
const container = document.querySelector('.container');
const back = document.querySelector('.back');
const p = document.querySelector('.text');

function removeButtons(event) {
    // Sobrescrever o HTML inicial para nserir input text no lugar dos botões
    p.innerText = 'Insira apenas números.';
    content.innerHTML = `
    <span class="allInputs">
        <label for="inputTemperature" class="labelInput"></label>
        <input id="inputTemperature" class="inputText" type="text" placeholder="0">
    </span>`;
    back.innerHTML = `
        <span class="material-symbols-outlined backToHome">
            arrow_back
        </span>`;

    // Botão para voltar no ínicio
    const backToHome = document.querySelector('.backToHome');
    backToHome.addEventListener('click', () => {location.reload()});
}



function celsiusToFahrenheit(event) {
    removeButtons();
    const allInputs = document.querySelector('.allInputs');
    const labelInput = document.querySelector('.labelInput');

    labelInput.innerText = 'º Celsius';
    allInputs.innerHTML += `
    <button class="conversor">Converter para Fahrenheit</button>
    <p class="response"></p>`;
    

    const buttonConversor = document.querySelector('.conversor');
    buttonConversor.addEventListener('click', () => {
        const input = document.querySelector('input').value;
        const response = document.querySelector('.response');
        const fahrenheit = (parseFloat(input) * 9 / 5) + 32;

        if (isNaN(fahrenheit)) {
            const bgInput = getComputedStyle(p);
            const newBgInput = bgInput.backgroundColor;
            
            p.style.backgroundColor = 'rgba(252, 15, 15, 0.7)';
            
        } else {
            content.classList.add('plus');
            p.style.backgroundColor = '';
            response.innerText = `${fahrenheit.toFixed(2)}ºF`;
        }
    });
}



function fahrenheitTocelsius(event) {
    removeButtons();
    const allInputs = document.querySelector('.allInputs');
    const labelInput = document.querySelector('.labelInput');

    labelInput.innerText = 'º Fahrenheit';
    allInputs.innerHTML += `
    <button class="conversor">Converter para Celsius</button>
    <p class="response"></p>`;

    const buttonConversor = document.querySelector('.conversor');
    buttonConversor.addEventListener('click', () => {
        const input = document.querySelector('input').value;
        const response = document.querySelector('.response');
        const celsius = (parseFloat(input) - 32) * 5/9;

        if (isNaN(celsius)) {
            const bgInput = getComputedStyle(p);
            const newBgInput = bgInput.backgroundColor;
            
            p.style.backgroundColor = 'rgba(252, 15, 15, 0.7)';
            
        } else {
            content.classList.add('plus');
            p.style.backgroundColor = '';
            response.innerText = `${celsius.toFixed(2)}ºC`;
        }
    });
}

