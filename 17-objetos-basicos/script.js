//Objeto literal
// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// Função que cria um objeto (factory - fábrica de objetos)
function criarPessoa (nome, sobrenome, idade) { // definição de parametros que recebem os argumentos
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criarPessoa('Luiz', 'Miranda', 25); //argumentos
const pessoa2 = criarPessoa('Maria', 'Flor', 3);
const pessoa3 = criarPessoa('Iza', 'Lourenço', 20);
const pessoa4 = criarPessoa('Leonardo', 'Silva', 29);
const pessoa5 = criarPessoa('João', 'Ferreira', 31);


//função dentro do objeto
const pessoa6 = {
    nome: 'Fernanda',
    sobrenome: 'Alves',
    idade: 38,

    falar() {
        console.log(`${this.nome} falou "olá, minha idade atual é ${this.idade}"`);
    },

    incrementarIdade() {
        this.idade++;
    }
}
pessoa6.falar();
pessoa6.incrementarIdade();
pessoa6.falar();
pessoa6.incrementarIdade();
pessoa6.falar();
pessoa6.incrementarIdade();

