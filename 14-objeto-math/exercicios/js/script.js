let numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
// const texto = prompt('Escreva uma palavra');
const textoElemento = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
textoElemento.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>
                            <p>O número ${numero} é inteiro? ${Number.isInteger(numero)}</p>
                            <p>É NaN? ${Number.isNaN(numero)}</p>
                            <p>Arredondar para baixo: ${Math.floor(numero)}</p>
                            <p>Arredondar para cima: ${Math.ceil(numero)}</p>
                            <p>Duas casas decimais: ${numero.toFixed(2)}</p>`;