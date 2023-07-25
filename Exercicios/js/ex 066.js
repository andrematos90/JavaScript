/* 
Crie uma página HTML simples contendo uma lista não ordenada <ul> com alguns itens <li>. Em seguida, utilize JavaScript para implementar as seguintes tarefas:

Acessar o elemento de lista não ordenada <ul> através do seu ID e armazená-lo em uma variável.

Acessar o primeiro item da lista <li> e armazená-lo em uma variável.

Modificar o conteúdo do primeiro item da lista para "Item 1 modificado" usando JavaScript.

Criar um novo elemento <li> e adicionar um texto qualquer como conteúdo.

Adicionar o novo elemento <li> criado à lista <ul> existente.

Remover o segundo item da lista <li>.

Alterar a cor do texto de todos os itens da lista para vermelho.

Ao clicar em um item da lista, exibir um alert com o texto desse item.*/



//Acessar o elemento de lista não ordenada <ul> através do seu ID e armazená-lo em uma variável.
var lista = document.getElementById("myList");

//Acessar o primeiro item da lista <li> e armazená-lo em uma variável.
var primeiroLi = document.querySelector("li")

//Modificar o conteúdo do primeiro item da lista para "Item 1 modificado" usando JavaScript.
primeiroLi.innerText = 'Item 1 (modificado)'

//Criar um novo elemento <li> e adicionar um texto qualquer como conteúdo.
lista.innerHTML = lista.innerHTML + '<li>Novo Item</li>';


//Remover o segundo item da lista <li>.
lista.children[1].remove();

// Alterar a cor do texto de todos os itens da lista para vermelho.
lista.style.color = '#F00'

//Ao clicar em um item da lista, exibir um alert com o texto desse item.

function clicado() {
    elemento = document.getElementById('myList');

    elemento.addEventListener("click", function(event) {
        // Verificando o elemento de origem (target) do evento de clique
        var elementoClicado = event.target;

        // Manipulando o elemento clicado
       
        alert(elementoClicado.innerText);
    });

}

//chamando a função
clicado();
