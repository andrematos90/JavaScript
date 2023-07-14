// Adiciona um ouvinte de evento ao elemento com o ID 'botao' para o evento de clique,
// chamando a função 'carregaPost' quando o clique ocorrer.
document.querySelector("#botao").addEventListener("click", carregaPost);

// Adiciona um ouvinte de evento ao elemento com o ID 'botao-envia-post' para o evento de clique,
// chamando a função 'inserePost' quando o clique ocorrer.
document.querySelector("#botao-envia-post").addEventListener("click", inserePost);

// Função assíncrona que é chamada quando o botão 'botao' é clicado.
async function carregaPost() {
    // Aguarda a resposta da requisição fetch assíncrona para 'https://jsonplaceholder.typicode.com/posts'
    let Response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // Aguarda a conversão da resposta em formato JSON
    let json = await Response.json();
    // Exibe o título do primeiro post em um alerta
    alert(`Título do primeiro post: ${json[0].title}`);
    // Exibe um alerta com o texto 'opa clicou'
    alert('opa clicou');
}

// Função que é chamada quando o botão 'botao-envia-post' é clicado.
function inserePost(){
    // Faz uma solicitação HTTP POST para 'https://jsonplaceholder.typicode.com/posts'
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: 'Corpo de teste',
            userId: 2
        })
    })
    .then((Response) => {
        return Response.json();
    })
    .then((json) => {
        // Quando a resposta é recebida com sucesso, converte para JSON
        // e exibe a resposta no console
        console.log(json);
    });
}

