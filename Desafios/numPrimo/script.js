// Criar um programa que calcula os números primos de 1 a N
const num = 15;

for (let i = 2; i <= num; i++) {
    if(numPrime(i)) console.log(i);
}

function numPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}


