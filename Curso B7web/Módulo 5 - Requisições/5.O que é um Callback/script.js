function clickCallback(){
    alert('Ciclou');
}

document.querySelector("#botao")
.addEventListener("click", clickCallback);


/*Nesse exemplo, o elemento com o ID botao usando document.querySelector("#botao") e, em seguida, chama o método addEventListener nesse elemento.

O método addEventListener espera dois argumentos: o tipo de evento que você deseja ouvir (neste caso, "click") e a função de callback que será executada quando o evento ocorrer (aqui, clickCallback).

Portanto, quando o botão for clicado, o evento de clique será acionado, e a função clickCallback será chamada, exibindo o alerta com a mensagem "Clicou".*/