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


/*4 formas de declarar a mesma função: 

1 - function sobrenome(sob){
      return 'André' + ' ' + sob
  }
2 - const sobrenome = sob => 'André' + ' ' + sob;   se tivesse apenas uma parametro, nao precisa nem de parenteses 
3 - const sobrenome = (sob) => 'André' + ' '+ sob;
4 - const sobrenome = (sob) => 'André' + ' ' + sob;


segundonome = sobrenome('matos');
chamada da função = console.log(sobrenome(segundonome));
*/