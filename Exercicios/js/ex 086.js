/*

Exercício sobre o Uso do Loop for...of em JavaScript

Você foi designado para criar um programa em JavaScript que itere sobre os elementos de um array e realize uma operação específica em cada elemento. O programa deve realizar as seguintes tarefas:

Declare um array chamado frutas que contenha uma lista de diferentes tipos de frutas.

Use um loop for...of para iterar sobre cada elemento do array frutas.

Para cada fruta, exiba uma mensagem no console informando que a fruta foi adicionada ao carrinho de compras. Por exemplo, se a fruta for "Maçã", a mensagem pode ser: "Maçã foi */


fruits = ['apple', 'pineapple', 'banana', 'kiwi'];

for (fruit of fruits){
    console.log(`${fruit} added to the shopping car`);
}
