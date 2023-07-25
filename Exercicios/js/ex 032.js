/* Você foi contratado por uma escola para desenvolver um sistema de verificação de aprovação dos alunos. Sua tarefa é implementar uma função chamada checkApproval que recebe um array de notas e retorna true se pelo menos um aluno tiver uma nota maior ou igual a 7, ou false se todas as notas forem menores que 7.

Instruções:*/
function checkApproval(array) {
    return array.some(function(nota) {
        return nota >= 7;
    });
}

var studentGrades = [8, 6, 9, 5, 7];
console.log(checkApproval(studentGrades));

/*
A função checkApproval recebe um parâmetro chamado array, que representa o array de notas dos estudantes.

Dentro da função checkApproval, usamos o método some do array "array". O método some verifica se pelo menos um elemento do array atende a uma determinada condição. Ele recebe uma função como argumento que será aplicada a cada elemento do array.

A função passada para o método some é uma função anônima que recebe um parâmetro chamado nota. Essa função verifica se a nota é maior ou igual a 7. Se for, ela retorna true, indicando que a condição foi atendida.

O método some percorre cada elemento do array array e aplica a função anônima a cada um deles. Se algum elemento retornar true, o método some retorna true. Caso contrário, ele retorna false.

Fora da função checkApproval, criamos uma variável chamada studentGrades que armazena um array de notas de estudantes.

Finalmente, chamamos a função checkApproval passando studentGrades como argumento e exibimos o resultado no console usando console.log. O resultado será true se houver pelo menos uma nota maior ou igual a 7 no array de notas, caso contrário, será false.*/