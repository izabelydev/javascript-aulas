// Especifico para objetos iteraveis (acessar os objetos pela posição/indice deles dentro do array)
const nome = 'Iza Lourenço';

for (let valor of nome) { // ao invés de retornar o indice ele retorna o valor do indice
    console.log(valor);
}

const nomes = ['Luiz', 'João', 'Rafael'];

for (let valor of nomes) { // ao invés de retornar o indice ele retorna o valor do indice
    console.log(valor);
}

//---------RESUMO---------
/**
 * for clássico - Geralmente cocm iteráveis (array e strings)
 * for in - Retorna o índice e a chave (string, array ou objetos)
 * for of - Retorna o valor em si (somente com iteráveis)
 */