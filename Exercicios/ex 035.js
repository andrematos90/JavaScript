/*
Escreva um programa em JavaScript que exiba um alerta quando um dos botões for clicado. O programa deve ter dois botões: "Botão A" e "Botão B". Ao clicar no "Botão A", o alerta deve exibir a mensagem "Você clicou no Botão A". Ao clicar no "Botão B", o alerta deve exibir a mensagem "Você clicou no Botão B".*/

function clicouA(){
    alert('Clicou no A')
}

document.addEventListener('DOMContentLoaded', function(){
    const botoaB = document.getElementById('botaoB');

    function clicouB(){
        alert('Clicou B')
    }

    botoaB.addEventListener("click", clicouB)
});

/*
A função clicouA() é definida. Essa função exibe um alerta com a mensagem "Clicou no A" quando chamada.

O evento DOMContentLoaded é adicionado a document.addEventListener('DOMContentLoaded', function(){ ... }). Esse evento espera o DOM (Modelo de Objeto de Documento) ser completamente carregado antes de executar o código contido dentro dele. Isso garante que o código dentro do evento só seja executado quando o documento HTML tenha sido totalmente analisado e esteja pronto para ser manipulado.

A linha const botoaB = document.getElementById('botaoB'); busca um elemento do DOM com o ID "botaoB" e o atribui à variável botaoB. Essa variável fará referência ao elemento do botão com esse ID, assumindo que ele exista no documento HTML.

A função clicouB() é definida dentro do evento DOMContentLoaded. Essa função exibe um alerta com a mensagem "Clicou B" quando chamada.

botoaB.addEventListener("click", clicouB) adiciona um ouvinte de eventos ao botão referenciado por botaoB. Esse ouvinte aguarda o evento de clique no botão e, quando ocorre, chama a função clicouB(), exibindo um alerta com a mensagem "Clicou B".*/