/* 
Escreva uma função chamada dobrarValores que recebe um array de números como parâmetro e retorna um novo array com cada valor dobrado.

Instruções:

Crie uma função chamada dobrarValores que recebe um parâmetro numeros.
Utilize o método map para iterar sobre o array numeros e dobrar cada valor.
Retorne o novo array contendo os valores dobrados.*/

const numbers = [1, 2, 3, 4, 4];
const dobrarValores  = numbers.map((num) => num * 2)
console.log(dobrarValores)

/*
 utilizamos o método map no array numbers. O método map itera sobre cada elemento do array e aplica uma transformação a cada um deles. Neste caso, estamos dobrando cada valor (num * 2).

A função de callback (num) => num * 2 é uma função anônima que recebe o parâmetro num representando cada elemento do array. Ela multiplica o valor de num por 2 para dobrá-lo. O resultado da multiplicação é adicionado a um novo array.

O map retorna um novo array com os valores resultantes das transformações.*/