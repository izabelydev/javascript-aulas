const num = 30;

function fibonacci(num) {
    let a = 0;
    let b = 1;
    let sequencia = [];

    while(a <= num) {
        sequencia.push(a);
        const temp = a;
        a = b;
        b = temp + a;
    }

    return sequencia;
}

console.log(fibonacci(num));