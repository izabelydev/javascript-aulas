// Primitivos (imutáveis): string, number, boolean, undefined, null (bigint, symbol) - (valores copiados)
let nome = 'Iza';
nome[1] = 's'; //não é possível alterar um dado da string
console.log(nome);
nome = 'Isa'; // mas é possível alterar o elemento
console.log(nome);

let a = 'A';
let b = a; // cópia
console.log(a, b);

a = 'outra coisa';
console.log(a, b); // o valor de B não depende mais do valor de A

// Referência (mutáveis): array, object, function (valores passados por referência na memória)
let A = [1, 2, 3];
let B = A; // aponta para o mesmo lugar de A na memória
console.log(A, B);

A.push(4);
console.log(A, B); // o array A afeta o valor de B

B.pop();
console.log(A, B); // a variável B afeta o array A

// Como copiar um array
B = [...A]; // dessa forma as alterações em A não afetará B porque os dados não estão referenciados e sim copiados, B se torna independente
A.push(4);
console.log(A, B);

const pessoa1 = {
    nome: 'Iza',
    sobrenome: 'Lourenço'
}
console.log (pessoa1);


const pessoa2 = {...pessoa1}; // pessoa 2 está copiando ao invés de ser referenciado
pessoa1.nome = 'Luiza';
console.log (pessoa1, pessoa2);