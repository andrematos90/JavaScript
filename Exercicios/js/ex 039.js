/*Crie uma página HTML que contenha um botão e uma lista vazia. Ao clicar no botão, o usuário deve poder digitar um texto em um campo de entrada. Esse texto deve ser adicionado como um novo item na lista, exibindo-o na página. O processo de adição de itens deve ocorrer sempre que o botão for clicado.

Dessa forma, o exercício requer a manipulação de elementos no DOM para capturar o texto digitado pelo usuário, criar elementos de lista dinamicamente e exibi-los na página conforme o botão é clicado.*/


function adicionaItem(){
    // Obtém a referência para o elemento <ul> no documento HTML
    const Item = document.querySelector('ul');

    // Cria um novo elemento <li> para adicionar à lista
    let newItem = document.createElement('li');

    // Pede ao usuário para digitar o texto do item e armazena-o em newItem.innerHTML
    newItem.innerHTML = prompt('Digite o Item: ');

    // Adiciona o novo item à lista, colocando-o como filho do elemento <ul>
    Item.append(newItem);
}

/*
Declaração da função adicionaItem().

Obtém a referência para o elemento <ul> do documento HTML utilizando o método document.querySelector(). O seletor 'ul' seleciona o primeiro elemento <ul> encontrado no documento.

Cria um novo elemento <li> para representar o novo item que será adicionado à lista.

Pede ao usuário que digite o texto do item por meio da função prompt() e armazena o valor digitado em newItem.innerHTML. O innerHTML é uma propriedade que permite definir o conteúdo HTML interno de um elemento.

Adiciona o novo item à lista, inserindo-o como um filho do elemento <ul> existente, utilizando o método append().

Em resumo, essa função cria um novo item de lista representado por um elemento <li>, obtém o texto desse item através de um prompt ao usuário e adiciona esse item à lista existente no documento HTML.*/
