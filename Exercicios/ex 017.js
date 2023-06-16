/*Obter Elemento pela Posição

Escreva uma função chamada "obterElemento" que recebe um array e uma posição como parâmetros e retorna o elemento do array que está na posição especificada.*/

function obterElemento(array, position){
    let elemento = array[position] 
    return elemento;
}

array = ['cachorro', 'carro', 'mulher', 'comida', 'natureza', 'Deus']
console.log(obterElemento(array, 5))

/*A função obterElemento é definida, que recebe dois parâmetros: array e position. O parâmetro array representa o array de elementos e position é a posição desejada para acessar o elemento.

Na linha let elemento = array[position], o elemento do array na posição especificada é atribuído à variável elemento. Essa linha utiliza a sintaxe de acesso aos elementos de um array em JavaScript, em que array[position] retorna o elemento do array na posição position.

Em seguida, o valor de elemento é retornado pela função.

Fora da função, é criado um array chamado array contendo uma lista de elementos.

A função obterElemento é chamada, passando o array e a posição 5 como argumentos.

O valor retornado pela função é impresso no console usando console.log.
*/