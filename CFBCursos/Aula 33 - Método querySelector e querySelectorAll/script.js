

//seleciona e imprime o primeiro elemento que encontrar com a classe '.tresprimeiras'
let primeiroElemento = document.querySelector('.tresprimeiras');
console.log(`primeiro elemento: ${primeiroElemento.innerHTML}`)


//seleciona todos os elementos e itera sobre eles
let todosOsElementosAll = [...document.querySelectorAll('.tresprimeiras')];

todosOsElementosAll.map((el)=>{
    console.log(el.innerHTML);
})


//seleciona todas as tags p que sao filhas de uma  div
let ultimas = [...document.querySelectorAll('div > p')];

ultimas.map((elemento) => {
    console.log(elemento)
})




/*
Claro, vou explicar o que cada parte do código faz:

Selecionando e imprimindo o primeiro elemento com a classe '.tresprimeiras':


let primeiroElemento = document.querySelector('.tresprimeiras');
console.log(`primeiro elemento: ${primeiroElemento.innerHTML}`);
document.querySelector('.tresprimeiras') seleciona o primeiro elemento encontrado no documento com a classe '.tresprimeiras'.
console.log(primeiro elemento: ${primeiroElemento.innerHTML}); imprime o conteúdo HTML do primeiro elemento encontrado no console.
Selecionando todos os elementos com a classe '.tresprimeiras' e iterando sobre eles:


let todosOsElementosAll = [...document.querySelectorAll('.tresprimeiras')];

todosOsElementosAll.map((el)=>{
    console.log(el.innerHTML);
})
document.querySelectorAll('.tresprimeiras') seleciona todos os elementos encontrados no documento com a classe '.tresprimeiras'.
[...document.querySelectorAll('.tresprimeiras')] converte a lista de elementos retornados em um array.
Em seguida, você usa map para iterar sobre todos os elementos no array e console.log(el.innerHTML); imprime o conteúdo HTML de cada um deles no console.
Selecionando todas as tags 'p' que são filhas de uma 'div':


let ultimas = [...document.querySelectorAll('div > p')];

ultimas.map((elemento) => {
    console.log(elemento)
})
document.querySelectorAll('div > p') seleciona todas as tags 'p' que são filhas diretas de uma 'div'.
[...document.querySelectorAll('div > p')] converte a lista de elementos retornados em um array.
Em seguida, você usa map para iterar sobre todos os elementos no array e console.log(elemento) imprime cada um deles no console.

Em resumo, esse código demonstra como selecionar elementos HTML usando diferentes métodos (document.querySelector e document.querySelectorAll) e como iterar sobre os elementos e imprimir seu conteúdo no console.*/







