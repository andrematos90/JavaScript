/*
Enunciado:
Você recebeu um array de números inteiros e sua tarefa é implementar uma função chamada ordenarArray que deve ordenar os elementos desse array em ordem crescente. A função deve retornar o array ordenado.*/

function ordenarArray(array){
    array.sort(function(a, b){
        if (a > b){
            return 1;
        }
        else if(a < b){
            return -1;
        }
        else {
            return 0;
        }
    });
}

let lista = [9, 1, 28, 12, 26];
ordenarArray(lista);
console.log(lista);

/*
Primeiro, você define a função ordenarArray com um parâmetro array, que será o array a ser ordenado.
Dentro da função ordenarArray, você chama o método sort() no array passado como parâmetro. Isso irá reordenar os elementos do array com base em uma função de comparação.
A função de comparação é definida como uma função anônima passada como argumento para o sort(). Essa função compara os elementos a e b e retorna um valor numérico.
Dentro da função de comparação, você utiliza estruturas condicionais (if, else if e else) para determinar a ordem dos elementos a e b no array ordenado.
Se a for maior que b, a função retorna 1, indicando que a deve ser colocado após b na ordenação.
Se a for menor que b, a função retorna -1, indicando que a deve ser colocado antes de b na ordenação.
Se a for igual a b, a função retorna 0, indicando que a ordem entre a e b não importa, pois eles têm o mesmo valor.
Após a chamada do sort(), o array array será reordenado com base nas comparações feitas pela função de comparação.
Em seguida, você declara uma variável lista e atribui a ela um array [9, 1, 28, 12, 26].
Chamando ordenarArray(lista), você passa o array lista como argumento para a função ordenarArray, fazendo com que o array seja ordenado internamente.
Por fim, você usa console.log(lista) para exibir o array lista já ordenado no console.
Com esses passos, o código reordena o array lista de forma crescente com base nos valores dos seus elementos. O resultado será [1, 9, 12, 26, 28].*/