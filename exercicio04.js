/*4. Desenvolva um programa para ler 10 valores imputados pelo usuário, através do teclado, e escrever
quantos desses valores lidos são NEGATIVOS. */
const readline = require("readline-sync")

let negativos = 0

for (let i = 1; i <=10; i++) {
let num = readline.questionInt("digite um valor: ")     
    if(num < 0){
        negativos++
    }
}
console.log(`Você digitou ${negativos} de valores negativos`)