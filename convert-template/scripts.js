console.log("JavaScript carregado!");
//Cotação de moedas do dia
const USD = 5.18
const EUR = 5.97
const GBP = 6.84

//Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Manipulando o input amount para receber apenas números
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
    event.preventDefault() //Prevenindo o comportamento padrão do formulário (recarregar a página)

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

//Função para converter a moeda selecionada para Reais (BRL)
function convertCurrency (amount, price, symbol){
    try {
        //Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 =  ${formatCurrencyBRL(price)}`
        
        //Calculando o valor total da conversão
        let total = amount * price

        //Verifica se o resultado não é um número válido, caso contrário, exibe um alerta para o usuário 
        // (isNaN = is Not a Number *não esquecer)
        if (isNaN(total)){
            return alert("Por favor, insira um valor numérico válido.")
        }

        //Formatar o valor total para a exibição ao usuário, removendo o símbolo "R$" para exibir apenas o valor numérico
        total = formatCurrencyBRL(total).replace("R$", "")

        //Exibe o resultado total
        result.textContent = `${total} Reais`

        //Aplica a classe que exibe o footer com o resultado da conversão
        footer.classList.add("show-result")
        
    } catch (error) {
        //Remove a classe do footer removendo ele da tela 
        footer.classList.remove("show-result")
        
        console.error("Ocorreu um erro na conversão:", error)
        alert("Ocorreu um erro na conversão. Por favor, tente novamente.")
    }
}

//Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
    //Coverte para número para utilizar o toLocaleString para formatar no padrão BRL (R$00,00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}