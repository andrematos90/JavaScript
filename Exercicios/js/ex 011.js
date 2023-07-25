/*Escreva uma função chamada "calcularMedia" que receba três parâmetros: "nota1", "nota2" e "nota3". Essa função deve calcular a média aritmética das três notas e retornar o resultado. Em seguida, chame a função e exiba o resultado no console. */


let nota1 = 5;
let nota2 = 8;
let nota3 = 9.5;

function Media(primeira, segunda, terceira){
    let soma = primeira + segunda + terceira;
    let resultado = soma / 3
    return resultado
}

console.log(`Média: ${Media(nota1, nota2, nota3)}`)


/*As variáveis nota1, nota2 e nota3 são declaradas e atribuídas os valores 5, 8 e 9.5, respectivamente.

Em seguida, a função Media é definida. Ela possui três parâmetros: primeira, segunda e terceira. Esses parâmetros serão utilizados para receber os valores das notas.

Dentro da função, as notas são somadas utilizando o operador de adição + e armazenadas na variável soma. Por exemplo, no primeiro caso, primeira terá o valor de 5, segunda terá o valor de 8 e terceira terá o valor de 9.5, então a soma será 5 + 8 + 9.5, resultando em 22.5.

Em seguida, a variável resultado é declarada e recebe o valor da divisão da soma por 3. Ou seja, no exemplo anterior, a divisão seria 22.5 / 3, resultando em 7.5. Essa variável contém a média calculada.

Por fim, a função retorna o valor da variável resultado.

Fora da função, é utilizado console.log para exibir a média no console. A expressão ${Media(nota1, nota2, nota3)} é utilizada para chamar a função Media com os valores das variáveis nota1, nota2 e nota3, e o resultado é interpolado dentro de uma string para ser exibido no console.*/