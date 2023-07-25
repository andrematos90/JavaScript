/*Escreva um programa em JavaScript que solicite ao usuário que adivinhe um número de 1 a 10. O programa deve gerar aleatoriamente um número secreto e, em seguida, o usuário deve tentar adivinhar o número. O programa deve fornecer feedback informando se o número digitado é maior ou menor do que o número secreto. O programa deve continuar executando até que o usuário adivinhe corretamente o número secreto. Use um loop while para implementar essa funcionalidade.*/

let palpite = prompt('Digite um número de 1 a 10: ');
let numeroAleatorio = parseInt(Math.random() * 10);

while (numeroAleatorio != palpite) {
    if(numeroAleatorio > palpite){
        alert('O número que o computador jogou é maior!')
        palpite = prompt('Digite um número de 1 a 10: ');
    }
    else if(numeroAleatorio < palpite){
        alert('O número que o computador jogou é menor!')
        palpite = prompt('Digite um número de 1 a 10: ');
    }
}
alert('Você acertou o número secreto!')

/*
let palpite = prompt('Digite um número de 1 a 10: ');

Nesta linha, você declara uma variável chamada palpite e usa a função prompt() para solicitar ao usuário que digite um número de 1 a 10. O valor inserido pelo usuário será armazenado na variável palpite.
let numeroAleatorio = parseInt(Math.random() * 10);

Aqui, você declara uma variável chamada numeroAleatorio e gera um número aleatório entre 0 (inclusive) e 1 (exclusivo) usando Math.random(). Em seguida, multiplica esse número por 10 e usa parseInt() para obter apenas a parte inteira do resultado. Dessa forma, você obtém um número inteiro entre 0 e 9.
while (numeroAleatorio != palpite) {

Esta é a estrutura de um loop while, que continuará executando o bloco de código dentro dele enquanto a condição entre parênteses for verdadeira. No seu caso, o loop continuará enquanto o número aleatório for diferente do palpite do usuário.
if(numeroAleatorio > palpite){

Aqui, você verifica se o número aleatório é maior que o palpite do usuário usando uma estrutura condicional if. Se essa condição for verdadeira, o código dentro deste bloco será executado.
alert('O número que o computador jogou é maior!')

Esta linha exibe uma mensagem ao usuário, informando que o número que o computador gerou é maior do que o palpite do usuário. Isso fornece uma dica para ajudar o usuário a adivinhar corretamente.
palpite = prompt('Digite um número de 1 a 10: ');

Aqui, você solicita novamente ao usuário que digite um novo palpite, substituindo o valor anterior armazenado na variável palpite.
else if(numeroAleatorio < palpite){

Esta é outra estrutura condicional if, onde você verifica se o número aleatório é menor do que o palpite do usuário.
alert('O número que o computador jogou é menor!')

Essa linha exibe uma mensagem informando ao usuário que o número gerado pelo computador é menor do que o palpite.
palpite = prompt('Digite um número de 1 a 10: ');

Aqui, você solicita novamente um novo palpite ao usuário.
alert('Você acertou o número secreto!')

Quando o palpite do usuário for igual ao número aleatório, o loop será interrompido e essa linha exibirá uma mensagem parabenizando o usuário por acertar o número secreto.*/