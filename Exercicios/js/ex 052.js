/*Enunciado do exercício: Calculadora de Potência

Você foi contratado para desenvolver uma calculadora de potência. Sua tarefa é criar uma função anônima que recebe dois parâmetros: base e expoente. A função deve calcular e retornar o resultado da potência utilizando a fórmula base elevado a expoente.

Requisitos do exercício:

Crie uma função anônima que recebe dois parâmetros, base e expoente.
A função deve calcular a potência utilizando a fórmula base elevado a expoente.
Retorne o resultado da potência calculada pela função anônima.*/



const  potencia = function(b, e){
    return b ** e
}

console.log(potencia(3, 2));