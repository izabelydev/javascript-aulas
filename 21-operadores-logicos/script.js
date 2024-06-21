/*
Operadores lógicos
&& - and (e) - todas as expressões precisam ser verdadeiras
|| - or (ou) - uma ou outra expressão precisa ser verdadeira
! - not (não)
*/
const expressaoAnd = true && true && true;
const expressaoOr = false || true || false;
console.log(expressaoAnd, expressaoOr);

// Exemplo
const usuario = 'Luiz';
const senha = '123456';
//                         true                 false
const login = usuario === 'Luiz' && senha === '1234567';
console.log(login);

// not - inverte a expressão
console.log(!false); // not false








