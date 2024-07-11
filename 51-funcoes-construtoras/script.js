// Função construtora retorna objetos (assim como factory)
// Construtora: é necessário iniciar com letra maiscula porque precisa usar a palavra new

function Pessoa (nome, sobrenome) {
    // O corpo da função será um objeto
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => { // pode usar qualquer tipo de função
        console.log('Sintaxe para método na função construtora');
    };

    // Atributos/métodos privados (para o atributo não ser acessado por fora da função, é só coloca-lo em uma variável)
    const id = 123456;
    const metodoPrivado = () => {};
}

//  A palavra new cria um novo objeto vazio, faz o this retornar para o objeto vazio e retorna automaticamente o objeto para a variável
const p1 = new Pessoa('Iza', 'Lourenço');
const p2 = new Pessoa('João', 'Silva');

console.log(p1, p2);
p2.metodo();
