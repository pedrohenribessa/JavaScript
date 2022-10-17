/*
    # Transformar notas escolares

    Crie um algoritimo que transforme as notas do sistema numerico para sistema de notas em caracteres tipo A B C D F

    * de 90 para cima - A
    * entre 80 -89    - B
    * entre 70 - 79   - C
    * entre 60 -69    - D
    * menor que 60    - F

*/

let score = 101

function getScore(score) {
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal;

    if(scoreA) {
        scoreFinal = "A"
    } else if(scoreB) {
        scoreFinal = "B"
    } else if(scoreC) {
        scoreFinal = "C"
    } else if(scoreD) {
        scoreFinal = "D"
    } else if(scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = ("Nota invalida")
    }

    return scoreFinal

}

console.log( getScore (90))
console.log( getScore (101))
console.log( getScore (77))
console.log( getScore (88))
console.log( getScore (45))
console.log( getScore (66))
console.log( getScore (-1))