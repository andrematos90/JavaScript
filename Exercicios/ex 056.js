/*Você recebeu um array de números inteiros chamado numeros. Sua tarefa é escrever uma função chamada alterarElementos que recebe esse array como parâmetro e realiza as seguintes alterações:

Substitua todos os elementos pares por 0.
Multiplique por 2 todos os elementos ímpares maiores do que 10.
Adicione 1 a todos os elementos que sejam múltiplos de 3.
A função deve retornar o array modificado.*/


function alterarElementos(array) {
    for (i = 0; i < array.length; i++) {
        // Verifica se o elemento atual é par
        if (array[i] % 2 == 0) {
            array[i] = 0; // Substitui o elemento por 0
        }
        // Verifica se o elemento atual é ímpar e maior que 10
        else if (array[i] % 2 != 0 && array[i] > 10) {
            array[i] = array[i] * 2; // Multiplica o elemento por 2
        }
        // Verifica se o elemento atual é divisível por 3
        else if (array[i] % 3 == 0) {
            array[i] = array[i] + 1; // Adiciona 1 ao elemento
        }
    }
    return array; // Retorna o array alterado
}

numeros = [11, 3, 12, 18, 24, 42];
console.log(alterarElementos(numeros)); // Imprime o resultado da função no console
