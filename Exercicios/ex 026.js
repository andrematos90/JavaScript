/*Escreva um programa que percorra todos os elementos de um array de números inteiros e multiplique cada elemento por 2. Em seguida, exiba o array resultante.

Por exemplo, se o array inicial for [3, 6, 9, 12], o programa deverá exibir [6, 12, 18, 24]. Utilize um loop "for" para percorrer os elementos do array e realize a multiplicação dentro do loop.*/

let = listaNumeros = [1, 8, 7, 9, 12, 48];
let = listaDobrada = []
cont = 0;
for(i=0; i <= listaNumeros.length - 1; i++){
    listaDobrada.push(listaNumeros[i] * 2)
    cont ++
}

console.log(listaDobrada)


/*Primeiro, você declara a variável listaNumeros e atribui a ela um array de números: [1, 8, 7, 9, 12, 48].

Em seguida, você declara a variável listaDobrada como um array vazio, que será preenchido posteriormente com os números dobrados.

A variável cont é inicializada com o valor zero, mas não é utilizada posteriormente.

Em seguida, você inicia um loop "for" com a variável i iniciando em zero e indo até listaNumeros.length - 1, que representa o índice do último elemento do array listaNumeros.

Dentro do loop, você executa o seguinte bloco de código:

listaDobrada.push(listaNumeros[i] * 2): Aqui, você pega o valor atual do elemento do listaNumeros no índice i, multiplica-o por 2 e o adiciona ao final do array listaDobrada usando o método push().

cont++: Essa linha incrementa a variável cont em 1, mas como mencionei anteriormente, não é utilizada posteriormente.

Após o término do loop "for", você imprime a listaDobrada no console usando console.log(listaDobrada)
*/


