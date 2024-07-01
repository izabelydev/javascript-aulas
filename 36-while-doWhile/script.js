function random (min, max) {
    //retornar número inteiro aleatorio entre 1 e 50
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1
const max = 50;
let rand = random(min, max);

// Checa a condição antes de executar
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('------------------')

// Executa antes de checar
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);


