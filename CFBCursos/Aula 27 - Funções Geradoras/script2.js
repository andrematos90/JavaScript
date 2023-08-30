// Definição da função geradora "perguntas"
function* perguntas() {
    nome = yield "Qual seu nome?"; // Pausa e retorna a pergunta, espera receber um valor
    esporte = yield "Qual seu esporte preferido?" // Pausa e retorna a pergunta, espera receber um valor
    return `Seu nome é ${nome}, seu esporte preferido é ${esporte}`; // Retorna a mensagem final
}

// Criação do iterator a partir da função geradora
const iteratorPerguntas = perguntas();

// Primeira chamada de "next()" - Pergunta: Qual seu nome?
console.log(iteratorPerguntas.next().value); // Saída: "Qual seu nome?"

// Segunda chamada de "next()" com valor 'André' - Pergunta: Qual seu esporte preferido?
console.log(iteratorPerguntas.next('André').value); // Saída: "Qual seu esporte preferido?"

// Terceira chamada de "next()" com valor 'Ciclismo' - Retorna a mensagem final
console.log(iteratorPerguntas.next('Ciclismo').value); // Saída: "Seu nome é André, seu esporte preferido é Ciclismo"



/*
A função geradora perguntas é definida. Ela contém duas instruções yield. A primeira pergunta o nome e a segunda pergunta o esporte preferido. No final, ela retorna uma mensagem combinando o nome e o esporte.

A constante iteratorPerguntas é definida ao chamar a função geradora perguntas().

Na primeira chamada de iteratorPerguntas.next().value, a execução da função geradora começa e pausa na primeira instrução yield. A pergunta "Qual seu nome?" é retornada como resultado da chamada.

Na segunda chamada de iteratorPerguntas.next('André').value, a execução da função geradora é retomada a partir do ponto onde parou e pausa na segunda instrução yield. A pergunta "Qual seu esporte preferido?" é retornada.

Na terceira chamada de iteratorPerguntas.next('Ciclismo').value, a execução da função geradora é retomada novamente e continua até a última instrução. A mensagem combinando o nome "André" e o esporte "Ciclismo" é retornada como resultado.

O uso de valores passados para o método next() é importante para preencher as variáveis nome e esporte nas instruções yield. É uma maneira de interagir com a função geradora e fornecer respostas para as perguntas que ela faz.
*/