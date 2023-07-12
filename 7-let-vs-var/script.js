//A variável está sendo declada duas vezes, isso é um erro que o let corrige.
var nome = 'Iza';
var nome = 'Lourenço';

//Outra maneira de declarar uma variável:
nome2 = 'Vitor'; //NÃO FAÇA ISSO, porque cria uma variável global que pode afetar as outras variáveis (sempre use const ou  let)
console.log(nome);