document.addEventListener('keydown', function(event) {
    if (event.code == "F12") {
        console.log("Começando perguntas")

        var nome_user = prompt("DIGITE SEU NOME")
        console.log(nome_user)

        var renda_mensal = parseInt(prompt("RENDA MENSAL"))
        console.log()

        if (isNaN(renda_mensal)) {
            while (isNaN(renda_mensal)) {
                renda_mensal = parseInt(prompt("DIGITE UMA RENDA MENSAL VALIDA"))
            }
        }
    }
});