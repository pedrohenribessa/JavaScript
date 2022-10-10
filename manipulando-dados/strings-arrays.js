// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ")
// console.log(myArray)

let phraseWithUnderscor = myArray.join("_")
console.log(phraseWithUnderscor.toUpperCase())

// Encontrando palavras em frases
let phrase2 = "Eu quero viver o amor!"
console.log(phrase2.includes("amor"))

// Criar Array com construtor
let myArray2 =new Array('a', 'b', 'c')
console.log(myArray2)

// Contar elementos de um array
console.log(['a', 'b', 'c'].length)

// Strings para Arrays
// Transformar uma cadeia de caracteres em elemntos de um array 
let word = "Manipulação"
console.log(Array.from(word))