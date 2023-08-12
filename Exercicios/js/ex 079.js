/*
Exercício: Explorando Propriedades de um Objeto com o Loop "for...in" em JavaScript

Neste exercício, você irá praticar o uso do loop for...in em JavaScript para percorrer e explorar as propriedades de um objeto. O objetivo é realizar uma série de tarefas utilizando esse tipo de loop.

Tarefas:

Crie um objeto chamado aluno com as seguintes propriedades: nome, idade, curso e nota.
Utilizando o loop for...in, itere sobre as propriedades do objeto aluno e exiba no console o nome da propriedade e o valor correspondente.
Verifique se a propriedade nota possui um valor maior ou igual a 7. Se sim, exiba a mensagem "Aluno aprovado" no console; caso contrário, exiba a mensagem "Aluno reprovado".
Crie um segundo objeto vazio chamado dadosExtras.
Novamente utilizando o loop for...in, itere sobre as propriedades do objeto aluno e, se a propriedade tiver um valor do tipo string, adicione-a ao objeto dadosExtras, usando a própria propriedade como chave e o valor como valor associado.
Ao final do loop, exiba o objeto dadosExtras no console.
Certifique-se de que cada etapa está funcionando corretamente e que as mensagens são exibidas conforme as instruções. Utilize o loop for...in para percorrer as propriedades do objeto e realizar as tarefas mencionadas.

Lembre-se de que o loop for...in é usado para percorrer as propriedades enumeráveis de um objeto, e ele fornece o nome da propriedade em cada iteração.

*/

let aluno = {nome: 'André', idade: '33', curso: 'JavaScript', nota: 10};

for(i in aluno){
    console.log(i + ': ' + aluno[i])
}