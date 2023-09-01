/*
Exercício sobre Operador Ternário em JavaScript

Você foi designado para criar um programa em JavaScript que determina se um número é par ou ímpar usando o operador ternário. O programa deve realizar as seguintes tarefas:

Declare uma variável chamada numero e atribua a ela um valor inteiro de sua escolha.

Use o operador ternário para verificar se o número é par ou ímpar.

Se o número for par, atribua a uma variável chamada mensagem a string "O número [numero] é par.", onde [numero] é o valor da variável numero.

Se o número for ímpar, atribua a mensagem a string "O número [numero] é ímpar.", onde [numero] é o valor da variável numero.

Exiba a variável mensagem no console.

Seu programa deve produzir uma mensagem indicando se o número é par ou ímpar com base na verificação feita com o operador ternário.

*/

let number = parseInt(prompt("input a number: "));
let msg ='';

number % 2 == 0 ? msg = "Even Number" : msg = "Odd Number";

console.log(msg);
