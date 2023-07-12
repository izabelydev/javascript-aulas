/*
Tipos de dados primitivos:
string | number | undefined | null | boolean | symbol
*/

const primeiroNome = 'Iza'; //string
const segundoNome = "Vitória"; //string
const ultimoNome = `Lourenço`; //string

const idade = 19; //number
const altura = 1.63; //number

let nomeAluno; //undefined = não aponta algum local na memória
let sobrenomeAluno = null; // nulo = força a variavel a não apontar algum local na memória (serve para desconfigurar uma variável)

const boolean = true || false; //boolean = valor lógico para true or false

console.log(typeof primeiroNome, primeiroNome);
console.log(typeof idade, idade);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof boolean, boolean);