// Throw

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório!'
    }
    console.log(name)
}

// try...catch
try {
    sayMyName('Pedro')
} catch(e) {
    console.log(e)
}

console.log('Após a função de erro')