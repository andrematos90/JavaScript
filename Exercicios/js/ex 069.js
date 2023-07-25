/*
Desenvolva uma função JavaScript que, ao ser executada, modifique os atributos de um elemento específico no DOM. O exercício consiste em criar uma página HTML com um elemento de imagem <img> e um botão. A função deve ser capaz de alterar o atributo src da imagem quando o botão for clicado.

Além disso, adicione uma funcionalidade extra: a função também deve ser capaz de alternar entre duas imagens diferentes ao ser chamada novamente. Ou seja, se a imagem atual tiver o src igual a "imagem1.jpg", ao chamar a função novamente, o src deve ser alterado para "imagem2.jpg". A próxima vez que a função for chamada, o src deve voltar para "imagem1.jpg" e assim por diante.*/


let botao = document.getElementById('botao');
botao.addEventListener('click', function() {
  // Obtém o elemento da imagem pelo ID "imagem"
  let elementoImg = document.getElementById("imagem");
  // Obtém o valor atual do atributo "src" da imagem
  let valorAtributo = elementoImg.getAttribute('src');

  // Verifica se o valor atual do atributo "src" é igual a "google-fotos.jpg"
  if (valorAtributo == 'google-fotos.jpg') {
    // Atualiza o atributo "src" para "estudando-programacao.png"
    elementoImg.setAttribute('src', "estudando-programacao.png");
  } else {
    // Caso contrário, atualiza o atributo "src" para "google-fotos.jpg"
    elementoImg.setAttribute('src', 'google-fotos.jpg');
  }
});
