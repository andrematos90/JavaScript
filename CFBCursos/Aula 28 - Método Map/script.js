// Definindo um array chamado 'cursos' contendo diferentes cursos.
const cursos = ['HTML', 'CSS', 'JavaScript', 'C#', 'React'];

// Utilizando o método 'map()' para criar um novo array 'c', onde cada elemento é copiado do array original 'cursos'.
let novoArray = cursos.map((elmentodoArray, indices) => {
    return elmentodoArray;
});

// Imprimindo o novo array 'c' no console.
console.log(novoArray);

/*

Cria um array chamado cursos contendo cinco strings representando nomes de cursos.

Utiliza o método map() no array cursos para criar um novo array chamado "novoArray". O método map() percorre cada elemento do array original e executa uma função de callback para cada elemento. No entanto, no seu código, a função de callback é simples e não faz alterações nos elementos, apenas retorna o elemento original.

A função de callback (elmentodoArray, indice) => { return elmentodoArray; } recebe dois parâmetros: elmentodoArray (o elemento atual) e indice (o índice do elemento). A função simplesmente retorna o próprio elemento elmentodoArray.

O novo array "novoArray" resultante conterá os mesmos elementos do array original "cursos", uma vez que a função de callback não realiza transformações nos elementos.

Finalmente, o conteúdo do novo array  é impresso no console usando console.log(novoArray).*/