// Funções que retornam objetos - factory function (função fábrica)

function criarPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        genero: 'mulher',
        altura: altura,
        peso: peso,

        // uma função dentro de um objeto é chamada de método
        fala: function(assunto) {
            //      parâmetro      atributo do obj
            return `${nome} você é ${this.genero} seu sobrenome é ${sobrenome}, 
            você está falando sobre ${assunto}.`;
            // com arrow function a falavra this não funcionará
        },

        // o método se torna um atributo quando usa get (getter)
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        get nomeCompleto() {
            return `Nome completo: ${this.nome} ${this.sobrenome}`;
        },

        // setter - setar o atributo
        set nomeCompleto(valor) {
            valor = valor.split(' '); // O nome completo será separado através dos espaços
            this.nome = valor.shift(); // o atributo nome recebe o primeiro nome do array valor
            this.sobrenome = valor.join(' '); // o restante do array será recebido no atributo sobrenome com um espaço entre as palavras
        }
    };
}

const p1 = criarPessoa('Iza', 'Lourenço', 1.6, 50);
//         obj + método
console.log(p1.fala('JavaScript'));
console.log(p1.imc);

p1.nomeCompleto = 'Iza V. Lourenço';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
