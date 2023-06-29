// ordenar array por ordem alfabética

let frutas = ['uva', 'pera', 'maça','manga'];

frutas.sort(); // alera o array colocando em ordem alfabetica de A-Z
frutas.reverse(); // reverte a ordem do array
console.log(frutas);


let carros = [
    {marca: 'Fiat', ano: 1997 },
    {marca: 'volkswagen', ano: 1985},
    {marca: 'chevrolet', ano: 2010}
]

//baseando a lista pelo ano

carros.sort((a, b) => {          // a é o item da vez e b o próximo item
    if( a.ano > b.ano) {
        return 1;
    } else if (a.ano < b.ano){
        return -1;
    }else {
        return 0;
    }

});

console.log(carros);

/*
Primeiro, temos um array chamado carros que contém três objetos representando diferentes carros. Cada objeto tem duas propriedades: marca e ano, representando a marca e o ano do carro, respectivamente.

Em seguida, usamos o método sort() no array carros. O método sort() é usado para ordenar os elementos de um array com base em uma função de comparação.

A função de comparação que passamos para o sort() é uma função de seta (a, b) => { ... }. Essa função recebe dois elementos do array e deve retornar um valor numérico.

Dentro da função de comparação, comparamos os valores das propriedades ano dos objetos a e b:

Se o valor de a.ano for maior que o valor de b.ano, retornamos 1. Isso indica que o objeto a deve ser ordenado após o objeto b.
Se o valor de a.ano for menor que o valor de b.ano, retornamos -1. Isso indica que o objeto a deve ser ordenado antes do objeto b.
Se o valor de a.ano for igual ao valor de b.ano, retornamos 0. Isso indica que a ordem entre a e b não importa, pois têm o mesmo ano.
O método sort() usará essa função de comparação para classificar os elementos do array carros com base no ano dos carros.

Por fim, usamos console.log(carros) para exibir o array carros ordenado no console.*/