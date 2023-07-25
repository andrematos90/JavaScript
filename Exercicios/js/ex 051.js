/*Você precisa desenvolver uma função que verifique se um número é par ou não. Sua tarefa é criar uma arrow function chamada verificarParidade que recebe um número como parâmetro e retorna uma mensagem indicando se o número é par ou ímpar.

Requisitos do exercício:

A arrow function verificarParidade deve receber um parâmetro chamado numero.
A função deve verificar se o número é par ou ímpar.
Se o número for par, a função deve retornar a mensagem: "O número X é par.", substituindo X pelo número fornecido.
Se o número for ímpar, a função deve retornar a mensagem: "O número X é ímpar.", substituindo X pelo número fornecido.*/


const verificarParidade = (n) => {
    if (n % 2 == 0){
        return `${n} é par`;
        
    }
    else{
        return `${n} é impar`;
    }
}

console.log(verificarParidade(12));
