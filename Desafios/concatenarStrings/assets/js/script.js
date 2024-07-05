const form = document.querySelector('.form');
const response = document.querySelector('.response');
const button = document.querySelector('.concludeBt');

button.addEventListener('click', () => {
    form.classList.remove('active');
    response.classList.add('active');
});