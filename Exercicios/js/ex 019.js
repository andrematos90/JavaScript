/* Escreva uma função chamada "adicionarElemento" que recebe um array e um novo elemento como parâmetros. A função deve adicionar o novo elemento ao final do array.*/

function adicionarElemento(array, newElment){
    array.push(newElment);
    return array;
}

lista = [7, 8, 9, 10]
adicionarElemento(lista, 12)
console.log(lista)

/*A função adicionarElemento é definida, que recebe dois parâmetros: array e newElement. O parâmetro array representa o array ao qual o elemento será adicionado, e newElement é o novo elemento que será adicionado ao final do array.

Na linha array.push(newElement), o método push() é utilizado para adicionar o newElement ao final do array.

Em seguida, o array modificado é retornado pela função utilizando o comando return array;.

Fora da função, é criado um array chamado lista contendo uma lista de elementos.

A função adicionarElemento é chamada, passando o lista e o novo elemento 12 como argumentos.

O valor retornado pela função é impresso no console usando console.log.*/