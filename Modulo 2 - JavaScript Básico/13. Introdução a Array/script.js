/* Array é uma "lista"
*/

colors = [ 'blue', 'green', 'yellow', 'black'];


console.log(colors[0]); // quando quero acessar apenas um item [0], acessando o primeiro por exemplo


// armazendando numeros
idade = [ 10, 20 , 30];



//armazenando mais de um tipo de dado
let lista = ['carro', 20, true];


// armazenando um array dentro de um array


//ex 1:
let nomes = [ 'andre', 'maressa', 'davi'];

let listaa = [nomes, 10, true];

console.log(listaa);

//ex 2:

let listaaa= ['blla', ['xx', 'yy']];

console.log(listaaa[1][0]); // pegando o valor 'xx'