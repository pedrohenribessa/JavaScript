// Switch

// let expression = 'a'

// switch(expression) {
//     case 'a': 
//     // codigo
//     console.log('a')
//         break
//     case 'b':
//     // codigo para expressao b
//     console.log('b')
//         break
//     default:
//     console.log('default')
//         break
// }

function calculete(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2 
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }
    return result
}

console.log(calculete(4, '%', 8))