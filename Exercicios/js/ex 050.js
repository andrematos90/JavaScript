/*Você foi contratado para desenvolver uma calculadora de média de notas para uma escola. Sua tarefa é criar uma função chamada calcularMedia que recebe um array de notas e retorna a média aritmética dessas notas.

Requisitos do exercício:

A função calcularMedia deve receber um parâmetro chamado notas, que é um array de números.
A função deve calcular a média das notas presentes no array.
A média aritmética deve ser calculada somando todas as notas e dividindo pelo número total de notas.
O resultado da média deve ser retornado pela função.*/

function calcularMedia(notas) {
    let media;
    let soma = 0;

    for (let i=0; i < notas.length; i++){
        soma += notas[i];
    }

    media = soma / notas.length;
    return media;
}

let arraydeNotas = [8, 9, 4, 10, 10];
console.log(calcularMedia(arraydeNotas));
