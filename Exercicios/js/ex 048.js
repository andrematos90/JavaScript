/*Escreva uma função chamada "verificarIdade" que recebe um parâmetro chamado "idade" e retorna uma mensagem de acordo com as seguintes regras:

Se a idade for maior ou igual a 18, a função deve retornar a string "Você é maior de idade."
Caso contrário, a função deve retornar a string "Você é menor de idade."
Você deve implementar a solução utilizando a expressão condicional ternária em JavaScript. Certifique-se de testar a função com diferentes valores de idade para garantir que ela está funcionando corretamente.*/

function verificarIdade(i){
    return i > 18 ? 'você é maior de 18' : 'você é menor de idade';

}


console.log(verificarIdade(17));