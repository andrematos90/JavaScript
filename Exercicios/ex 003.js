/* 
Escreva um programa em JavaScript que declare diferentes variáveis para representar os seguintes tipos de dados: número inteiro, número decimal, uma string de texto, um valor booleano (verdadeiro ou falso) e uma variável indefinida. Atribua valores a essas variáveis de acordo com o tipo de dado que elas representam. Em seguida, exiba o valor e o tipo de dado de cada variável no console.

Dica: Utilize o comando typeof para obter o tipo de dado de uma variável e o comando console.log() para exibir os valores e os tipos de dados no console. */


let nome = 'andré';
let idade = 33;
let altura = 1.68;
let bonito = true;
let namora;

console.log(`Variável "nome", Tipo: ${typeof(nome)}`)
console.log(`Variavel "idade",Tipo: ${typeof(idade)}`)
console.log(`Variável "altura", Tipo: ${typeof(altura)}`)
console.log(`Variavel "bonito", Tipo: ${typeof(bonito)}`)
console.log(`Variável "namora", Tipo ${typeof(namora)}`)

/*
A primeira linha de código declara uma variável chamada nome e atribui a ela o valor 'andré', que é uma string de texto.

A segunda linha declara uma variável chamada idade e atribui a ela o valor 33, que é um número inteiro.

A terceira linha declara uma variável chamada altura e atribui a ela o valor 1.68, que é um número decimal.

A quarta linha declara uma variável chamada bonito e atribui a ela o valor true, que é um valor booleano (verdadeiro).

A quinta linha declara uma variável chamada namora sem atribuir um valor específico a ela. Isso resulta em uma variável indefinida.

As próximas cinco linhas utilizam o comando console.log() para exibir mensagens no console. Cada mensagem inclui o valor da variável correspondente e usa o comando typeof para obter o tipo de dado dessa variável.

*/

