//Aritméticos, de incremento, de decremento, de atribuição, de conversão

/**
 * Aritméticos:
 * + -> adição e concatenação
 * - -> subtração
 * / -> divisão
 * * -> multiplicação
 * ** -> potenciação
 * % -> resto da divisão
 */

const num = '5'; //concatenação (união de valores)
const num1 = 2;
const num2 = 10;

console.log(num + num2);  //concatenação (união de valores)
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2); //quando o resto é inteiro, ele mostra "0"

/**Precedencia dos operadores aritiméticos:
 * 1º - ()
 * 2º - **
 * 3º - * / %
 * 4º - + -
 */

//Operador de incremento = ++
let contador = 1;
contador++; //2
contador++;//3
contador++;//4
contador++;//5
console.log(++contador);//6

//Operador de decremento = --
let contador2 = 10;
console.log(--contador2);//9

//Operador de incremento além de contar de 1 em 1
const passo = 2;
let contador3 = 0;
contador3 = contador3 + passo;
contador3 = contador3 + passo;
console.log(contador3);

//Maneira mais fácil - Operadores de atribuição
contador3 += passo; // contador3 = contador3 + passo;
//pode usar outros simbolos matemáticos
console.log(contador3);

//Maneiras de converter string para numero
let numString = parseInt('5'); // parseFloat para numeros com ponto flutuante
console.log(typeof numString, numString);

let numNumber = Number('5'); //maneira mais fácil, pois converte numeros inteiros ou quebrados
