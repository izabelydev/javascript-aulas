const dateDocumentH1 = document.querySelector('.date');
const dateDocumentH3 = document.querySelector('.hour');
const date = new Date();

// Declaração de variáveis
const week = date.getDay();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const hour = date.getHours();
const min = date.getMinutes();

// Nomeação de variáveis
const weekName = [
    'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'
];
const monthName = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

function leftZero (num) {
    return num >= 10 ? num : `0${num}`;
}

dateDocumentH1.innerHTML = `${weekName[week]}, ${leftZero(day)} de ${monthName[month]} de ${year}`;
dateDocumentH3.innerHTML = `${leftZero(hour)}:${leftZero(min)}`;


