/*

Exercício de Pré-Incremento e Pós-Incremento em JavaScript

Você foi designado para escrever um programa simples em JavaScript para praticar o uso de operadores de pré-incremento e pós-incremento. O programa deve realizar as seguintes tarefas:

Declare uma variável chamada contador e inicialize-a com o valor 5.

Use o operador de pré-incremento para incrementar o valor da variável contador em 1 unidade e, em seguida, exiba o valor atual da variável.

Use o operador de pós-incremento para incrementar novamente o valor da variável contador em 1 unidade e, em seguida, exiba o valor atual da variável.

Finalmente, exiba a mensagem "O valor final de contador é: [valor final]" onde [valor final] é o valor atual da variável contador.
*/

let contador = 5;

console.log(`Valor atual: ${contador}`);
console.log(`Valor atual: ${++contador}`);
console.log(`Valor atual: ${contador++}`);