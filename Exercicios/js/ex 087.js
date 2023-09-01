/*
Você foi designado para criar um programa em JavaScript que itere sobre as propriedades de um objeto e exiba informações sobre essas propriedades. O programa deve realizar as seguintes tarefas:

Declare um objeto chamado aluno que contenha informações sobre um aluno, como nome, idade e nota.

Use um loop for...in para iterar sobre as propriedades do objeto aluno.

Para cada propriedade, exiba uma mensagem no console que indique o nome da propriedade e o valor associado a ela. Por exemplo, se o objeto aluno contiver as propriedades nome, idade e nota, a saída pode ser algo como: "Propriedade: nome, Valor: João".

*/

let student = {};

student = {
    name: 'André',
    age: 33,
    note: 10
}

for(property in student){
    console.log(`property: ${property}, Value: ${student[property]}`)
}