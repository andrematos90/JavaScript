function clicou(){
    // Obtém a referência para o elemento input
    const input = document.querySelector('input');

    // Obtém a referência para o elemento de classe "botao"
    const botao = document.querySelector('.botao');

    // Verifica se o atributo 'type' do elemento input é 'text'
    if (input.getAttribute('type') === 'text'){
        // Se for 'text', altera o tipo para 'password'
        input.setAttribute('type', 'password');

        // Altera o texto do elemento botao para "Mostrar senha"
        botao.innerText = "Mostrar senha";
    }
    else{
        // Caso contrário, o tipo é diferente de 'text', então altera para 'text'
        input.setAttribute('type', 'text');

        // Altera o texto do elemento botao para "Ocultar senha"
        botao.innerText = "Ocultar senha";
    }
}