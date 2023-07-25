/*
Verificação de elegibilidade para um programa de desconto

Você foi contratado para desenvolver um programa que determina se um cliente é elegível para um programa de desconto. O programa deve seguir as seguintes regras:

Se o cliente tem mais de 18 anos E possui um valor de compra igual ou superior a R$ 100, ele é elegível para o desconto.
Caso contrário, se o cliente tem mais de 18 anos OU possui um valor de compra igual ou superior a R$ 500, ele é elegível para o desconto.
Caso contrário, o cliente não é elegível para o desconto.
Escreva uma função chamada verificarElegibilidade que recebe dois parâmetros: idade (um número inteiro representando a idade do cliente) e valorCompra (um número representando o valor total da compra). A função deve retornar true se o cliente for elegível para o desconto e false caso contrário.*/


function verificarElegibilidade(idade, valorCompra){
    if(idade > 18 && valorCompra >= 100){
        return true;
    }
    else if (idade > 18 || valorCompra >= 500){
        return true;

    }
    else{
        console.log('não recebe desconto')
        return false;
    }
}



console.log(verificarElegibilidade(19, 99));