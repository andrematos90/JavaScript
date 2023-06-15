/*
Escreva um programa em JavaScript que solicita ao usuário que digite a sua idade. Em seguida, utilize uma condicional ternária para verificar se a idade é maior ou igual a 18. Se for, exiba a mensagem "Você é maior de idade!". Caso contrário, exiba a mensagem "Você é menor de idade!".*/


let idade = prompt('Digite sua idade: ')
let msg = idade >= 18 ? 'Maior de idade' : 'Menor de idade'
console.log(msg)


/*
A primeira linha de código utiliza o comando prompt() para solicitar ao usuário que insira a sua idade. O valor inserido pelo usuário é armazenado na variável idade.

Em seguida, utilizamos a condicional ternária para verificar se a idade é maior ou igual a 18. A estrutura da condicional ternária é a seguinte: condição ? expressão1 : expressão2.

No caso do seu código, a condição é idade >= 18. Se essa condição for verdadeira, a expressão Maior de idade será atribuída à variável msg. Caso contrário, a expressão Menor de idade será atribuída à variável msg.

Por fim, utilizamos o comando console.log() para exibir a mensagem armazenada na variável msg.*/