function muda(){
    botao = document.querySelector('button')
    if(botao.classList.contains('verde')){
        botao.classList.replace('verde', 'azul');
    }
    else{
        botao.classList.replace('azul', 'verde')
    }
   
}