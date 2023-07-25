/*Desenvolva uma função JavaScript que, ao ser executada, faça uma busca em um elemento HTML específico e retorne o conteúdo de texto visível no mesmo, utilizando a propriedade innerText. O exercício consiste em criar uma página HTML com uma estrutura complexa contendo vários elementos aninhados, como divs, parágrafos, spans, etc. A função deve ser capaz de identificar e retornar apenas o texto visível, excluindo qualquer conteúdo de texto oculto por meio de CSS ou manipulação direta do DOM.*/

  // Selecione todos os elementos do documento
  var elementos = document.querySelectorAll('*');

  // Adicione um ouvinte de evento de clique a cada elemento
  elementos.forEach(function(elemento) {
    elemento.addEventListener('click', function() {
      // Remova a classe 'selected' de todos os elementos
      elementos.forEach(function(elemento) {
        elemento.classList.remove('selected');
      });

      // Adicione a classe 'selected' ao elemento clicado
      elemento.classList.add('selected');

      // Salve o elemento clicado em uma variável
      var elementoSelecionado = elemento;

      // Faça algo com o elemento selecionado aqui
      console.log('Elemento selecionado:', elementoSelecionado);
    });
  });