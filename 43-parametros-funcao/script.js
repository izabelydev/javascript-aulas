// Quando você coloca parâmetros em uma função que não recebe parâmetros, espera-se um erro mas com JavaScript não acontece nada ou você pode manipular os argumentos
funcao(1, 2, 3, 4, 5, 6, 7);
// Para funções declaradas com a palavra "function" (não serve para  arrow function)

function funcao() {
    console.log('oi');

    // A palavra arguments (que é um obj) recebe todos os parâmetros que não foram declarados nos parâmetros da função
    const parametrosNaoDeclarados = [arguments];
    console.log('Esses foram os parametros não declarados: ', parametrosNaoDeclarados);
    // console.log(arguments[8]);

    //SOMA TOTAL DE TODOS ARGUMENTOS
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}

// Quando você não envia a quantidade de parametros declarados, o JavaScript torna o parâmetro como "undefined" porque não foi enviado nenhum valor para os argumentos do parâmetro
// Quando você envia argumentos a mais do que a quantidade de parâmetros, o JS apenas não envia o argumento sobressalente
function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3); // 3 argumentos de 6 parâmetros
funcao2(1, 2, 3, 4, 5, 6, 7); // 7 argumentos de 6 parâmetros. 

// Como resolver o problema de ter argumentos faltando
function soma(a, b) {
    // Maneira antiga
    a = a || 0;
    b = b || 0;
    console.log(a + b);
}
soma(2);

// Maneira moderna
function soma2(a = 0, b = 0, c = 10) {
    console.log(a + b + c);
}
soma2(2);
// Como manter o valor padrão do parâmetro - somente usando a palvra undefined
soma2(2, 2, undefined);


// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO DOS PARÂMETROS
function pessoaObj({
    nome,
    sobrenome,
    idade
}) {
    console.log(nome, sobrenome, idade);
}

// Enviando valor literal mas também podem ser declarados em uma variável e enviar somente a variável
pessoaObj({
    nome: 'Iza',
    sobrenome: 'Lourenço',
    idade: 20
});

function pessoaArray([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade);
}
pessoaArray(['Izabely', 'Vitória', 21]);

// Rest operator "..." - recebe todo o resto dos argumentos (sempre tem que ser o último parâmetro da função)
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('/', 1, 20, 20, 30);
