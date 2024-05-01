//função dentro de um objeto chama-se método, se estiver fora do objeto chama-se função
//o parenteses chama uma função, uma função executa uma ação
window.alert('Minha mensagem'); // retorna um valor indefinido - undefined
window.confirm('Deseja realmente apagar?'); //retorna um valor boolean - true/false
window.prompt('Digite o seu nome:'); //retorna uma string

//colocar o valor do retorno dentro de uma variável
const confirmar = confirm('Deseja apagar?');
console.log(confirmar); //no console do navegador, digite apenas o nome da variável "confirmar"
let num = prompt('Digite um número');
console.log(num); //no console do navegador, digite apenas o nome da variável "num"
num = parseFloat(num); //transformar a string em number