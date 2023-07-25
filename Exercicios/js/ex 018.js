/*Escreva uma função chamada "substituirElemento" que recebe um array, uma posição e um novo elemento como parâmetros. A função deve substituir o elemento na posição especificada pelo novo elemento fornecido.*/

function substituirElemento(array, position, element){
    array[position] = element;
    return array;
}

lista = ['carro', 3, "5", 'avião']
substituirElemento(lista, 1, 'moto');
console.log(lista);
substituirElemento(lista, 2, 'bicicleta');
console.log(lista)

/*A função substituirElemento é definida, que recebe três parâmetros: array, position e element. O parâmetro array representa o array de elementos, position é a posição onde o elemento será substituído, e element é o novo elemento que substituirá o elemento existente.

Na linha array[position] = element, o novo elemento é atribuído à posição especificada do array. Essa linha utiliza a sintaxe de acesso aos elementos de um array em JavaScript, em que array[position] representa a posição desejada e element é o valor que substituirá o elemento existente.

Em seguida, o array modificado é retornado pela função.

Fora da função, é criado um array chamado lista contendo uma lista de elementos.

A função substituirElemento é chamada, passando o lista, a posição 1 e o novo elemento 'moto' como argumentos.

O valor retornado pela função não é capturado e, portanto, não é atribuído de volta à variável lista.

O valor da variável lista é impresso no console usando console.log.*/