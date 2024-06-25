// Marco 0 data
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia =  60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 timestamp unix ou época unix
// console.log(data.toString());

// Os meses vão de 0 à 11
// const data = new Date(2003, 7, 22, 15, 14, 27); // Apr 20 2019 15:14:27
const dataString = new Date('2019-04-20 17:49');
console.log(dataString.toString());
console.log('Dia', dataString.getDate());
console.log('Mês', dataString.getMonth() + 1); // Começa do 0
console.log('Ano', dataString.getFullYear());
console.log('Hora', dataString.getHours());
console.log('Min', dataString.getMinutes());
console.log('Seg', dataString.getSeconds());
console.log('Ms', dataString.getMilliseconds());
console.log('Semana', dataString.getDay()); // 0 - Domingo, 6 - Sábado


function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}


function formatarData (data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
console.log(formatarData(data));



