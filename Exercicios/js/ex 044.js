/*Escreva um programa em JavaScript que determine se um número é positivo, negativo ou zero. O programa deve pedir ao usuário para inserir um número e, em seguida, exibir uma mensagem indicando se o número é positivo, negativo ou zero.*/

let numero = prompt('digite um numero: ');

if (numero > 0){
    console.log('o número é positivo!');
}
else if(numero < 0){
    console.log('o número é negativo');
}
else{
    console.log('o número é igual a 0');
}