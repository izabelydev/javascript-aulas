/*
// Declaração de variáveis
const dateDocumentH1 = document.querySelector('.date');
const hourDocumentH3 = document.querySelector('.hour');
const date = new Date();
const week = date.getDay();
const month = date.getMonth();

// Nomeação de variáveis
const weekName = [
    'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'
];
const monthName = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

//Adicionar zero à esquerda
function leftZero (num) {
    return num >= 10 ? num : `0${num}`;
}

// Inserir dados no documento HTML
dateDocumentH1.innerHTML = `${weekName[week]}, ${leftZero(date.getDate())} de ${monthName[month]} de ${date.getFullYear()}`;
hourDocumentH3.innerHTML = `${leftZero(date.getHours())}:${leftZero(date.getMinutes())}`;
*/

const dateDocument = document.querySelector('.date');
const hourDocument = document.querySelector('.hour');
const date = new Date();

dateDocument.innerHTML = date.toLocaleDateString('pt-BR', { dateStyle: "full" });
hourDocument.innerHTML = date.toLocaleTimeString('pt-BR', { timeStyle: "short" });

