/*Você foi designado(a) para criar uma funcionalidade em uma página web que permite alterar a cor de fundo de um elemento específico quando determinados botões são clicados.

Requisitos:

No HTML fornecido, há um parágrafo com o id "target" que serve como o elemento alvo para alteração de estilo.
Existem três botões com os ids "btn1", "btn2" e "btn3".
Quando o "btn1" for clicado, a cor de fundo do parágrafo alvo deve ser alterada para amarelo.
Quando o "btn2" for clicado, a cor de fundo do parágrafo alvo deve ser removida, voltando ao estilo padrão.
Quando o "btn3" for clicado, a cor de fundo do parágrafo alvo deve ser alternada entre amarelo e o estilo padrão, ou seja, se a cor de fundo já estiver amarela, ela deve ser removida, e vice-versa.
A manipulação de estilos deve ser realizada através da seleção e manipulação de elementos do DOM usando JavaScript.*/

// Função para definir a cor amarela em um elemento HTML
function defineAmarelo(){
    // Obtém o elemento HTML com o ID "target"
    let elemento = document.getElementById("target");
    // Adiciona a classe "selected" ao elemento
    elemento.classList.add('selected');
};

// Função para remover a cor amarela de um elemento HTML
function removeAmarelo(){
    // Obtém o elemento HTML com o ID "target"
    let elemento = document.getElementById("target");
    // Remove a classe "selected" do elemento
    elemento.classList.remove('selected');
}

// Função para alternar a cor de fundo de um elemento HTML entre amarelo e a cor padrão
function alternaFundo(){
    // Obtém o elemento HTML com o ID "target"
    let elemento = document.getElementById('target');
    // Alterna a presença da classe "selected" no elemento.
    // Se a classe estiver presente, ela será removida; caso contrário, será adicionada.
    elemento.classList.toggle('selected');
}
