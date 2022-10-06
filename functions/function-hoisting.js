// function hoisting
sayMyName()

function sayMyName() {
    console.log('Pedro')
}
// Em variáveis nao sofrem elevação
const sayMyName = function() { 
    console.log('Pedro')
}

var sayMyName = function() {
    console.log('Pedro')
}