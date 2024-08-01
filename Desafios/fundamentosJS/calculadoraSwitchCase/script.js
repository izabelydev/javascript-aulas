// Calculadora básica usando as 4 operações entre dois números

const x = 6;
const y = 3;
const op = '/';
let result;

switch (op) {
    case '+': result = x + y; break;
    case '-': result = x - y; break;
    case '*': result = x * y; break;
    case '/': result = x / y; break;

    default:
        console.log('Conta inválida');
        break;
}

console.log(result);