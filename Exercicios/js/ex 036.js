/*
Você foi contratado para desenvolver uma funcionalidade de contador de cliques para um site. A cada vez que o usuário clicar em um botão específico, o contador deve ser incrementado em 1 e exibido na tela. Para isso, você deve utilizar eventos de clique em JavaScript.

Instruções:

Crie um arquivo HTML contendo um botão com o ID "botaoContador" e um elemento de texto com o ID "contador".
Defina uma variável chamada cliques com o valor inicial de 0.
Implemente uma função em JavaScript chamada atualizarContador(), que atualizará o valor exibido no elemento de texto com o valor da variável cliques.
Adicione um evento de clique ao botão com o ID "botaoContador".
Na função de evento, incrementa a variável cliques em 1 e chame a função atualizarContador().
Teste o contador clicando no botão e verificando se o valor exibido é incrementado a cada clique.
Observações:

Utilize o método getElementById() para obter referências aos elementos HTML com os IDs "botaoContador" e "contador".
Certifique-se de que o evento de clique está sendo adicionado corretamente ao botão.
A função atualizarContador() deve atualizar o texto do elemento de texto com o ID "contador" para refletir o valor atual da variável cliques.
Utilize apenas HTML, CSS e JavaScript para implementar a solução.*/


let cliques = 1

function atualizarContador(){
    let elemento = document.getElementById("contador") //seleciona o elemento e salva na variavel
    console.log(elemento)
    elemento.textContent = cliques++  //alterar o conteudo do elemento com a variavel clique que é incrementada a cada clique

}
/*
let elemento = document.getElementById("contador"): Essa linha busca o elemento do DOM com o ID "contador" e o armazena na variável elemento.

console.log(elemento): Essa linha exibe o elemento no console do navegador. Isso é útil para verificar se o elemento está sendo corretamente obtido.

elemento.textContent = cliques++: Nesta linha, a propriedade textContent do elemento é atualizada com o valor de cliques. O operador ++ é usado para incrementar o valor de cliques em 1 após atribuí-lo ao textContent. Isso garante que o valor exibido seja atualizado a cada vez que a função atualizarContador() é chamada.
Portanto, quando a função atualizarContador() é chamada, o valor atual de cliques é exibido no elemento com o ID "contador" e, em seguida, é incrementado em 1 para o próximo clique.*/