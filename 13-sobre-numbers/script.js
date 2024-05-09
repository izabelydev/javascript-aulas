let num1 = 5;
let num2 = 2.589364732983;

// console.log(num1.toString() + num2); //converter número para string temporariamente
// num1 = num1.toString(); //converter número para string permanentemente
// console.log(num1.toString(2)); //representação binária
// console.log(typeof num1); // tipo da variável
// console.log(num2.toFixed(4)); //arredondar casas decimais
// console.log(Number.isInteger(num1)); //mostra se é nº inteiro ou de ponto flutuante
// console.log(Number.isInteger(num2)); 

let temp = num1 * 'Olá';
let temp2 = num1 * num2;
console.log(Number.isNaN(temp)); //mostra se a conta é inválida ou não
console.log(Number.isNaN(temp2));

// Padrão para precisão de números com casas decimais IEEE 754 - 2008
let num3 = 0.7;
let num4 = 0.1;

num3 += num4; //0.8
num3 += num4; //0.9
num3 += num4; //1.0

console.log(num3);
console.log(parseFloat(num3.toFixed(2))); // corrigir o problema do 0.9999999999 (pode usar "parseFloat" ou "Number")

// outra forma de resolver (mais complexa e menos usada):
// num3 = ((num3 * 100) + (num4 * 100)) / 100; //0.8
// num3 = ((num3 * 100) + (num4 * 100)) / 100; //0.9
// num3 = ((num3 * 100) + (num4 * 100)) / 100; //1.0
// console.log(num3);