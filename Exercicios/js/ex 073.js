// Seleciona o elemento HTML com o ID "conselho" e o armazena na variável "conselho"
let conselho = document.getElementById('conselho');

// Seleciona o elemento HTML com o ID "botao" e o armazena na variável "botao"
let botao = document.querySelector("#botao");

// Adiciona um ouvinte de evento ao botão. Quando o botão é clicado, a função "geraConselho" será chamada.
botao.addEventListener("click", geraConselho);

// Função que gera o conselho, fazendo uma requisição para a API Advice Slip.
function geraConselho() {
    // Faz uma requisição para a API Advice Slip usando o método "fetch".
    // A URL da API é 'https://api.adviceslip.com/advice'.
    fetch('https://api.adviceslip.com/advice')
    .then(resposta => {
        // Verifica se a resposta não foi bem-sucedida (por exemplo, um erro 404).
        // Se não for bem-sucedida, lança um erro.
        if (!resposta.ok) {
            throw new Error('Erro na requisição!');
        }
        // Retorna o resultado da resposta como um objeto JSON.
        return resposta.json();
    })
    .then(data => {
        // Quando a resposta é bem-sucedida, exibe os dados (JSON) no console.
        console.log(data);
        // Chama a função "mostraConselho" passando o objeto JSON retornado pela API como argumento.
        mostraConselho(data);
    })
    .catch(error => {
        // Se ocorrer algum erro durante o processo de requisição, exibe o erro no console.
        console.log(error);
    });
}

// Função que exibe o conselho na página.
function mostraConselho(data) {
    // Seleciona o elemento HTML com o ID "conselho" e o armazena na variável "div".
    let div = document.getElementById('conselho');
    // Cria um novo elemento parágrafo (<p>) para exibir o conselho.
    let conselho = document.createElement('p');
    // Limpa o conteúdo anterior do elemento "div".
    div.textContent = '';
    // Define o texto do parágrafo como o conselho obtido da API.
    conselho.textContent = data.slip.advice;
    // Adiciona o novo parágrafo como filho do elemento "div", exibindo o conselho na página.
    div.appendChild(conselho);
}
