/*Exercício sobre o Operador typeof em JavaScript

Você foi designado para criar um programa JavaScript que examine o tipo de várias variáveis e exiba o resultado usando o operador typeof. O programa deve realizar as seguintes tarefas:

Declare três variáveis chamadas var1, var2 e var3, cada uma com um tipo de dado diferente (por exemplo, número, string e booleano). Atribua valores apropriados a essas variáveis.

Use o operador typeof para determinar o tipo de dado de cada uma das variáveis e atribua esses resultados a três variáveis diferentes chamadas type1, type2 e type3.

Exiba no console mensagens que descrevam o tipo de dado de cada variável. Por exemplo, se var1 for um número, a mensagem pode ser: "A variável var1 é do tipo número."

Certifique-se de que o programa funciona corretamente, mesmo se você alterar os valores das variáveis var1, var2 e `var3.
*/

let  var1= var2 = var3 = '';

var1 = 10;
var2 = "hello world!";
var3 = false;


type1 = typeof var1;
type2 = typeof var2;
type3 = typeof var3;

console.log(`Variable with value: ${var1} - Type: ${type1}`);
console.log(`Variable with value: ${var2} - Type: ${type2}`);
console.log(`Variable with value: ${var3} - Type: ${type3}`)