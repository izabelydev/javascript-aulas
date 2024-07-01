// Controle dos laços de repetição

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2) {
        console.log('2 encontrado, continuando...');
        continue; // continua o laço ignorando o código abaixo, nesse caso o 2 não executará o código abaixo
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break; // quebra o laço ignorando o código abaixo
    }
}