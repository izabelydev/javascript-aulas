const verdadeira = true;

// Let tem escopo de bloco
// Var te escopo de função

let nome = 'Luiz'; // declarando
var nome2 = 'Luiz';
var nome2 = 'Luis'; // redeclarar a mesma variável


if (verdadeira) {
    var nome2 = 'Luiza'; // redeclarar a variável
    let nome = 'Luis'; // declarando. Agora a variável nome usada é a que está dentro do if, mesmo tendo o mesmo nome não são as mesmas variáveis
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outro nome';
    }
}

console.log(nome, nome2); // let puxa o escopo global, var puxa o ultimo escopo redeclarado

// O escopo da função é mais "restrito"
function escreverSobrenome () {
    var sobrenome = 'Miranda';
    // console.log(sobrenome);
}
//console.log(sobrenome); // da erro porque a variavel "sobrenome" só pode ser acessada dentro da função







