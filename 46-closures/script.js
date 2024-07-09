function retornaFuncao() {
    const nome = 'iza';

    // Retorna função anônima
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao(); // Recebe função anônima
console.dir(funcao);
// Com o comando dir é possivel ver todos os escopos que a função tem acesso. Nesse caso são 3:
/*
    [[Scopes]]: Scopes[3]
    0: Closure (retornaFuncao) {nome: 'iza'}
    1: Script {funcao: ƒ}
    2: Global {window: Window, self: Window, document: document, name: '', location: Location, …}
*/