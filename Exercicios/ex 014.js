/*Escreva uma função chamada verificarNumeroPar que recebe um número inteiro como parâmetro e retorna uma mensagem indicando se o número é par ou não. A função deve seguir as seguintes especificações:

A função deve retornar a mensagem "O número é par" se o número fornecido for par.
Caso contrário, a função deve retornar a mensagem "O número é ímpar".*/

function verificarNumeroPar(n) {
    if (typeof n === 'number' && !isNaN(n)) {
      if (n % 2 === 0) {
        return 'Número par!';
      } else {
        return 'Número ímpar!';
      }
    } else {
      alert('Digite apenas números inteiros!');
    }
  }
  
  let numero = parseInt(prompt('Digite um número:'));
  console.log(verificarNumeroPar(numero));
  