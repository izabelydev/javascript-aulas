// Atribuição por desestruturação de objetos

const pessoa = {
    nome: 'Iza',
    sobrenome: 'Lourenço',
    idade: 20,
    endereço: {
        rua: 'Jorge Tibiriça',
        numero: '320',
    },
    resposta: {
        disponível: 'Disponível para se mudar para: ',
        local: 'São Paulo'
    }
};

const { nome: teste = 'Sem nome', sobrenome } = pessoa;
const { endereço: {rua, numero}, ...resto } = pessoa;
console.log(teste, sobrenome);
console.log(rua, numero, resto);