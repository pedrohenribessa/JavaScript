// function expression
// function anonymuos

// parâmetros da função (parameters)
const sum = function(number1, number2){
    // console.log(number1 * number2)
     let total = number1 + number2
     return total
 }

// sum(3, 9)  arguments - argumentos
let number1 = 10
let number2 = 20

console.log(`o númmero 1 é ${number1}`)   
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)


// Entendendo função de outra forma

    function fazerSuco(fruta1, fruta2){
        return 'suco de: ' + fruta1 + fruta2
    }

    const copo = fazerSuco('banana', 'maça')

    console.log(copo)
