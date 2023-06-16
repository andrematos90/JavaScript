/*Escreva uma função chamada "removerItensEspecificos" que recebe um array e um valor como parâmetros. A função deve remover todos os itens do array que sejam iguais ao valor fornecido.*/

function removerItensEspecificos(array, valor) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === valor) {
            array.splice(i, 1);
        }
    }
    return array;
}

let lista = [1, 2, 3, 4, 5, 5];
lista = removerItensEspecificos(lista, 5);
console.log(lista);

/*
A função removerItensEspecificos recebe dois parâmetros: array e valor. O array é a lista na qual desejamos remover elementos específicos, e o valor é o elemento que queremos remover.

O loop for é iniciado, começando pelo último índice do array (array.length - 1) e indo até o primeiro índice (0) usando o operador de decremento (i--). O objetivo é percorrer o array de trás para frente.

Dentro do loop, verifica-se se o valor do elemento no índice atual (array[i]) é igual ao valor que queremos remover (valor).

Se a condição for verdadeira, ou seja, o elemento é igual ao valor que queremos remover, então utilizamos o método splice para remover esse elemento do array. O método splice recebe dois argumentos: o índice a partir do qual queremos remover (i) e o número de elementos a serem removidos (1).

O loop continua para o próximo índice até percorrer todos os elementos do array.

Após o loop, retornamos o array modificado.

Em seguida, criamos uma variável lista que contém um array inicial [1, 2, 3, 4, 5, 5].

Chamamos a função removerItensEspecificos passando o lista e o valor 5 como argumentos. A função irá remover todas as ocorrências do valor 5 no array.

O resultado retornado pela função é atribuído novamente à variável lista.

Por fim, o array modificado é exibido no console através do console.log(lista).

Dessa forma, o resultado impresso no console será [1, 2, 3, 4], pois os dois valores 5 foram removidos do array original.*/