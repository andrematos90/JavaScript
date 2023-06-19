/*
Você foi contratado para desenvolver uma função que verifique se todos os números de um array são positivos. Para isso, você deve utilizar o método every().

Implemente a função areAllPositiveNumbers(array) que recebe um array de números como parâmetro e retorna true se todos os números forem positivos, e false caso contrário.*/

function areAllPositiveNumbers(array) {
    return array.every(function(number) {
        return number >= 0;
    });
}

var lista = [-1, 8];
console.log(areAllPositiveNumbers(lista)); // false

/*
A função areAllPositiveNumbers é definida, e ela recebe um parâmetro chamado array.
Dentro da função, o método every é chamado no array fornecido. O método every percorre cada elemento do array e retorna true apenas se a função de retorno fornecida para ele retornar true para todos os elementos.
A função de retorno fornecida ao método every é uma função anônima que recebe um parâmetro chamado number.
Dentro dessa função anônima, é verificado se o number é maior ou igual a zero usando a expressão number >= 0.
Se a expressão for verdadeira para todos os elementos do array, o método every retorna true. Caso contrário, retorna false.
Fora da função areAllPositiveNumbers, é criada uma variável chamada lista que armazena um array com os valores -1 e 8.
A função areAllPositiveNumbers é chamada passando o lista como argumento.
O resultado da função é impresso no console usando console.log().
Neste exemplo específico, como o primeiro elemento da lista é -1 (um número negativo), a função areAllPositiveNumbers retorna false.
Portanto, o resultado impresso no console será false*/