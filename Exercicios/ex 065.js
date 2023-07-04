/*

Considere o seguinte array "numeros":

let numeros = [10, 20, 30, 40, 50];

Crie uma função chamada "removeElementosPares" que utiliza o método push() para adicionar todos os elementos impares a  "novoArray"
Dentro da função, utilize um loop para percorrer o array "numeros" de trás para frente.
Verifique se o elemento atual é impar utilizando o operador de módulo (%). Se for impar, utilize o método push() para adicioná-lo ao array.
*/



function removeElementosPares(array) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            novoArray.push(array[i]);
        }
    }
    return novoArray;
}

let numeros = [10, 20, 30, 41, 50];

numeros = removeElementosPares(numeros);
console.log(numeros);




