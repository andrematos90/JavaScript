/*
Exercício: Calculadora de soma

Escreva um programa em JavaScript que utilize um loop for para calcular a soma de todos os números inteiros de 1 a N, onde N é um número inteiro fornecido pelo usuário. O programa deve seguir os seguintes passos:


*/

n = prompt('Digite um número:')

let soma = 0;
for(i = 1; i <= n; i++){
    soma = soma + i
    
}
console.log(soma)

/*
O programa solicita ao usuário que digite um número usando o prompt, e o valor fornecido é armazenado na variável n.

A variável soma é inicializada com o valor 0. Essa variável será usada para acumular a soma dos números.

O loop for é iniciado com a declaração for(i = 1; i <= n; i++). A variável i é inicializada com o valor 1, e o loop continuará executando enquanto i for menor ou igual a n. A cada iteração, i é incrementado em 1.

Dentro do loop, a instrução soma = soma + i é executada. Isso significa que o valor atual de i é adicionado ao valor acumulado em soma. Isso atualiza a variável soma com a soma parcial dos números.

Após cada iteração, o loop volta para a etapa 3, verificando se a condição i <= n ainda é verdadeira. Se for verdadeira, o loop continua executando; caso contrário, o loop é interrompido.

Quando o loop é concluído, ou seja, quando i não é mais menor ou igual a n, o programa avança para a próxima instrução, que é console.log(soma).

A função console.log(soma) exibe o valor final da variável soma no console do navegador ou do ambiente de desenvolvimento. Isso mostra a soma total dos números de 1 a n.*/