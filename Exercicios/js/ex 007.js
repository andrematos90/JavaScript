/*
Escreva um programa em JavaScript que solicita ao usuário que insira um número. Em seguida, utilize os operadores de igualdade == e === para verificar as seguintes situações:

Se o número for igual a 5 (usando ==), exiba a mensagem "O número é igual a 5".
Se o número for igual a 5 (usando ===), exiba a mensagem "O número é estritamente igual a 5".
Se o número for uma string "5" (usando ==), exiba a mensagem "O número é uma string igual a 5".
Se o número for uma string "5" (usando ===), exiba a mensagem "O número é uma string estritamente igual a 5".
Caso contrário, exiba a mensagem "O número não é igual a 5 nem uma string igual a 5".*/

let numero = 4

if (numero === '5') {
  if (typeof numero === 'string') {
    console.log('O número é uma string estritamente igual a 5');
  } else {
    console.log('O número é estritamente igual a 5');
  }
} else if (numero == 5) {
  if (typeof numero === 'string') {
    console.log('O número é uma string igual a 5');
  } else {
    console.log('O número é igual a 5');
  }
} else {
  console.log('O número não é igual a 5 nem uma string igual a 5');
}