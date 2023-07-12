const nome = 'Izabely';
const sobrenome = 'Lourenço';
const idade = 20;
const pesoKg = 54;
const alturaEmM = 1.63;
let imc;
let anoNasc;

imc = pesoKg / (alturaEmM * alturaEmM);
anoNasc = 2023 - idade;

// 1º jeito de escrever:
console.log(nome, sobrenome, 'tem', idade, 'anos, nasceu em', anoNasc + '. Atualmente pesa', pesoKg, 'quilos, tem', alturaEmM + 'm de altura e seu Índice de Massa Corporal (IMC) é', imc + '.');

//2º jeito de escreer:
console.log(`${nome} ${sobrenome} tem ${idade} anos, nasceu em ${anoNasc}. Atualmente pesa ${pesoKg}kg, tem ${alturaEmM}m de altura e seu Índice de Massa Corporal é ${imc}.`)