/*
    # celsius em Fahrenheit e Fahrenheit em celsius

    - Crie uma função que recebe uma string em celsios ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32
*/

    function transformDegree(degree) {
        const celsiosExists = degree.toUpperCase().includes('C')
        const fahrenheitExists = degree.toUpperCase().includes('F')

            // Fluxo de erro
        if(!celsiosExists && !fahrenheitExists) {
            throw new Error('Grau não identificado')
        }

        // Fluxo ideal F -> C
        let updateDegree = Number(degree.toUpperCase().replace("F", ""))
        let formula = fahrenheit => (fahrenheit - 32) * 5/9
        let degreeSign = 'C'

        // Fuxo alternativo
        if (celsiosExists) {
            updateDegree = Number(degree.toUpperCase().replace("C", ""))
            formula = celsius => celsius * 9/5 + 32
            degreeSign = 'F'
        }

        return formula (updateDegree) + degreeSign
    }

    try {
        console.log(transformDegree('41c'))
        console.log(transformDegree('50f'))
        transformDegree('1w')

    } catch (error) {
        console.log(error.message)
    }