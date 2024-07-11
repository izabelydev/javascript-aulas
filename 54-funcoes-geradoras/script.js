// Funções geradoras
// Possue "pausas" entre a execução do escopo (lazy evaluation)
// Lazy evaluation é um conceito na programação em que você atrasa a avaliação ou execução de uma expressão, função ou cálculo até que o resultado seja realmente necessário.

function* geradora1() { // yield é semelhante a return
    // Algum código sendo executado
    yield 'Valor 1';
    // Algum código sendo executado
    yield 'Valor 2';
    // Algum código sendo executado
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value); // valor 1
console.log(g1.next().value); // valor 2
console.log(g1.next().value); // valor 3

// Quando você usa apenas g1.next() o atributo buleano 'done' está informando se o gerador já terminou todos os yields (true) ou não terminou (false)

// O laço de repetição saberá quando o gerador termina
for(let valor of g1) {
    console.log(valor);
}

// Gerador infinito
function* geradora2() {
    let i = 0;
    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


// Função geradora que chama outra função geradora
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3(); // Está delegando que a função g3 faça todos os seus yields e depois continue com o código abaixo
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

for(let valor of g4) {
    console.log(valor);
}

// Você pode retornar qualquer tipo de código com o yield
function* geradora5() {
    yield () => console.log('Sou o 1º yield da g5');
    yield () => console.log('Sou o 2º yield da g5');
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();













