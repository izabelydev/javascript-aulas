const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas) { // ao invés de incrementar, ele lê os indices do array ou chaves do objeto
    console.log(i);
}

const pessoa = {
    nome: 'Iza', // chave do objeto
    sobrenome: 'Lourenço', // chave do objeto
    idade: 20 // chave do objeto
}

for (let chave in pessoa) {
    // console.log(chave); // ao invés de incrementar, ele lê os indices do array ou chaves do objeto
    // console.log(pessoa.nome); // ou
    // console.log(pessoa['sobrenome']); // geralmente usado para sites dinâmicos
    console.log(`${chave}: ${pessoa[chave]}`);
}