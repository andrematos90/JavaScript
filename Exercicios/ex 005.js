/*Escreva um programa em JavaScript que solicite ao usuário que insira sua idade. Em seguida, utilize uma estrutura condicional "if" e "else" para verificar se a idade é maior ou igual a 18 anos. Se for, exiba a mensagem "Você é maior de idade!". Caso contrário, exiba a mensagem "Você é menor de idade!".
*/


let idade = prompt('Digite sua idade: ')
if (isNaN(idade)){
    console.log(`${idade} não é um valor numérico! Por favor digite um numero inteiro.`)
}
else{
    if (idade >= 18){
        console.log(`com ${idade} anos, Você é maior de idade!`)
    }
    else{
        console.log(`com ${idade} anos, Você é menor de idade!`)
    }
}


/*
A linha let idade = prompt('Digite sua idade:'); solicita ao usuário que digite sua idade e armazena o valor digitado na variável idade.

Em seguida, a condição if (isNaN(idade)) verifica se o valor de idade não é um número. A função isNaN é usada para verificar se o valor passado como argumento não é um número. Se o valor não for um número, o bloco de código dentro do if será executado.

Se o valor de idade não for um número, o seguinte código será executado: console.log(${idade} não é um valor numérico! Por favor, digite um número inteiro.);. Ele exibirá uma mensagem no console, informando que o valor digitado não é numérico e solicita ao usuário que digite um número inteiro.

Caso o valor de idade seja um número, a execução continuará no bloco de código else.

Dentro do bloco else, há uma condição if (idade >= 18) que verifica se a idade é maior ou igual a 18. Se a idade for maior ou igual a 18, o bloco de código dentro desse if será executado.

Se a idade for maior ou igual a 18, o seguinte código será executado: console.log(Com ${idade} anos, você é maior de idade!);. Ele exibirá uma mensagem no console, informando a idade digitada e indicando que o usuário é maior de idade.

Caso a idade seja menor que 18, o bloco else será executado e exibirá a mensagem: console.log(Com ${idade} anos, você é menor de idade!);. Ele exibirá uma mensagem no console, informando a idade digitada e indicando que o usuário é menor de idade.*/