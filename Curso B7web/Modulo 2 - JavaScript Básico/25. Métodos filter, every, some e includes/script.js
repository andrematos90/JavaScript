
let frutas = ['uva', 'pera', 'maça','manga'];

// método filter gera um novo array, ex: filtra e gera um novo array apenas com os iten que tem mais de 4 letras 
let bigrutas = frutas.filter((item) => {
return  item.length > 4 ;
 
});

console.log(bigrutas);


// every() filtra todos os itens do array

let ok = frutas.every((item) => {
    return item.length > 2;     // se todos os itens do array forem maiores do que 3 caracteres retornara verdadeiro
})

if (ok) {
    console.log(`todos os itens de ${frutas} são maiores do que 3`);
} else {
    console.log('não são todos maiores');
}

// método some() filtra se algum item do array


// filtrar por "tal" fruta por exemplo

if (frutas.includes('uva')) {// como parametro é passado o item que quero procurar 

    console.log('tem uva');
} else { 
    onsole.log('não tem uva')
}
