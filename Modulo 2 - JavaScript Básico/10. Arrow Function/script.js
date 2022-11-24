/* é uma forma diferente de definir uma função, para se fazer
uma mesma função, com menos código 

function somar(x, y){
    return x + y;
}

console.log(somar(5,2)); */

// com arrow function 
//primeiro o nome da função, os parametros o "=>" , e o retorno


const somar = (x, y) => {
    return x + y; 
}

console.log(somar(5,2));


// sendo ainda mais resumido, quando a função tem apenas uma linha

// const somar = (x, y) => x + y;
// console.log(somar(5,2));


// se tivesse apenas uma parametro, nao precisa 
// nem de parenteses 
// ex:

const sobrenome = (sob) => 'Matos' + sob;
console.log (sobrenome('André'))