console.log(`Incrementar de 1 em 1`);
for (let i = 0; i <= 10; i++) { // i = index: ++ incrementar de 1 em 1
    console.log(`Linha ${i}`);
}

console.log(`Incrementar de N em N`);
for (let i = 0; i <= 100; i += 10) { // += incrementar de N em N
    console.log(`Linha ${i}`);
}

console.log(`Começar negativo`);
for (let i = -100; i <= 100; i += 20) { // += incrementar de N em N
    console.log(`Linha ${i}`);
}

console.log(`Começar ao contrário (decrementar)`);
for (let i = 100; i >= -100; i -= 20) { // -= decrementar de N em N
    console.log(`Linha ${i}`);
}

console.log(`Checar números pares`);
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i +' = '+ par);
}

console.log(`Percorrer array`);
const frutas = ['Maçã', 'Pêra', 'Uva', 'Laranja', 'Banana'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}: `, frutas[i]);
}


