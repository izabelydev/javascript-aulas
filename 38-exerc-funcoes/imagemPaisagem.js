// Função que recebe largura e altura da imagem e retorna se está em modo paisagem com true ou false.

// FUNÇÃO NORMAL
function ePaisagem(largura, altura) {
    // OPÇÕES:
    // return largura > altura ? true : false;
    return largura >= altura;
}

console.log(ePaisagem(1920, 1080));

// ARROW FUNCTION
const ePaisagem2 = (largura, altura) => largura >= altura;
console.log(ePaisagem2(1080, 1920));