/*
let cores = [
    'preto',
    'branco',
    'vermelho'
];

for (let n = 0; n < cores.length; n++){ // let n = 0 começa a rodar do 0 ,
                                         //  n < cores.length executa enquanto n for menor que o numero total de cores 
                                        //adiciona mais um
console.log(cores[n]);
}

*/

/* outra forma de fazer loop em array 


let cores = [
    'preto',
    'branco',
    'vermelho'
];


for(let i in cores){   // pega a chave para executar a cada vez que executar o codigo cria a variavel i, 
                       //  dentro de i vai ter a chave de cores 
    console.log(cores[i]);
}
*/

/* outra forma, desse jeito pega o valor

*/

let cores = [
    'preto',
    'branco',
    'vermelho'
];

for(let cor of cores){
    console.log(cor);
}