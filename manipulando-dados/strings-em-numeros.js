// Manipulando Strings em Números

// Transformando String em Número e Número em String
let string = "123"
console.log(Number(string))

let number1 = 321
console.log(String(number1))

// Contar quantos caracteres tem uma palávra e quantos dígitos tem um número

let word = "paralelepipedo"
console.log(word.length)

let number2 = 1234
console.log(String(number2).length)

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number3 = 2345.4567
console.log(number3.toFixed(2).replace(".", ","))

// Transforme letras minúsculas em maiúsculas. Faça o contrario disso também

let word2 = "Programar é muito bacana!"
console.log(word2.toUpperCase()) // lower or Upper

// 