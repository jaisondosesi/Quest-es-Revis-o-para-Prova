// Exercício 1
 
 
/* Exercício 2 - Contagem Regressiva
let countdown = 10;

const interval = setInterval(() => {  
    console.log(countdown);
    countdown--;

    if (countdown < 0) {  
        clearInterval(interval);  
        console.log("Lançamento!");  
    }  
}, 1000);*/

/* Exercício 3 - Balanço Financeiro
let totalGanhos = 0;  
let totalGastos = 0;  

for (let mes = 1; mes <= 12; mes++) {   
    let ganhoBruto = parseFloat(prompt(`Digite o ganho bruto do mês ${mes}:`));  

    let gastosMensais = parseFloat(prompt(`Digite os gastos do mês ${mes}:`));  
 
    totalGanhos += ganhoBruto;  
    totalGastos += gastosMensais;  
}  


let saldoFinal = totalGanhos - totalGastos;  
  
console.log(`Total de Ganhos: R$ ${totalGanhos.toFixed(2)}`);  
console.log(`Total de Gastos: R$ ${totalGastos.toFixed(2)}`);  
console.log(`Saldo Final: R$ ${saldoFinal.toFixed(2)}`);  
  
if (saldoFinal > 0) {  
    console.log("A empresa teve lucro no ano.");  
} else if (saldoFinal < 0) {  
    console.log("A empresa teve prejuízo no ano.");  
}  
*/


// Exercício 4 
/*let valores = [];  

for (let i = 0; i < 4; i++) {  
    let valor = parseInt(prompt(`Digite o valor ${i + 1}:`), 10);  
    valores.push(valor); 
}  

valores.sort((a, b) => b - a);  

console.log("Valores em ordem decrescente:");  
console.log(valores); */

/*Exercício 5
let numero = parseInt(prompt("Digite um número:"));  

if (numero % 2 === 0) { 
    numero += 1;
    console.log(`O número era par, agora é: ${numero}`);  
} else {
    numero -= 1; 
    console.log(`O número era ímpar, agora é: ${numero}`);  
}  */

    