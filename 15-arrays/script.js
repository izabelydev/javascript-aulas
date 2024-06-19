// Uma lista/coleção de coisas

// Strings são indexadas (cada caracter possui um indice) o array também é indexado
//                0        1        2
const alunos = ['Luiz', 'Maria', 'João']; //pode ter string, boolean, funções e numeros mas não é uma boa pratica
console.log(alunos);
console.log(alunos[0]); //acessar pelo indice
console.log(alunos[1]);
console.log(alunos[2]);

// Alterar um valor dentro do array pelo indice
alunos[0] = 'Eduardo';
console.log(alunos);

//Acrescentar um indice que não existe (forma menos indicada)
alunos[3] = 'Luiza';
console.log(alunos);

// Saber o tamanho do array
console.log(alunos.length);

//Acrescentar um indice que não existe (forma menos indicada)
alunos[alunos.length] = 'Fábio';
console.log(alunos);

//***Acrescentar um indice que não existe (forma mais indicada)***
alunos.unshift('Vitória'); //adiciona no começo
alunos.push('Izabely'); //adiciona no fim
console.log(alunos);

// Salvar o que foi removido do final em uma variável
let removido = alunos.pop();
console.log(removido);
console.log(alunos);

// Salvar o que foi removido do começo em uma variável
removido = alunos.shift();
console.log(removido);
console.log(alunos);

// Remover elemento sem modificar todos os indices
delete alunos[1];
console.log(alunos);

// Mostrar indices pré determinados
alunos.push('Leticia');
alunos.push('Maicon');

console.log(alunos.slice(0, 2)); // do indice 0 a 1 (o ultimo nao sera mostrado)
console.log(alunos.slice(0, -2)); // o tamanho completo do array -2

// O tipo do array é object
console.log(typeof alunos);
// alunos é uma instancia de array? true or false
console.log(alunos instanceof Array);



