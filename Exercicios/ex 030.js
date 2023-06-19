/*Escreva uma função chamada filterEvenNumbers que recebe um array de números inteiros como argumento. A função deve usar o método filter() para retornar um novo array contendo apenas os números pares do array original.*/

function filterEvenNumbers(array){
    pares = array.filter(function (number){
        return number % 2 == 0;
    });
    return pares;
}
    
let numeros = [8, 9, 10, 11, 12, 20, 1]
console.log(filterEvenNumbers(numeros))

/*
A função filterEvenNumbers(array) é definida. Ela recebe um array como parâmetro.

Dentro da função, a variável pares é declarada sem ser inicializada.

Em seguida, o método filter() é chamado no array passado como argumento. O filter() é um método de array que cria um novo array com todos os elementos que atendem a uma determinada condição.

É passada uma função anônima como argumento para o método filter(). Essa função verifica se um número é par verificando se o resultado da divisão do número por 2 é igual a 0. Se a condição for verdadeira, o número é incluído no novo array retornado pelo filter().

Dentro da função de filtro, o valor de number representa cada elemento do array que está sendo iterado.

O método filter() percorre cada elemento do array e aplica a função de filtro a cada elemento.

Os números pares são armazenados no array pares por meio da atribuição pares = array.filter(...).

Após percorrer todos os elementos do array e filtrar os números pares, a função retorna o array pares.

Na parte externa da função, é declarado um array numeros contendo os números [8, 9, 10, 11, 12, 20, 1].

A função filterEvenNumbers(numeros) é chamada, passando o array numeros como argumento.

A função filterEvenNumbers() é executada e retorna o array [8, 10, 12, 20].

O resultado retornado pela função é exibido no console por meio do console.log().

No console, você verá o array [8, 10, 12, 20], que são os números pares filtrados do array original [8, 9, 10, 11, 12, 20, 1].*/
