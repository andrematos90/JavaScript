
function somar(...valores){
    let tam = valores.length;
    let res = 0;
    for(let i = 0; i < tam; i++){
        res = res + valores[i];
        
    }
    return res;
}


console.log(somar(1, 2, 5));


/*
let tam = valores.length;: Aqui, o comprimento (quantidade de elementos) do array de valores é armazenado na variável tam.

let res = 0;: A variável res é inicializada com zero. Essa variável será usada para armazenar a soma dos valores.

O loop for percorre cada elemento no array de valores. O loop começa em 0 (índice do primeiro elemento) e continua até que i seja menor que tam (comprimento do array).

res = res + valores[i];: Neste ponto, o valor atual no índice i do array é somado ao valor atual de res. Isso acumula a soma dos valores.

Após o loop, a função retorna o valor final de res, que é a soma de todos os valores.
*/


// mesmo exemplo com for of

function somar2(...valores){
    let res = 0;

    for(let v of valores){
        res += v;
    }
    return res;
}

console.log(somar2(9, 1, 2));

/*
Esta é uma versão alternativa da função somar que utiliza um loop for...of para percorrer os valores em vez de um loop tradicional com índices.

let res = 0;: Assim como antes, a variável res é inicializada com zero.

O loop for...of itera sobre cada valor no array valores.

res += v;: Aqui, o valor v (cada valor no array) é adicionado a res, acumulando a soma.

A função retorna o valor final de res, que é a soma de todos os valores.*/