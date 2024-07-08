function mostrarHora () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(() => {
    console.log(mostrarHora());
}, 1000);
// criar a função que será executada e executar de 1 em 1 segundo
// Pode colocar sem uma varíavel, setInterval(...);

setTimeout(() => {
    clearInterval(timer);
}, 5000); // fazer a função acima parar depois de 10 segundos

setTimeout(() => {
    console.log('Olá mundo');
}, 5000);
