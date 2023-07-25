/*Escreva um programa em JavaScript que solicite ao usuário que insira a sua idade e se possui carteira de motorista. Em seguida, utilize os operadores lógicos && (e) e || (ou) para verificar as seguintes situações:

Se a idade for maior ou igual a 18 anos e possuir carteira de motorista, exiba a mensagem "Você pode dirigir!".
Se a idade for menor do que 18 anos ou não possuir carteira de motorista, exiba a mensagem "Você não pode dirigir!".*/


let idade =  prompt('Idade');
let carteira = prompt('Possui CNH [S/N]?');
let tem_carteira = ' ';
if (carteira == 'S'){
    tem_carteira = true
}
else{
    tem_carteira = false
}

if (idade > 18 && tem_carteira){
    console.log('Pode dirigir!')
}

if(idade < 18 || tem_carteira == false){
    console.log('Não pode dirigir!')
}

/*

A primeira linha de código utiliza o comando prompt() para solicitar ao usuário que insira a idade. O valor inserido pelo usuário é armazenado na variável idade.

A segunda linha de código utiliza o comando prompt() para solicitar ao usuário se possui carteira de motorista, com as opções "S" (sim) ou "N" (não). O valor inserido pelo usuário é armazenado na variável carteira.

A terceira linha de código utiliza uma estrutura condicional "if" para verificar se o valor da variável carteira é igual a "S". Se a condição for verdadeira, a variável tem_carteira recebe o valor booleano true. Caso contrário, recebe o valor booleano false.

A quarta linha de código utiliza uma estrutura condicional "if" para verificar se a idade é maior do que 18 e se a variável tem_carteira é verdadeira. Se ambas as condições forem verdadeiras, o bloco de código dentro do "if" será executado e exibirá a mensagem "Pode dirigir!".

A sexta linha de código utiliza uma estrutura condicional "if" para verificar se a idade é menor do que 18 ou se a variável tem_carteira é falsa. Se uma das condições for verdadeira, o bloco de código dentro do "if" será executado e exibirá a mensagem "Não pode dirigir!".*/