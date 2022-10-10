// Manipulando Arrays

    let techs = ["html", "css", "js"]    

//  * adicionar um item ao fim
techs.push("nodejs")

//  * adicionar no começo
techs.unshift("sql")

//  * remover do fim
// techs.pop()

//  * remover do começo
// techs.shift()

//  * pegar somente alguns elementos do array
// console.log(techs.slice(1,3))

//  * encontrar a posição de em elemnto no array
let index = techs.indexOf('css')

//  * remover 1 ou mais intems em qualquer posição do array
techs.splice(index, 1)

console.log(techs)