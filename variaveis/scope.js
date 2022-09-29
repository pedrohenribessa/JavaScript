
console.log('> existe x antes do bloco?', x)
{
    var x = 0
    // console.log("> existe x dentro do bloco?", x)
}
console.log('> existe x depois do bloco?', x) 

// let e const são locais e só funcionam no scopo onde foi criada
let y = 1
{
    let y = 2
    console.log('> existe y antes?', y)
}   
    console.log('> existe y depois do bloco?', y)

const z = 3
{
    const z = 4
    console.log('> existe z antes?', z)
}   
    console.log('> existe z depois do bloco?', z)