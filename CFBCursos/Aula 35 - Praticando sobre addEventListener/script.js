let divs = document.querySelectorAll('.exemplo');

//coneverte o HTMLCollection ou nodelist para array
arrayDeDivs = Array.from(divs);


arrayDeDivs.map((elemento) =>{
    elemento.addEventListener("click", (evento)=>{
        const elemento = evento.target
        elemento.classList.add("selecionada");
    })
})


/*let divsd = document.querySelectorAll('.exemplo');: Esta linha de código seleciona todos os elementos do DOM que possuem a classe CSS "exemplo" e armazena-os em uma variável chamada divsd. document.querySelectorAll('.exemplo') retorna um NodeList contendo todos esses elementos.

arrayDeDivs = Array.from(divsd);: Aqui, você converte o NodeList divsd em um array chamado arrayDeDivs usando o método Array.from(). Isso é feito para que você possa usar métodos de array para iterar sobre os elementos e adicionar ouvintes de eventos a eles.

arrayDeDivs.map((elemento) => {...});: Esta linha itera sobre cada elemento no array arrayDeDivs usando o método map(). Para cada elemento, ele executa a função de retorno de chamada especificada dentro das chaves {...}.

elemento.addEventListener("click", (evento) => {...});: Dentro da função de retorno de chamada do map(), você adiciona um ouvinte de evento "click" a cada elemento do array. Isso significa que quando um elemento com a classe "exemplo" for clicado, a função especificada será executada.

const elemento = evento.target;: Dentro da função de tratamento de evento, você obtém o elemento que foi clicado usando evento.target e o armazena em uma variável chamada elemento. Isso permite que você se refira ao elemento clicado dentro da função.

elemento.classList.add("selecionada");: Aqui, você adiciona a classe CSS "selecionada" ao elemento clicado usando elemento.classList.add("selecionada"). Isso altera a classe do elemento, o que pode afetar sua aparência ou comportamento, dependendo de como as regras de estilo CSS para a classe "selecionada" estão definidas.

Em resumo, o código seleciona todos os elementos com a classe "exemplo", adiciona um ouvinte de evento de clique a cada um deles e, quando um elemento é clicado, adiciona a classe "selecionada" a esse elemento. Isso pode ser usado para aplicar estilos ou realizar outras ações específicas quando os elementos são clicados. Certifique-se de que a classe "selecionada" esteja definida em seu CSS para que essa adição de classe tenha algum efeito visível.*/