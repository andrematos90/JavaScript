/*Exercício: Manipulando Elementos de um Array com o Loop "for...of" em JavaScript

Neste exercício, você irá praticar o uso do loop for...of em JavaScript para percorrer e manipular os elementos de um array. O objetivo é realizar uma série de tarefas utilizando esse tipo de loop.

Tarefas:

Crie um array chamado nomes contendo pelo menos 5 nomes de pessoas.
Utilizando o loop for...of, itere sobre cada nome no array e exiba cada nome no console.
Para cada nome, verifique se ele possui mais de 5 caracteres. Se tiver, exiba a mensagem "Nome longo: {nome}" no console; caso contrário, exiba a mensagem "Nome curto: {nome}".
Crie um segundo array vazio chamado nomesLongos.
Novamente utilizando o loop for...of, itere sobre cada nome no array original e, se o nome tiver mais de 5 caracteres, adicione-o ao array nomesLongos.
Ao final do loop, exiba o array nomesLongos no console.
Certifique-se de que cada etapa está funcionando corretamente e que as mensagens são exibidas conforme as instruções. Utilize o loop for...of para percorrer os arrays e realizar as tarefas mencionadas.

Lembre-se de que o loop for...of é uma maneira conveniente de percorrer os elementos de um array, mas ele não permite acessar o índice dos elementos. Em vez disso, ele fornece diretamente os valores dos elementos.

*/

nomes = ['André', 'Oilson', 'Eliane', 'Elisa'];
for (n of nomes){
    
    if(n.length > 5){
        console.log(`nome longo: ${n}`);
    }else{
        console.log(`nome curto ${n}`);
    }
}

nomesLongos = [];

for(n of nomes){
    if(n.length > 5){
        nomesLongos.push(n);
    }
}

console.log("Array de nomes longos: ")
for (n of nomesLongos){
    console.log(n);
}
