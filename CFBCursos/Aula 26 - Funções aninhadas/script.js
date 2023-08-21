// Definindo a função 'soma' que aceita um número variável de argumentos
const soma = (...valores) => {
    // Definindo a função 'somar' que realiza a soma dos valores
    const somar = val => {
        let res = 0; // Inicializa a variável 'res' para acumular a soma
        for (v of val) // Loop for...of para iterar pelos valores
            res += v; // Adiciona cada valor à variável 'res'
        return res; // Retorna o resultado da soma
    };

    // Chamando a função 'somar' com o array 'valores' como argumento
    return somar(valores);
}

// Chama a função 'soma' com os valores 10, 5 e 15 como argumentos e imprime o resultado
console.log(soma(10, 5, 15));



/*

Essa é a explicação da lógica por trás do código. A função soma aceita um número variável de argumentos, que são coletados no parâmetro ...valores. A função interna somar é responsável por iterar por esses valores e acumular a soma deles na variável res. Em seguida, o resultado da soma é retornado pela função somar e, por fim, é exibido no console.



const soma = (...valores) => { ... }:

Aqui, uma função chamada soma é definida usando a sintaxe de arrow function. Ela recebe um número variável de argumentos, que são coletados no parâmetro ...valores. Isso é conhecido como "rest parameter", permitindo que você passe um número arbitrário de valores para a função.
const somar = val => { ... }:

Dentro da função soma, outra função chamada somar é definida. Essa função recebe um único parâmetro chamado val, que se espera ser uma lista de valores. Ela é uma função interna à função soma.
let res = 0;:

A variável res é inicializada com o valor zero. Ela será usada para acumular a soma dos valores.
for (v of val) res += v;:

Aqui, um loop for...of é usado para iterar sobre os valores passados como argumento para a função somar (ou seja, o array val). A cada iteração, o valor é adicionado à variável res, que acumula a soma total.
return res;:

Depois de somar todos os valores, a função somar retorna o resultado acumulado.
return somar(valores);:

Dentro da função soma, a função somar é chamada com o array valores (que contém todos os argumentos passados para a função soma). Isso retorna o resultado da soma.
console.log(soma(10, 5, 15));:

Finalmente, a função soma é chamada com os valores 10, 5 e 15 como argumentos. O valor retornado pela função somar é exibido no console.
*/