/*
Escreva uma função chamada imprimirNomes que recebe um array de strings contendo nomes como parâmetro e imprime cada nome no console.*/

nomes = ['andré', 'nathalia', 'juliana', 'leticia']

nomes.forEach((element) => {
    console.log(element);
});

/*
utilizamos o método forEach diretamente no array nomes. O método forEach itera sobre cada elemento do array e executa uma função de callback para cada um deles.

A função de callback (element) => { console.log(element); } é uma função anônima que recebe o parâmetro element representando cada elemento do array.

Dentro da função de callback, temos a seguinte lógica:

console.log(element) imprime cada elemento no console.
Dessa forma, a função de callback é executada para cada elemento do array, imprimindo cada nome no console.

O método forEach não retorna nenhum valor. Ele é usado quando você precisa realizar uma ação em cada elemento do array, como a impressão no console, mas não precisa de um resultado específico.*/