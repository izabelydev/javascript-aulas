/*
    && - false && true = false "o valor mesmo"
    || - false && true = true "o valor verdadeiro"
    *false (literal) - 
    *falsy (avaliam em falso quando necessário) ex: 0 | '', "", `` | null, undefined | NaN
*/
console.log('luiz' && 0 && 'maria'); // 0
console.log('luiz' && true && 'maria'); // true
console.log('luiz' && true && NaN); // NaN
console.log('luiz' && '' && 'maria'); //undefined

// Exemplo: função verdadeira && variavel undefined
function falarOi() {
    return 'oi';
}

let variavel;
console.log(variavel && falarOi());

// Qualquer valor diferente de falsy é verdadeiro
console.log (0 || false || null || 'Luiz' || true);

//*****IMPORTANTE******** */
const corUsuario = null;
const corPadrao = corUsuario || 'red'; // ao invés de usar if
console.log(corPadrao);

//pegadinha
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);