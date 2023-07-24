/*
 Crie um programa em JavaScript que gere uma sequência de Fibonacci com base no número de termos especificado pelo usuário. A sequência de Fibonacci é uma série de números em que cada número é a soma dos dois números anteriores.

Instruções:

Solicite ao usuário que insira a quantidade de termos que deseja gerar na sequência de Fibonacci.
Verifique se o número fornecido é maior que zero, já que não faz sentido gerar uma sequência com zero ou menos termos.
Utilize um loop (por exemplo, um loop for) para gerar a sequência de Fibonacci.
Inicialize duas variáveis para representar os dois primeiros termos da sequência (geralmente 0 e 1).
Dentro do loop, calcule o próximo termo somando os dois últimos termos e armazene-o em uma variável auxiliar.
Em seguida, atualize os dois últimos termos para serem os últimos dois termos gerados (ou seja, o penúltimo e o último).
Repita os passos 5 e 6 até que o número desejado de termos seja gerado.
Exiba a sequência de Fibonacci gerada ao final do programa.*/

let termos = parseInt(prompt('Quantidade de termos: '));

// Verifica se o número fornecido é maior ou igual a 1
if (termos >= 1) {
    quantidadeTermos = termos;
} else {
    // Caso a quantidade de termos seja menor que 1, solicita novamente ao usuário.
    termos = parseInt(prompt('Quantidade de termos: '));
    quantidadeTermos = termos;
}

let primeiroTermo = 0;
let segundoTermo = 1;

// Variável para armazenar a sequência de Fibonacci gerada
let sequenciaFibonacci = '';

for (let i = 0; i < quantidadeTermos; i++) {
    // Adiciona o primeiro termo da sequência à variável sequenciaFibonacci
    sequenciaFibonacci += primeiroTermo + ', ';

    // Calcula o próximo termo somando os dois últimos termos
    let proximoTermo = primeiroTermo + segundoTermo;

    // Atualiza os valores dos termos para o próximo cálculo
    primeiroTermo = segundoTermo;
    segundoTermo = proximoTermo;
}

// Remove a última vírgula e espaço da sequência e exibe o resultado
alert('Sequência Fibonacci: ' + sequenciaFibonacci.slice(0, -2));

