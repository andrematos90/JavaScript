// quando se criar um array junto vem algumas funções que podem ser executadas no proprio arrray

frutas = ['maça', 'uva', 'pera', 'manga'];

frutas.push('limao'); // função push() adiciona um item ao array
frutas.pop(); // função pop() deleta o ultimo item do array
frutas.shift(); // função shift delete o primeiro item do array 
 frutas[0] = 'banana'; // aletera valores especificos dentro do array
frutas.join('') // retorna uma string, pega "maça" e  'uva' coloca um espaço entre cada item do array por exemplo ou seja transforma o array em uma string separando cada item 
console.log(frutas.length); // função length mostra o umero itens do array
console.log(frutas);


frutas[frutas.length - 1] = 'mamão'; // para alterar o ultimo item do array sem saber quando itens existem
                                     // uso frutas.length para saber quando itens existem e diminuo um que é alterado
                                     // ou posso remover o ultimo com pop() e adicionar com push()