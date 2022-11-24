/* criando variavel fora da função
usamos a variabels , e depois se tem o resultado */

// função que adiciona a uma variavel

let count = 0; // criando a varivel de "escopo global" fora da função


function add(){
    
    count ++;  // usando a varivel na função
}


add();
add();

console.log(count);