/*Escreva uma função chamada "calcularMedia" que receba um número indeterminado de parâmetros representando as notas de um aluno. Essa função deve calcular a média aritmética das notas e retornar o resultado. A quantidade de notas pode variar, e a função deve ser capaz de lidar com qualquer quantidade de notas inseridas.*/

function calcMedia(lista){
    let soma = 0;
    for(let i = 0; i < lista.length; i++){
        soma += lista[i];
    }
    let media = soma / lista.length;
    return media;
}

let notas = [];
let continuar = 'S';

while (continuar !== 'N'){
    notas.push(parseFloat(prompt('digite um número: ')));
    continuar = prompt('Continuar [S/N]?').toUpperCase();
}

console.log(`Média dos números digitados: ${calcMedia(notas)}`);

/*
A função calcMedia é definida, recebendo um parâmetro chamado lista, que representa a lista de notas.

A variável soma é inicializada com o valor 0.

Utilizando um laço for, a função percorre a lista de notas utilizando a variável de controle i. A cada iteração, o valor da nota na posição i é adicionado à variável soma utilizando o operador de adição +=.

Após percorrer todas as notas, a variável media é calculada dividindo a soma pelo comprimento da lista de notas, obtido através da propriedade length.

A média calculada é retornada pela função.

Fora da função, um array vazio notas é criado para armazenar as notas digitadas.

A variável continuar é inicializada com o valor 'S'.

Utilizando um laço while, o código solicita ao usuário que digite um número e adiciona esse número ao array notas utilizando o método push(). Em seguida, o código pergunta se o usuário deseja continuar digitando notas. A resposta é convertida para maiúsculas com toUpperCase() para aceitar tanto 's' como 'S' como respostas positivas.

O laço while continua executando enquanto o valor de continuar for diferente de 'N'.

Finalmente, a média das notas digitadas é calculada chamando a função calcMedia com o array notas como argumento. O resultado é exibido no console utilizando console.log() e interpolando-o dentro de uma string.*/