
let quadrado = document.querySelector('.esquerda');
let divs = [...document.querySelectorAll('.exemplo')];


quadrado.addEventListener("click", () =>{
    console.log("clicou");
})


divs.map((el) =>{
    el.addEventListener("click", (evt) =>{
        evt.stopPropagation();
    })
})
    

/*
let quadrado = document.querySelector('.esquerda');: Isso seleciona o elemento com a classe "esquerda" e atribui-o à variável quadrado.

let divs = [...document.querySelectorAll('.exemplo')];: Isso seleciona todos os elementos com a classe "exemplo" e os coloca em uma matriz usando o operador spread ([...]). Esses elementos são então armazenados na variável divs.

quadrado.addEventListener("click", () => { console.log("clicou"); }): Isso adiciona um ouvinte de evento de clique ao elemento quadrado. Quando o elemento quadrado é clicado, ele registra a mensagem "clicou" no console.

divs.map((el) => { el.addEventListener("click", (evt) => { evt.stopPropagation(); }) }): Isso itera sobre cada elemento na matriz divs e adiciona um ouvinte de evento de clique a cada um deles. No entanto, o evt.stopPropagation(); dentro do manipulador de eventos garante que a propagação do evento de clique seja interrompida quando um elemento com a classe "exemplo" é clicado. Isso significa que o evento de clique não será propagado para elementos superiores na hierarquia DOM, incluindo o elemento com a classe "esquerda".

Portanto, se um elemento com a classe "exemplo" for clicado, ele não acionará o manipulador de clique no elemento quadrado. Isso é exatamente o comportamento que stopPropagation proporciona - ele impede que eventos se propaguem para elementos pai, permitindo que você controle a propagação de eventos em elementos DOM aninhados.*/
    



