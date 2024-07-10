formButton.addEventListener('click', () => {
    if (inputX.value === '' || inputY.value === '' || isNaN(inputX.value) || isNaN(inputY.value)) {
        // Verificar se já existe um aside information e removê-lo para não duplicar
        const beforeInformation = document.querySelector('aside');
        if (beforeInformation) {
            divWrapper.removeChild(information);
        }

        // Criar aside information
        const information = document.createElement('aside');
        const pInformation = document.createElement('p');
        const closeInformation = document.createElement('span');
        
        pInformation.innerText = 'Preencha todos os campos com números';
        closeInformation.innerText = 'x';
        information.append(pInformation, closeInformation);
        divWrapper.appendChild(information);

        // Remover aside information com click
        information.addEventListener('click', () => {
            divWrapper.removeChild(information);
        });

    } else {
        // Remover conteúdo do container para inserir o novo conteúdo
        divDescription.classList.remove('active');
        divDescription.classList.add('off');

        formCalc.classList.remove('active');
        formCalc.classList.add('off');

        calculate(inputX.value, inputY.value);
    }

});

async function calculate(x, y) {
    const spanResult = document.createElement('span');
    spanResult.setAttribute('class', 'result');

    const h1Result = document.createElement('h1');
    spanResult.appendChild(h1Result);

    const btBack = document.createElement('input');
    btBack.setAttribute('type', 'button');
    btBack.setAttribute('value', 'Voltar');
    btBack.setAttribute('class', 'bt-back');

    btBack.addEventListener('click', () => {location.reload()});

    const result = parseFloat(x) / parseFloat(y);


    if (parseFloat(x) % parseFloat(y) === 0) {
        
        const timer = setInterval(() => {
            h1.innerText = 'Sim!';
            pDescription.innerText = `O número ${x} é divisível por ${y} e o resultado é:`;
            h1Result.innerText = result;
            divDescription.classList.remove('off');
            divDescription.classList.add('active'); 
            sectionContainer.append(spanResult, btBack); 
        }, 500);

        setTimeout(() => {
            clearInterval(timer);
            sectionContainer.removeChild(formCalc);
        }, 500);

    } else {
        const timer = setInterval(() => {
            h1.innerText = 'Não :(';
            pDescription.innerText = `O número ${x} não é divisível por ${y} porque retorna um número quebrado:`;
            h1Result.innerText = result.toFixed(2);
            divDescription.classList.remove('off');
            divDescription.classList.add('active');  
            sectionContainer.append(spanResult, btBack); 
        }, 500);

        setTimeout(() => {
            clearInterval(timer);
            sectionContainer.removeChild(formCalc);
        }, 500);
    }
}