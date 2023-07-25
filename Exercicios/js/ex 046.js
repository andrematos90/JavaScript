/*
Escreva um programa em JavaScript que compare dois valores, um numérico e outro string, e determine se eles são iguais usando os operadores de igualdade "=="" e "===".

O programa deve pedir ao usuário que insira um número e uma palavra. Em seguida, ele deve comparar os dois valores usando o operador "==". Se os valores forem considerados iguais, o programa deve exibir a mensagem "Valores iguais usando ==". Em seguida, o programa deve comparar novamente os valores usando o operador "===". Se os valores forem considerados iguais desta vez, o programa deve exibir a mensagem "Valores iguais usando ===". Caso contrário, o programa deve exibir a mensagem "Valores diferentes".*/

let numero = (prompt('digite um número: '));
let palavra = prompt('digite uma palavra');

if (numero == palavra){
    alert('valores iguais usando "=="')
}
else if (numero === palavra){
    alert('valores iguais usando "===" ')
}
else{
    alert('valores diferentes!')
}