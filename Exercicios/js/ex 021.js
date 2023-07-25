/*Crie uma função chamada contarNumerosPares que recebe um array como parâmetro,
e conta a quantidade de números pares do array.*/

function contarNumerosPares(array){
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0){
            contador ++;
        }
    }
    return contador;
}

lista = [1, 2, 3, 4, 5, 6, 7, 8, 10 ]
lista = contarNumerosPares(lista)
console.log(lista)

/*
Definimos uma função chamada contarNumerosPares que recebe um parâmetro array.
Dentro da função, inicializamos uma variável contador com o valor zero. Essa variável será usada para contar quantos números pares existem no array.
Iniciamos um loop for que percorre o array utilizando uma variável i como contador. A condição de parada do loop é que i seja menor que o comprimento do array (array.length).
Dentro do loop, verificamos se o elemento atual do array (array[i]) é divisível por 2 (ou seja, se é um número par). Isso é feito verificando se o resto da divisão por 2 (array[i] % 2) é igual a zero.
Se o elemento atual for um número par, incrementamos o contador em 1 (contador++).
Após percorrer todos os elementos do array, retornamos o valor do contador.
Fora da função, criamos uma variável chamada lista e atribuímos a ela um array [1, 2, 3, 4, 5, 6, 7, 8, 10].
Chamamos a função contarNumerosPares passando o array lista como argumento e atribuímos o resultado retornado pela função de volta à variável lista.
Por fim, imprimimos o valor da variável lista no console utilizando console.log().*/