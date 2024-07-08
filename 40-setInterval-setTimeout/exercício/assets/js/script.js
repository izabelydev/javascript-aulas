function relogio () { // função para tirar o código do escopo global
    function criarHoraDosSegundos (segundos) {
        const data = new Date(segundos * 1000); // converter milissegundos em segundos
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC' // formato de hora
        });
    }
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    // ---------------BOTÕES---------------
    document.addEventListener('click', (el) => {
        const elemento = el.target; // saber qual elemento foi clicado
    
        if (elemento.classList.contains('iniciar')) {
    
            clearInterval(timer); // limpar setInterval
            relogio.classList.remove('pausado');
            timer = setInterval(() => { // contar segundos
                segundos++;
                relogio.innerHTML = criarHoraDosSegundos(segundos);
            }, 1000);
    
        } else if (elemento.classList.contains('pausar')) {
    
            clearInterval(timer); // limpar setInterval
            relogio.classList.add('pausado');
    
        } else if (elemento.classList.contains('zerar')) {
    
            clearInterval(timer); // limpar setInterval
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
    
        }
    });
}
relogio();
