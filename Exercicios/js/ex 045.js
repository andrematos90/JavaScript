/*
Escreva um programa em JavaScript para verificar se um ano é bissexto. Um ano bissexto é aquele que é divisível por 4, exceto quando também é divisível por 100. No entanto, os anos divisíveis por 400 são considerados bissextos. O programa deve solicitar ao usuário que insira um ano e exibir uma mensagem indicando se o ano é bissexto ou não.*/

let ano = prompt('Digite o ano: ');

if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)){
    console.log('O ano é bissexto!');
}
else {
    console.log('O ano não é bissexto!');
}
