/*
    Escreva uma função que recebe um número e retorne o seguinte:
    - Se o num é divisivel por 3 = Fizz
    - Se o num é divisivel por 5 = Buzz
    - Se o num é divisivel por 3 e 5 = FizzBuzz
    - Se o num NÃO  é divisivel por 3 e 5 = retorna o próprio número

    => checar se o número é realmente um número = Retorna o próprio número
    => use a função com números de 0 a 100
*/

function fizzBuzz(num) {
    if (typeof num !== 'number') return num; 
    else if (num >= 0 && num <= 100) {                            
        return num % 3 === 0 && num % 5 === 0 ? 'FizzBuzz' : num % 3 === 0 ? 'Fizz' : num % 5 === 0 ? 'Buzz' : num;
    } else return num;

}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}



