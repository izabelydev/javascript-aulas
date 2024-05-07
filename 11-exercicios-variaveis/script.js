let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// Ordem original das letras
console.log(varA, varB, varC);

// Inverter/reorganizar a ordem das letras (operação de desestruturação)
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

//A desestruturação em JavaScript é um método simplificado de extrair várias propriedades de um array, pegando a estrutura e desconstruindo-a, por meio de atribuições e usando uma sintaxe semelhante a dos array literals (arrays literais, em português)