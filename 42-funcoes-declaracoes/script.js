// Declaração literal de função (function hoisting) - permite que você execute funções antes das suas declarações
falarOi(); // executar

function falarOi() { // declarar
    console.log('oi');
}

// Todas as funções em JS são first-class objects (objetos de primeira classe)
//  A linguagem JS suporta a passagem de funções como argumentos para outras funções, retornando-as como os valores de outras funções e atribuindo-as a variáveis ​​ou armazenando-as em estruturas de dados.

// Function expression (colocar a função dentro de uma variável)
const souUmDado = function () { // função anônima (sem nome)
    console.log('Sou um dado');
};
// Executa a variável como uma função, porque ela passou a ser uma função
souUmDado();

// Exemplo
function executarFuncao(funcao) {
    funcao();
}
executarFuncao(souUmDado);



// ARROW FUNCTION
// Uma sintaxe mais concisa e moderna para escrever funções em JavaScript (para usar a palavra "this" não é muito eficiente)
const funcaoArrow = () => {
    console.log('Sou arrow function');
};
funcaoArrow();


// DENTRO DE UM OBJETO
const obj = {
    // declaração clássica
    falar: function() {
        console.log('estou falando...');
    },

    //declaração moderna
    falarTchau(){
        console.log('Tchau...')
    }
};
obj.falar(); // executar
obj.falarTchau();
