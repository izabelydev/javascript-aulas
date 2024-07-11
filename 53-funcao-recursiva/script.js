function recursiva(max) {
    if(max >= 10) return; // se max for maior ou igual a 10 a função não vai mais executar
    console.log(max);
    max++;
    // a função executa o código e volta a se executar (parecido com um laço de repetição)
    recursiva(max);
}

recursiva(0);

