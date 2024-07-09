// Escopo léxico
// Significa dizer que funções aninhadas podem acessar variáveis dentro de outros blocos de funções ao qual façam parte, nesse caso a variável nome está no escopo global
// A função primeiro irá procurar a variável dentro do escopo dela mesma, caso não encontre irá subindo para o(s) escopo(s) pai(s) até encontrar a primeira variável correspondente.

const nome = 'luiz'; // Escopo global

function falaNome() {
    const nome = 'otávio'; // Escopo local foi encontrado primeiro
    // O escopo local não pode ser acessado externamente, a forma de acessarmos as variáveis dessa função fora dela, seria fazer a função retornar um objeto contendo essas variáveis.
    // exemplo: https://dev.to/nandobfr/escopo-de-funcao-escopo-de-bloco-e-escopo-lexico-173n
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'joao'; // Essa variável não irá afetar o escopo léxico da função falaNome() e seus elementos pais
    falaNome(); // Acessando escopo externo
}

usaFalaNome();
