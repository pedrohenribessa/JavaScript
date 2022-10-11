// for...in

let person = {
    name: 'Jhon',
    age: 30,
    weight: 88.2
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}