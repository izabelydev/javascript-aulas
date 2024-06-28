let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

// Atribuição por desestruturação
const novaOrdem = [b, c, a];
[a, b, c] = novaOrdem; 

console.log(a, b, c);

// Atribuição por desestruturação
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// ... operador rest (resto) || ... operador spread (espalhar)
// const [primeiroNum, segundoNum, ...resto] = numeros;

// exibir alguns valores 
const [um, , tres, , cinco] = numeros;

console.log(um, tres, cinco);

const num = [
//      0
//   0  1  2
    [1, 2, 3],
//      1
//   0  1  2    
    [4, 5, 6],
//      2
//   0  1  2
    [7, 8, 9]
];

console.log(num[1][2]);






