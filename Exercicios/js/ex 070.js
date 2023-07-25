/* crie uma função que ao clicar no botao a senha é mostrada ou ocultada*/

function mostraSenha() {
    // Obtém o elemento do input de senha pelo ID "inputPassword"
    let elementoInput = document.getElementById("inputPassword");
    // Obtém o elemento do botão pelo ID "botao"
    let botao = document.getElementById('botao');
  
    // Verifica o tipo atual do atributo "type" do input
    if (elementoInput.getAttribute('type') == 'text') {
      // Se o tipo for 'text', altera para 'password'
      elementoInput.setAttribute('type', 'password');
      // Atualiza o texto do botão para 'Mostrar senha'
      botao.innerText = 'Mostrar senha';
    } else {
      // Se o tipo for 'password', altera para 'text'
      elementoInput.setAttribute('type', 'text');
      // Atualiza o texto do botão para 'Ocultar senha'
      botao.innerText = 'Ocultar senha';
    }
  }
  
  // Obtém o elemento do botão pelo ID "botao"
  let botao = document.getElementById('botao');
  // Adiciona um ouvinte de evento ao botão para o evento "click"
  botao.addEventListener('click', mostraSenha);
  