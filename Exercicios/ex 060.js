/*Exercício: Números Pares

Escreva uma função chamada filtrarPares que recebe um array de números inteiros como parâmetro e retorna um novo array contendo apenas os números pares.

Instruções:

Crie uma função chamada filtrarPares que recebe um parâmetro numeros.
Utilize o método filter para iterar sobre o array numeros e filtrar apenas os números pares.
Retorne o novo array contendo apenas os números pares.*/

array = [8, 11, 60, 28]

const filtrarPares = array.filter((num) => num % 2 == 0)

console.log(filtrarPares)

/*
O método filter itera sobre cada elemento do array e retorna um novo array contendo apenas os elementos que atendem a uma determinada condição. Neste caso, queremos filtrar apenas os números pares.

A função de callback (num) => num % 2 == 0 é uma função anônima que recebe o parâmetro num representando cada elemento do array.

Dentro da função de callback, temos a seguinte lógica:

num % 2 retorna o resto da divisão de num por 2.
== 0 verifica se o resto da divisão é igual a zero, ou seja, se o número é par.
Dessa forma, a função de callback retorna true se o número for par e false caso contrário. O filter utiliza esses valores booleanos para filtrar apenas os números pares.

O filter retorna um novo array contendo apenas os números pares.*/