function maiorNumero(x, y) {
    // if (x > y) return x; // quando o if é pequeno não precisa de chaves
    // // assim que o código execulta return, o restante do código abaixo não será executado
    // return y; // será executado caso o if seja false

    // Opção ainda melhor:
    return x > y ? x : y;
}

console.log(maiorNumero(1,5));


// usando arrow function

// arrow function normal:
// const maiorNumero2 = (x, y) => {
//     return x > y ? x : y;
// }

//arrow function em uma linha só
const maiorNumero2 = (x, y) => x > y ? x : y; // não usa chaves e nem return
console.log(maiorNumero2(10,5));


