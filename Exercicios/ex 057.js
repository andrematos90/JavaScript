/*// Suponha que temos um array de números.
const numeros = [1, 2, 3, 4, 5];

// Crie uma função chamada "multiplicarPorDois" que recebe um número como parâmetro e o multiplica por 2.

// Use o método forEach para iterar sobre o array "numeros" e aplicar a função "multiplicarPorDois" a cada elemento.
// Armazene os resultados em um novo array chamado "numerosMultiplicados".

// Imprima o novo array "numerosMultiplicados" no console.
*/





// Cria um array de números
let Arraydenumeros = [1, 2, 3, 4, 5];

// Define uma função que multiplica um número por dois
function multiplicarPorDois(numero) {
    return numero * 2;
}

// Cria um array vazio para armazenar os números multiplicados
let numerosMultiplicados = [];

// Itera sobre cada número do array Arraydenumeros usando a função foreach
Arraydenumeros.forEach(function(numero) {
    // Chama a função multiplicarPorDois passando o número como argumento
    const resultado = multiplicarPorDois(numero);
    
    // Adiciona o resultado ao array numerosMultiplicados
    numerosMultiplicados.push(resultado);
});

// Imprime o array numerosMultiplicados no console
console.log(numerosMultiplicados);
