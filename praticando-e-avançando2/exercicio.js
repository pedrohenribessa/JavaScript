// 1. Declare uma variável de nome weigth.

let weigth;

// 2. Que tipo de dado é a variável acima? 

// console.log(typeof weigth)

/* 3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: number (integer)
    * weigth: number (float)
    * isSubscribed: boolean
*/

let name = "Pedro"
let age = 18
let stars = 1.2
let isSubscribed = true

/* 
    4. A variável student abaixo é de que tipo de dados?
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weigth> kg.
        . Atenção, substitua <name> <age> e <weigth> pelos valores de cada propriedade do objeto
 */

let student = {
    name: "Pedro",
    age: 18,
    weigth: 61.2,
    isSubscriber: true
}
// console.log(`${student.name} de idade ${student.age} pesa ${student.weigth} kg.`)

/*
    5. Declare uma variável do tipo Array, de nome studentse atribua a ela nenhum valor, ou seja, somente Array vazio
*/

    let students = []

/*
    6. Reatribua valor para variável acima , colocando dentro dela o objeto student da questão 4. (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array).
*/

    students = [
        student
    ]
    // console.log(student)

/*
    7. Coloque no console o valor da posição zero do Array acima.
*/

    // console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/
    
        const jonh = {
            name: "jonh",
            age: 21,
            weigth: 74.5,
            isSubscribed: true
        }
        students = [
            student,
            jonh
        ]
        console.log(students[1])

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Apos sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
    */
// undefined, pois o var é global, então ela sofre uma elevação (hosting) fazendo com que o JS consegue identificalo, mas não consegue ler o valor da var antes do console.log
console.log(a)
    var a = 1