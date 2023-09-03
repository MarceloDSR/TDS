/*5. Implemente um programa em javascript que automatize o processo de pagamento de uma loja. O programa deverá
receber o tipo de transação com o código “V” para vendas à vista e “P” para venda a prazo. Para vendas à vista, conceder
um desconto de 10% e apresentar a informação ao usuário. Para vendas a prazo, solicitar a quantidade de prestações,
não conceder desconto, acrescer os juros da máquina (6,5% sobre o valor total da compra); apresentar o valor total com
juros, e o valor da prestação mensal. Utilize a estrutura switch-case para solucionar o problema */

const readline = require("readline-sync")

let tipoTransacao = readline.question("Digite o tipo de venda desejada V- Venda a vista ou P- Venda a prazo: ").toLocaleUpperCase();
let valorCompra = readline.questionFloat("Digite o valor da venda: ")
let desconto = 0
let compraFinal = 0
let acrescimo = 0
let parcelas = readline.questionInt("Digite a quantidade de parcelas: ")

switch (tipoTransacao) {
    case "V":
        desconto = valorCompra * 0.10;
        compraFinal = valorCompra - desconto
        console.log(`O valor da venda a vista com 10% de desconto é R$${compraFinal},00`)
        break;
    case "P":
        acrescimo = valorCompra * 0.065;
        compraFinal = valorCompra + acrescimo
        valorParcelas = compraFinal / parcelas
        console.log(`O valor da compra a prazo é R$${compraFinal} em ${parcelas} parcelas no valor de R$${valorParcelas} cada.`)
        break;
    default:
    console.log("Você não digitou V ou P para calcular a sua venda! ERRO!")
        break; 
}