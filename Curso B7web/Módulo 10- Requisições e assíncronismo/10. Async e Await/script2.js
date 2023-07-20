// Declaração da primeira função que retorna uma Promise.
function primeiraFuncao(){
    // Dentro da Promise, estamos usando setTimeout para simular uma operação assíncrona que levará 1000ms (1 segundo).
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Esperou isso');
            // Após o tempo definido, a Promise é resolvida com a chamada da função resolve().
            resolve();
        }, 1000);
    });
}

// Declaração da segunda função que utiliza async/await para trabalhar com a primeira função.
async function segundaFuncao(){
    console.log('Iniciou');

    // Aqui, usamos o await para esperar a resolução da Promise retornada pela primeiraFuncao().
    await primeiraFuncao();

    // Após a resolução da primeira função, o fluxo continua aqui.
    console.log('Terminou');
}

// Chamada da segunda função. Neste momento, a execução do código começa a partir daqui.
segundaFuncao();


/*
Comentários sobre o funcionamento do código:

primeiraFuncao() é uma função que retorna uma Promise e simula uma operação assíncrona usando setTimeout. Após 1 segundo, ela resolve a Promise e exibe a mensagem "Esperou isso" no console.
segundaFuncao() é uma função declarada como async. Ela inicia exibindo a mensagem "Iniciou" no console.
Em seguida, await primeiraFuncao() é chamado. Isso pausa a execução da segunda função até que a Promise retornada pela primeiraFuncao() seja resolvida.
Após a resolução da Promise da primeira função, o fluxo continua, e a mensagem "Terminou" é exibida no console.

Executando esse código, a saída no console será:

Iniciou
Esperou isso
Terminou

Observe que a chamada await primeiraFuncao() fez com que a segunda função aguardasse a resolução da primeira antes de prosseguir para a linha seguinte de código. Isso é o que torna o async/await útil para escrever código assíncrono de forma mais legível e síncrona. 



MESMO CÓDIGO COM PROMISE

function primeiraFuncao(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Esperou isso');
            resolve();
        }, 1000);
    });
}

function segundaFuncao(){
    console.log('Iniciou');

    // Chamada da primeira função que retorna uma Promise.
    return primeiraFuncao()
      .then(() => {
        console.log('Terminou');
      })
      .catch((error) => {
        console.error(error);
      });
}

// Chamada da segunda função.
segundaFuncao();


Nesta versão, não estamos usando async e await. Em vez disso, a função segundaFuncao() retorna uma Promise que representa o resultado da execução de primeiraFuncao(). Dentro de segundaFuncao(), chamamos primeiraFuncao() e, após a resolução da Promise dela, exibimos a mensagem "Terminou" no console. Também tratamos erros usando .catch().

A saída no console será a mesma

Embora as Promises sejam mais verbosas do que o async/await, elas são uma maneira válida de lidar com código assíncrono e ainda são amplamente utilizadas em muitos projetos JavaScript. A escolha entre async/await e Promises depende das preferências pessoais e do contexto do projeto em que você está trabalhando. Ambos os métodos são úteis para lidar com código assíncrono de forma eficaz.*/
