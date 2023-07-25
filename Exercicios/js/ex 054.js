/*Escreva uma função em JavaScript chamada mergeAndSortArrays, que recebe dois arrays de números como parâmetros. A função deve mesclar os dois arrays em um único array e, em seguida, ordenar os elementos em ordem crescente.

A função deve retornar o array resultante ordenado.*/

function mergeAndSortArrays(arrayA, arrayB) {
    // Concatena os dois arrays em um único array
    juncao = arrayA.concat(arrayB);
    
    // Ordena os elementos do array em ordem crescente
    juncao.sort(function(a, b) {
        return a - b;
    });
    
    // Retorna o array resultante ordenado
    return juncao;
}

// Arrays de exemplo
primeiro = [1, 6, 5, 4];
segundo = [5, 8, 12, 48];

// Chamada da função mergeAndSortArrays com os arrays de exemplo
console.log(mergeAndSortArrays(primeiro, segundo));


/*O método sort() é usado para ordenar os elementos de um array em JavaScript. Ele recebe uma função de comparação como argumento, que determina a ordem de classificação dos elementos.

Nesse caso específico, a função de comparação (function(a, b) { return a - b; }) é passada como argumento para o sort(). Essa função de comparação compara dois elementos do array, a e b, e retorna um valor numérico.

A lógica por trás do retorno a - b é a seguinte:

Se o valor de a for menor que o valor de b, o retorno será um número negativo.
Se o valor de a for igual ao valor de b, o retorno será zero.
Se o valor de a for maior que o valor de b, o retorno será um número positivo.
Dessa forma, ao subtrair a de b, a função de comparação retorna um valor negativo se a deve ser classificado antes de b, um valor positivo se a deve ser classificado depois de b, e zero se a e b são considerados iguais em termos de ordem.

Assim, o sort() utiliza a função de comparação para reordenar o array juncao em ordem crescente com base nos valores numéricos dos seus elementos.*/
