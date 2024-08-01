// Variáveis globais
const divWrapper = document.createElement('div');
const sectionContainer = document.createElement('section');
const divDescription = document.createElement('div');
const h1 = document.createElement('h1');
const pDescription = document.createElement('p');
const formCalc = document.createElement('form');
const inputX = document.createElement('input');
const inputY = document.createElement('input');
const formButton = document.createElement('input');

function playApp() {
    // Div embrulho - pai dos próximos elementos
    divWrapper.setAttribute('class', 'wrapper');
    document.body.appendChild(divWrapper);

    // Section container
    sectionContainer.setAttribute('class', 'container');
    divWrapper.appendChild(sectionContainer);

    // Div description
    divDescription.setAttribute('class', 'description active');

    h1.innerText = 'Divisibilidade';

    pDescription.innerText = 'Para checar se um número é divisível pelo outro escolha dois números:';

    divDescription.append(h1, pDescription);

    // Form calc
    formCalc.setAttribute('class', 'form-calc active');

    inputX.setAttribute('class', 'x');
    inputX.setAttribute('type', 'text');
    inputX.setAttribute('placeholder', 'X');

    inputY.setAttribute('class', 'y');
    inputY.setAttribute('type', 'text');
    inputY.setAttribute('placeholder', 'Y');

    const pForm = document.createElement('p');
    pForm.innerText = 'é divisível por';


    formButton.setAttribute('class', 'bt-check-calc');
    formButton.setAttribute('type', 'button');
    formButton.setAttribute('value', 'Verificar');

    formCalc.append(inputX, pForm, inputY, formButton);

    // adicionar elementos na section
    sectionContainer.append(divDescription, formCalc);
}

playApp();
