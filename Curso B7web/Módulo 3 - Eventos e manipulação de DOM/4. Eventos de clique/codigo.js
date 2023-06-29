function clicounoBotao(){
    alert('Clicou no 1')
    
}

document.addEventListener('DOMContentLoaded', function() {
    const botao2 = document.getElementById('botao2');
  
    function clicounobotao2(){
        alert('clicou no 2')
    }
  
    botao2.addEventListener("click", clicounobotao2 );
  });
  

  
/*
Define a função clicounoBotao().
Dentro da função clicounoBotao(), exibe um alerta com a mensagem "Clicou no 1".
Registra um ouvinte de evento DOMContentLoaded para o documento HTML.
Quando o evento DOMContentLoaded é disparado (ou seja, quando o documento HTML é completamente carregado), executa uma função de retorno.
Dentro da função de retorno do evento DOMContentLoaded, obtém uma referência ao elemento de botão com o id "botao2" usando document.getElementById('botao2') e atribui-o à variável botao2.
Define a função clicounobotao2().
Dentro da função clicounobotao2(), exibe um alerta com a mensagem "clicou no 2".
Adiciona um ouvinte de evento de clique (click) ao botão botao2.
Quando o botão botao2 é clicado, chama a função clicounobotao2().
Resumindo, o código define duas funções, uma para lidar com o clique no botão "1" e outra para lidar com o clique no botão "2". A função para o botão "1" é chamada imediatamente, enquanto a função para o botão "2" é adicionada como um ouvinte de evento ao botão após o carregamento do documento HTML.*/