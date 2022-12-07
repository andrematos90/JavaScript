// ordenar array por ordem alfabética

let frutas = ['uva', 'pera', 'maça','manga'];

frutas.sort(); // alera o array colocando em ordem alfabetica de A-Z
frutas.reverse(); // reverte a ordem do array
console.log(frutas);


let carros = [
    {marca: 'Fiat', ano: 2022 },
    {marca: 'volkswagen', ano: 2002},
    {marca: 'chevrolet', ano: 2013}
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