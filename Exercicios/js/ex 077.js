/*
Exercício: Calculadora de Soma com Loop "do-while" em JavaScript

Crie um programa em JavaScript que implemente uma calculadora de soma utilizando um loop "do-while". O programa deve solicitar repetidamente ao usuário que insira um número para ser somado a um total acumulado. O loop deve continuar a pedir entradas até que o usuário insira um valor negativo, momento em que o loop deve parar e o resultado da soma acumulada deve ser exibido no console.

Requisitos:

Solicite ao usuário que insira um número inteiro positivo.
Utilize um loop "do-while" para repetir o processo de adição até que o usuário insira um número negativo.
Acumule a soma dos números inseridos.
Quando um número negativo for inserido, exiba o resultado da soma acumulada no console.
Lembre-se de lidar com a entrada do usuário e garantir que os números sejam tratados corretamente para evitar erros.*/

let soma = 0;
let numero = 0;
do{
   numero = parseInt(prompt("Digite um número positivo para somar [negativo para encerrar]: "));
   if(numero >= 0){
    soma = soma + numero;
   }
   console.log(soma)

}
while(numero >= 0);