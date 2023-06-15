/*Escreva uma função chamada "contarPares" que recebe um array de números inteiros como parâmetro e retorna a quantidade de números pares presentes no array.
*/


function contarPares(array){
    let conta = 0
    for(i=0; i < array.length; i++){
        if(array[i] % 2 == 0)
            conta++;
    }
    return conta;
}

lista = [2, 5, 7, 6, 4, 12, 11];
console.log(contarPares(lista));


/*
A função contarPares é definida com um parâmetro array que representa o array de números inteiros.

É declarada uma variável conta e inicializada com o valor zero. Essa variável será usada para contar a quantidade de números pares encontrados no array.

Inicia-se um loop for que percorre cada elemento do array. A variável de controle i é inicializada com zero, e o loop continua enquanto i for menor que o comprimento do array (array.length).

Dentro do loop, há uma estrutura condicional if que verifica se o elemento atual do array é divisível por 2, usando o operador de módulo %. Se o resultado da divisão for zero (array[i] % 2 === 0), significa que o número é par.

Se a condição for verdadeira, incrementa-se a variável conta em 1. Isso significa que foi encontrado mais um número par.

Após o término do loop, a função retorna o valor da variável conta, que representa a quantidade total de números pares no array.

Fora da função, é criado um array lista com alguns números de exemplo.

A função contarPares é chamada passando o array lista como argumento.

O resultado retornado pela função é impresso no console usando console.log*/