/**
    # Sistema de gastos familiar

    - Crie um objeto que possuira 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []

    - Agora, crie uma funcao que ira calcular o total de receitas e despesas, e ira mostrar uma mensagem 
    se a familia esta com saldo positivo ou nagativo, seguido do valor do saldo.
 */

let family = {
    incomes: [10000, 2000, 700, 1800.50, 250, 3601,],
    expenses: [1100, 80.73, 70.22, 600, 400.43,]
}

function sum(array) {
    let total = 0

    for(let value of array) {
        total += value
    }

    return total
}

function calculeBalance() {
    const calculeteIncomes = sum(family.incomes)
    const calculeteExpense = sum(family.expenses)

    const total = calculeteIncomes - calculeteExpense
    
    const itsOk = total >= 0

    let balanceText = "negativo"
    if(itsOk) {
        balanceText = "positivo"
    }
    console.log(`Seu saldo e ${balanceText}: ${total.toFixed(2)}R$`)
}

calculeBalance()