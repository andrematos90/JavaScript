/*

Você foi contratado para criar um programa simples que realize uma contagem regressiva a partir de um número fornecido pelo usuário. O programa deve usar um loop while para exibir os números de contagem regressiva na tela, um por linha. Uma vez que a contagem regressiva atinja zero, o programa deve exibir uma mensagem de "FELIZ ANO NOVO!".

Instruções:

Solicite ao usuário que insira um número inteiro positivo maior que zero para iniciar a contagem regressiva.
Use um loop while para iterar de forma decrescente a partir do número fornecido até zero.
A cada iteração do loop, exiba o número atual da contagem regressiva na tela.
Após a contagem regressiva atingir zero, exiba a mensagem "FELIZ ANO NOVO!".*/





// Definindo uma função chamada 'contagem' que recebe um número como argumento
const contagem = (numero) => {
    // Enquanto o número for maior ou igual a zero
    while (numero >= 0) {
        // Exibe o número atual no console
        console.log(numero);

        // Se o número for igual a zero
        if (numero === 0) {
            // Exibe a mensagem "FELIZ ANO NOVO!"
            console.log("FELIZ ANO NOVO!");
        }

        // Decrementa o valor do número em 1 a cada iteração
        numero--;
    }
}

// Solicita ao usuário que digite um número e armazena na variável 'n'
let n = prompt("Digite um número: ");

// Enquanto a entrada não for um número
while (isNaN(parseInt(n))) {
    // Solicita novamente ao usuário que digite um número
    n = prompt("Digite um número: ");
}

// Chama a função 'contagem' com o valor convertido da entrada
contagem(parseInt(n)); // Converte a entrada para um número inteiro















