function altera(){
    // Seleciona o elemento existente
var elementoExistente = document.getElementById("meuElemento");

// Cria o novo elemento
var novoElemento = document.createElement("div");
novoElemento.textContent = "Novo conteúdo";

// Insere o novo elemento antes do elemento existente
elementoExistente.parentNode.insertBefore(novoElemento, elementoExistente);

}