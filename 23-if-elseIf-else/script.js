/*
Entre 5 - 11 = bom dia
Entre 12 - 17 = boa tarde
Entre 18 - 23 = boa noite
*/
const hora = 50;

if (hora >= 5 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}


const numero = -1;

if (numero >= 0 && numero <= 5) {
    console.log(`O número ${numero} está entre 0 e 5`);
} else if (numero >= 6 && numero <= 10) {
    console.log(`O número ${numero} está entre 6 e 10`);
} else if (numero >= 11 && numero <= 15) {
    console.log(`O número ${numero} está entre 11 e 15`);
} else {
    console.log(`O número ${numero} não está entre 0 e 15`);
}