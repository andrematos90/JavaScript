/*Você foi designado para criar um programa em JavaScript que calcule a soma dos números inteiros de 1 a N, onde N é um número inteiro fornecido pelo usuário. O programa deve realizar as seguintes tarefas:

Solicite ao usuário que insira um número inteiro positivo N.

Use um loop for para calcular a soma de todos os números inteiros de 1 a N.

Exiba a soma calculada no console.

*/



let number = parseInt(prompt("enter a number: "));
let sum = 0;

for(let i = 0; i <= number; i++){
    sum += i;
    
}

console.log(sum);




