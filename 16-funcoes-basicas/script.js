// A função executa uma ação, normalmente cria-se varias funções com ações diferentes ao inves de criar uma função que faz tudo

function saudacao (nome) {
    return `Bom dia ${nome}`;
}

const variavel = saudacao('Iza');
console.log(variavel);

function soma (x = 0, y = 0) {
    const resultado = x + y;
    return resultado;

    // tudo que ficar abaixo de return não será executado
    console.log('Olá mundo');
}

console.log(soma(2, 3));


// Criar função anonima

const raiz = function (n) {
    return n ** 0.5;
}; //precida do ponto e virgula

console.log(raiz(9));

// Arrow function
// const raiz = n => return n ** 0.5;