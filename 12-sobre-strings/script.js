//               012345678
let umaString = 'O rato roeu a roupa do rei de Roma';
// outras formas
// "Um \"texto\""
// "Uma barra invertida \\ literal"

console.log(umaString[5]); //aponta o indice da variavel (de zero até o ultimo valor na memória)
console.log(umaString.charAt(6));
console.log(umaString.concat(', concatenar',' um',' texto')); //forma menos usada
console.log(`${umaString}, concatenar um texto`); // forma mais usada e moderna

// Encontrar o indice a partir de um valor (do começo para o final)
console.log(umaString.indexOf('roma'));
console.log(umaString.indexOf('o', 3)); // encontrar a letra "o" a depois do indice 3

// Encontrar o indice a partir de um valor (do final para o começo)
console.log(umaString.lastIndexOf('m', 3)); // encontrar a letra "o" a antes do indice 3

// Substituir um valor por outro
console.log(umaString.replace('roma', 'italia')); // substituir a palavra "roma" por "italia"

// é possível usar expressões regulares
console.log(umaString.replace(/o/, '#'));
console.log(umaString.replace(/o/g, '#'));

// Como saber o tamanho da string
console.log(umaString.length);

// "Fatiar" uma string
console.log(umaString.slice(3, 7));
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));
    // os comandos slice e substring fazer basicamente a mesma coisa, porém com o slice o código fica menor

// Separar as palavras de uma string através dos espaços
console.log(umaString.split(' '));
console.log(umaString.split(' ', 2)); //obter apenas dois resultados (colocar limite)

// Colocar letras maiusculas/minusculas
console.log(umaString.toUpperCase()); //toLowerCase para minuscula