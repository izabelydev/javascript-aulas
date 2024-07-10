// Funções imediatas / auto invocadas
// IIFE => Immediately Invoked Function Expression


const sobrenome = 'B. Lourenço'; // variável no escopo global


// Evitar que todas as outras funções caiam no escopo global
(function() { // criar a função (pode colocar parâmetros se quiser)
    const sobrenome = 'Lourenço'; // essa variável não afeta a variável que está no escopo global
    function criarNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falarNome() {
        console.log(criarNome('Iza'));
    }

    falarNome();

})(); // executá-la imediatamente e tudo criado dentro dela começa a rodar sem poluir o escopo global, pode inserir os argumentos se tiver parâmetros.


//  https://imasters.com.br/front-end/sobre-funcoes-imediatas-javascript-iife
// O IIFE significa “Immediately-invoked function expression”, mas podemos chamá-lo de função imediata. Como o próprio nome diz, ela executa a função imediatamente depois de criada. Mas por que usar? Encapsulamento! Tenha em mente que variáveis em Javascript têm como escopo a função pela qual elas foram definidas (podem ser acessadas somente dentro da função, jamais fora). Ao criar uma função anônima com execução imediata, podemos criar um escopo temporário para nossas funções e variáveis. Com isso, evitamos poluição no nosso escopo global e possíveis conflitos de variáveis ou funções com o mesmo nome.
