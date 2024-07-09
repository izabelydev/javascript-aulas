// RETURN - retorna um valor e termina a função
function soma(a, b) {
    return a + b;
}
console.log(soma(2, 5)); // exibe um retorno da função

function soma2(a, b) {
    console.log(a + b);
}

soma2(2, 5); // Não é um retorno, é apenas uma execução


// Retorna um objeto
function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    };
}

// Criando o objeto com a função
const p1 = criarPessoa('Luiz', 'Otávio');

// Criando o objeto literal
const p2 = {
    nome: 'Iza',
    sobrenome: 'Lourenço'
};

console.log(p1);
console.log(p2);


// Funções externas e internas
function falarFrase(comeco) {
    function falarResto(resto) {
        return comeco + ' ' + resto;
    }

    return falarResto;
}

const fala = falarFrase('Olá');
const resto = fala('mundo!');

console.log(resto);

// Exemplo-----------------
/*
    function duplicar(n) {
        return n * 2;
    }

    function triplicar(n) {
        return n * 3;
    }

    function quadriplicar(n) {
        return n * 4;
    }
*/

// Melhor forma de resolver o exemplo acima é com uma função closure

// Closures (do inglês, fechamento) são funções que: referenciam variáveis livres, isto é, variáveis que não foram definidas dentro da função e nem são parâmetro da função. têm acesso a essas variáveis mesmo depois que elas saem de escopo.
// Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna.

function criarMultiplicador(multiplicador) {
    // Retorna uma função anônima
    return function(n) {
        return n * multiplicador; 
        // Nesse caso, o multiplicador não foi definido dentro dessa função e não é um parâmetro dessa função
    }
}

const duplica = criarMultiplicador(2);
const triplica = criarMultiplicador(3);
const quadriplica = criarMultiplicador(4);

console.log(duplica(2), triplica(2), quadriplica(2));
