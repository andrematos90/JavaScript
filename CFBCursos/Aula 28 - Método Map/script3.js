// Seleciona todos os elementos <div> no documento e armazena em uma variável chamada 'element'.
const element = document.getElementsByTagName("div");

// Utiliza o método 'map()' em uma coleção (HTMLCollection).
// A função de callback extrai o conteúdo interno (innerHTML) de cada elemento <div>.
const val = Array.prototype.map.call(element, ({ innerHTML }) => innerHTML);

// Imprime o array 'val', que contém os valores de 'innerHTML' dos elementos <div>.
console.log(val);


/*const element = document.getElementsByTagName("div");: Isso seleciona todos os elementos <div> no documento e armazena-os em uma coleção (HTMLCollection) chamada element.

const val = Array.prototype.map.call(element, ({ innerHTML }) => innerHTML);: O método map() é chamado na coleção element, utilizando o call() para aplicar o método map() do protótipo de Array à coleção. A função de callback utilizada no map() extrai o conteúdo interno (innerHTML) de cada elemento <div> e armazena-o no array val.

console.log(val);: Imprime o array val no console, que agora contém os valores de innerHTML dos elementos <div>.

Este código é uma maneira eficaz de extrair o conteúdo interno (innerHTML) de cada elemento <div> e armazená-lo em um array. É uma alternativa ao uso de loops explícitos, como for ou forEach, para iterar sobre os elementos. O uso do método map() nesse contexto é uma ótima maneira de transformar e coletar dados de elementos HTML em uma estrutura de array.*/