
function mostraSenha(){
  let inputdeSenha = document.querySelector('#senha');
  let botao = document.querySelector('#botaoLogin')
  if(inputdeSenha.getAttribute('type') == 'text'){
       inputdeSenha.setAttribute('type', 'password');
       botao.innerText = 'Mostrar Senha'
       
  }
  else{
    inputdeSenha.setAttribute('type', 'text');
    botao.innerText = 'Ocultar Senha'
  }
}