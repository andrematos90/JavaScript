// Seleciona todos os elementos <div> no documento e armazena em uma variável chamada 'element'.
let elements = document.getElementsByTagName("div");

// Converte a coleção de elementos HTML (HTML Collection) em um array utilizando o operador spread (...).
 elements = [...elements];

// Utiliza o método 'map()' no array 'elements' para iterar sobre cada elemento <div>.
elements.map((e, i) => {
    // Modifica o conteúdo interno (HTML) do elemento <div> atual.
    e.innerHTML = "curso javascript";
});


/*let elements = document.getElementsByTagName("div");: Isso seleciona todos os elementos <div> no documento HTML e armazena-os em uma coleção.

let elements = [...elements];: O operador spread (...) é usado para converter a coleção de elementos HTML em um array chamado el.

elements.map((e, i) => {...});: Utiliza o método map() no array el para iterar sobre cada elemento <div>. Para cada elemento, a função de callback é chamada, que recebe dois parâmetros: e (o elemento atual) e i (o índice do elemento).

e.innerHTML = "curso javascript";: Modifica o conteúdo interno (HTML) do elemento <div> atual para "curso javascript".

Agora, cada elemento <div> no array el terá seu conteúdo interno alterado para "curso javascript". É importante observar que, ao utilizar map() neste caso, você está percorrendo todos os elementos, mas não está criando um novo array com os resultados, o que pode não ser a abordagem mais eficiente, visto que map() é frequentemente usado para transformações e criação de novos arrays. Para alterar diretamente os elementos, um loop forEach() seria mais apropriado.*/


