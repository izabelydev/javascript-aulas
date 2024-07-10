// passar funções como parâmetros para outras funções e chamá-las dentro das funções externas.
// função callback é passá-la como um parâmetro para outra função, chamando-a novamente em seguida, logo depois que algo aconteça ou que alguma tarefa seja concluída.
// O JavaScript executa o código sequencialmente em uma ordem de cima para baixo. No entanto, existem alguns casos em que o código é executado (ou deve ser executado) depois que algo acontece e de modo não sequencial. Isso é chamado de programação assíncrona.
// JavaScript assíncrono evita que tenhamos problemas e erros.
//Funções que são executadas quando uma ação finaliza.


function rand(min = 1000, max = 5000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() { // setTimeout é para simular algo que demoraria para carregar no site
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() { // setTimeout é para simular algo que demoraria para carregar no site
        console.log('f2');
        if(callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() { // setTimeout é para simular algo que demoraria para carregar no site
        console.log('f3');
        if(callback) callback();
    }, rand());
}

// Ordem aleatória
// f1();
// f2();
// f3();

// No código acima, a função rand faz as funções f1, f2 e f3 serem execultadas em ordem aleatória mas todas elas recebem como parametro a função callback. 
// No código abaixo a f1 será executada, em seguida chamará a f2 que chamará a f3 e por ultimo o console.log

// Ordem correta usando callback (porém a identação não está boa)
// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log('Olá mundo');
//         });
//     });
// });

// Ordem correta usando callback (com a identação corrigida)

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo!');
}

