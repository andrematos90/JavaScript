/*Neste exercício, você deve escrever o código JavaScript para realizar as seguintes tarefas:

Selecione o elemento <h1> usando o método getElementById e atribua-o a uma variável chamada "titulo".
Mude o texto do elemento <h1> para "Exemplo de Seleção de Elementos no DOM (modificado)".
Selecione o elemento <p> usando o método querySelector e atribua-o a uma variável chamada "paragrafo".
Adicione a classe "destaque" ao elemento <p>.
Selecione todos os elementos <li> usando o método querySelectorAll e atribua-os a uma variável chamada "itens".
Itere sobre a lista de elementos "itens" e adicione a classe "destaque" a cada um deles.
Lembre-se de adicionar o código JavaScript entre as tags <script></script> no local indicado. Após completar as tarefas, você poderá verificar se os elementos foram selecionados e modificados corretamente no DOM.*/

function alteraElemento(){
    const titulo = document.getElementById('titulo'); //seleciona o elemento
    titulo.textContent = 'Exemplo de Seleção de Elementos no DOM (modificado)' //aterar o conteudo

    const paragrafo = document.querySelector('p'); //seleciona o elemento
    paragrafo.classList.add('destaque'); // adiciona uma classe ao elemento selecionado
    
    // itera  e adicioaa a classee "destaque" a cada item selecionado
    const itens = document.querySelectorAll('li');
    for(let i= 0; i <itens.length; i++){
        itens[i].classList.add('destaque');
        
    }
}

/*
A função alteraElemento() é definida.
A linha const titulo = document.getElementById('titulo'); seleciona o elemento com o ID "titulo" no documento HTML e o armazena na variável titulo.
A linha titulo.textContent = 'Exemplo de Seleção de Elementos no DOM (modificado)' altera o conteúdo de texto do elemento titulo para "Exemplo de Seleção de Elementos no DOM (modificado)".
A linha const paragrafo = document.querySelector('p'); seleciona o primeiro elemento <p> no documento HTML e o armazena na variável paragrafo.
A linha paragrafo.classList.add('destaque'); adiciona a classe CSS "destaque" ao elemento paragrafo.
A linha const itens = document.querySelectorAll('li'); seleciona todos os elementos <li> no documento HTML e os armazena em uma lista na variável itens.
O laço for começa na linha for(let i= 0; i <itens.length; i++){ e percorre cada elemento na lista itens.
Dentro do laço for, a linha itens[i].classList.add('destaque'); adiciona a classe CSS "destaque" a cada elemento da lista itens.
A função alteraElemento() foi executada e realizou as modificações nos elementos do documento HTML.*/
    

    