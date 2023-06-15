/*
Crie um programa que solicita ao usuário que digite um número de 1 a 7 representando um dia da semana. Utilize a estrutura switch para exibir o nome do dia correspondente ao número digitado.

Por exemplo, se o usuário digitar 1, o programa deve exibir "Domingo". Se o usuário digitar 2, o programa deve exibir "Segunda-feira", e assim por diante. Caso o usuário digite um número inválido fora do intervalo de 1 a 7, exiba a mensagem "Número inválido".*/

number = prompt('número de 1 a 7: ')
day_week = parseInt(number)

switch (day_week) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-Feira');
        break;
    case 3:
        console.log('Terça-Feira');
        break
    case 4:
        console.log('Quarta-Feira');
        break;
    case 5:
        console.log('Quinta-Feira');
        break;
    case 6:
        console.log('Sexta-Feira');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Valor inválido!');
}

/*A primeira linha de código utiliza o comando prompt() para solicitar ao usuário que digite um número de 1 a 7 representando um dia da semana. O valor inserido pelo usuário é armazenado na variável number.

Em seguida, convertemos o valor de number para um número inteiro utilizando o comando parseInt() e armazenamos na variável day_week.

Utilizamos a estrutura switch para avaliar o valor de day_week.

Cada caso (case) representa um número de 1 a 7 correspondente a um dia da semana. Se o valor de day_week corresponder a um dos casos, a mensagem correspondente ao dia da semana é exibida no console utilizando o comando console.log().

O caso default é acionado quando o valor de day_week não corresponde a nenhum dos casos anteriores. Nesse caso, a mensagem "Valor inválido!" é exibida no console. */

 