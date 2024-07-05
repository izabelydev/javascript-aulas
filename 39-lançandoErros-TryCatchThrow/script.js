//---------------------PARTE 1-----------------------------

// Erro: tentar usar uma variável que ainda não existe no programa
try { // tente fazer algo:
    console.log(naoExisto);
} catch (error) { // será executado caso try apresente erro
    console.log('Não foi possivel verificar a variavel');

    //IMPORTANTE: NUNCA exiba o erro para o usuário final
    // console.log(error);
}


// Lançar um erro (esses tipos não devem ser mostrados para o usuário)
function somar(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // lançar somente string
        // throw ('x e y precisam ser números');

        //lançar novo erro
        throw new Error ('x e y precisam ser números');
    }

    return x + y;
}

try {
    console.log(somar('1', 2));
} catch (error) {
    // console.log(error); não mostrar para o usuário
    console.log('Algo mais amigável para o usuário avisando sobre o erro');
}


//---------------------PARTE 2-----------------------------

try {
    // executa quando não há erros
    console.log('TRY: abri arquivo');
    console.log('manipulei o arquivo e gerou erro');
    console.log(manipularArquivo());
    console.log('fechei o arquivo');
} catch (error) {
    // executa quando há erros
    console.log('CATCH: tratando o erro');
} finally {
    //será executado sempre
    console.log('FINALLY: eu sempre sou executado');
}

// obs: é possível colocar um try dentro do outro


function mostrarHora(data) {
    //instanceof: quando a variável é instância da função Construtora, nesse caso a função C. é "Date"
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância tipo Date');
    }

    // Se enviar uma data será instancia de Date
    if (!data) { // Se não enviar uma data ele criará uma data atual
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        // Remover timezone
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('2003-08-22 02:25:00');
    const hora = mostrarHora(data);
    console.log(hora);

} catch (error) {
    // Tratar erro
} finally {
    console.log('Bom dia');
}









