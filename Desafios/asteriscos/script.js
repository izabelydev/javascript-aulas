const num = 10;
let ast = [];

for (let i = 0; i <= 10; i++) {
    ast.push('*'.repeat(i));
    console.log(ast[i]);
}

for (let i = ast.length - 1; i > 0; i--) {
    console.log(ast[i]);
}