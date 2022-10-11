/*
# Operador condicional (ternário)

    - Dependendo da condição, nós receberémos valores diferentes

        * Condiçao então valor 1 se não valor 2
        * condition ? valeu : value2
*/

// Exemplos 
// Café da manha top
let pao = true
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)

// Maior de 18
let age = 16
const canDrive = age >= 18 ? 'Can drive' : "Can't drive"

console.log(canDrive)