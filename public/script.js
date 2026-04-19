console.log("Começando perguntas")

var nome_user = prompt("DIGITE SEU NOME")
var renda_mensal = parseInt(prompt("RENDA MENSAL"))

if (isNaN(renda_mensal)) {
    while (isNaN(renda_mensal)) {
        renda_mensal = parseInt(prompt("DIGITE UMA RENDA MENSAL VALIDA"))
    }
}

var despesa = parseInt(prompt("DIGITE DE 1 a 5 QUANTAS DESESPESAS VOCE TEM EM NUMEROS"))
if (isNaN(despesa) || despesa > 5 || despesa < 1) {
    while (isNaN(despesa) || despesa > 5 || despesa < 1) {
        despesa = parseInt(prompt("DIGITE DE 1 a 5 QUANTAS DESESPESAS VOCE TEM EM NUMEROS"))
    }
}

var soma_t = 0

for (let i = 0; i < despesa; i++) {
    var despesa_i = parseInt(prompt("Digite o valor da Despesa " + i))
    if (isNaN(despesa_i)) {
        while (isNaN(despesa)) {
            despesa = parseInt(prompt(`Digite um valor real para Despesa ${i + 1}`))
        }
    }
    soma_t += despesa_i
}

var messagem = ""

if (soma_t > renda_mensal) {
    messagem = "Você gastou mais do que ganhou."
} else {
    var valor_sobra = renda_mensal - soma_t
    var valor_percent = renda_mensal * 0.3

    if (valor_sobra >= valor_percent) {
        messagem = "Ótimo: boa margem de sobra."
    } else {
        messagem = "Ok: dá para melhorar a sobra."
    }
}

console.log(`Dados coletados, iniciando. \nUsuario: ${nome_user} \nRenda Mensal: ${renda_mensal} \nGastos totais em despesas: ${soma_t} \nSobra: ${renda_mensal - soma_t} \nMensagem sobre os gastos: ${messagem}`)
alert(`Dados coletados, iniciando. \nUsuario: ${nome_user} \nRenda Mensal: ${renda_mensal} \nGastos totais em despesas: ${soma_t} \nSobra: ${renda_mensal - soma_t} \nMensagem sobre os gastos: ${messagem}`)