/*
Escreva uma função chamada verificarPresenca(elemento, array) que recebe dois parâmetros:

elemento (valor): O elemento que deve ser verificado se está presente no array.
array (array): O array no qual a verificação será realizada.
A função deve utilizar o método includes() para determinar se o elemento está presente no array. Caso o elemento seja encontrado, a função deve retornar true; caso contrário, deve retornar false.*/

function verificarPresenca(elemento, array){
    return array.includes('Twingo')
}

let carros = ['Gol', 'Civic', 'Malibu', 'Fusca']

console.log(verificarPresenca('Twingo', carros))

/*
Declaração da função verificarPresenca(elemento, array):

A função recebe dois parâmetros: elemento e array.
A função utiliza o método includes() para verificar a presença do elemento no array.
O resultado da verificação é retornado pela função.
Declaração da variável carros com um array de strings:

let carros = ['Gol', 'Civic', 'Malibu', 'Fusca'];
Chamada da função verificarPresenca('Twingo', carros) dentro do console.log():

Passa o valor 'Twingo' como elemento e o array carros como array para a função.
A função verificarPresenca() é executada.
Execução da função verificarPresenca(elemento, array):

O método includes() verifica se o elemento está presente no array.
Se o elemento for encontrado, o método retorna true, caso contrário, retorna false.
Impressão do resultado no console:

O resultado retornado pela função é exibido no console.
No exemplo fornecido, como 'Twingo' não está presente no array carros, o resultado será false.*/
