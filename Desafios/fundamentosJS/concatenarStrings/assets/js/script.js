const form = document.querySelector('.form');
const response = document.querySelector('.response');
const h1 = document.querySelector('.dinamicName');
const p = document.querySelector('.dinamicAgeAndCity');
const button = document.querySelector('.concludeBt');
const arrowBack = document.querySelector('.material-symbols-outlined');

button.addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const city = document.querySelector('#city').value;

    if (name === '' || age === '' || city === '') {
        window.alert('Preencha todos os campos!');
    } else {
        h1.innerHTML = `Olá ${name}`;
        p.innerHTML = `Você tem ${age} anos, e mora em ${city}.<br>
        Obrigado, até logo!`;
        form.classList.remove('active');
        response.classList.add('active');
    }
});

arrowBack.addEventListener('click', () => {
    form.classList.add('active');
    response.classList.remove('active');
});