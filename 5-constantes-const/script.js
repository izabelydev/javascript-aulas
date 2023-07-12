// Variável que não muda

/*
Regras para criar constantes:
-> Não podemos criar variáveis com palavras reservadas (palavras usadas nos comandos da linguagem. Ex: let, console, etc)
-> Constantes precisam ter nomes significativos.Ex: let nomeCliente;
-> Não pode começar o nome da Constante com número
-> Nome da Constante nao pode conter traços ou espaços, mas pode usar cameCase (primeira letra minuscula, as demais palavras com letra maiuscula)
-> Em JavaScript as Constantes são case sensitive
-> Não pode modificar o valor de uma constante, ela deve ser declarada e inicializada na criação.
*/

const nome = 'João';
console.log(nome);

//Passando o valor de uma constante para outra:

const firstNumber = 5;
const secondNumber = 10;
const result = firstNumber * secondNumber;

let secondResult = result * 2;
secondResult = secondResult + 5;


console.log(secondResult, nome);
console.log(typeof secondResult, typeof nome); //Typeof mostra o tipo de variavel (string ou number)
console.log(typeof (secondResult, nome));