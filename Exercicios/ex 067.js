/*
Escreva uma função JavaScript que, ao ser executada, altere o conteúdo de um elemento específico no DOM usando a propriedade innerHTML. O exercício consiste em criar uma página HTML com um botão e um parágrafo vazio, e ao clicar no botão, o parágrafo deve ser preenchido com um texto definido. Certifique-se de usar a função document.getElementById() para obter o elemento do parágrafo pelo seu ID e a propriedade innerHTML para modificar seu conteúdo.*/

function altera() {
    // Obtém o elemento do parágrafo pelo ID "paragrafo"
    const p = document.getElementById("paragrafo");
    // Atualiza o conteúdo do parágrafo com um texto específico
    p.innerHTML = "conteudo adicionado ao parágrafo";
    
}

// Obtém o elemento do botão pelo ID "botao"
const botao = document.getElementById('botao');
// Adiciona um ouvinte de evento ao botão para o evento "click"
// Quando o botão é clicado, a função altera() será chamada
botao.addEventListener("click", altera);
