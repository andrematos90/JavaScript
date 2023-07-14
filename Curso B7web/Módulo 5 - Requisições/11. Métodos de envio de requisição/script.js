// Adiciona um ouvinte de evento ao elemento com o ID 'botao' para o evento de clique,
// chamando a função 'carregaPost' quando o clique ocorrer.
document.querySelector("#botao").addEventListener("click", carregaPost);

// Adiciona um ouvinte de evento ao elemento com o ID 'botao-envia-post' para o evento de clique,
// chamando a função 'inserePost' quando o clique ocorrer.
document.querySelector("#botao-envia-post").addEventListener("click", inserePost);

// Função que é chamada quando o botão 'botao' é clicado.
function carregaPost() {

    // Faz uma solicitação HTTP para 'https://jsonplaceholder.typicode.com/posts'
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((Response) => {
            // Exibe o status da resposta no console
            console.log(`status: ${Response.status}`);
            return Response.json();
        })
        .then((json) => {
            // Quando a resposta é recebida com sucesso, converte para JSON
            // e exibe o título do primeiro post em um alerta
            alert(`Título do primeiro post: ${json[0].title}`);
        })
        .catch(() => {
            // Em caso de erro na requisição, exibe um alerta informando o erro
            alert('Erro na requisição');
        })

    // Exibe um alerta com o texto 'opa clicou'
    alert('opa clicou');
}

// Função que é chamada quando o botão 'botao-envia-post' é clicado.
function inserePost(){
    // Faz uma solicitação HTTP POST para 'https://jsonplaceholder.typicode.com/posts'
    fetch('https://jsonplaceholder.typicode.com/posts', {
        
        method: 'POST',   //define o metodo por qual a requisição sera enviada

        // define o cabeçalho da requisição
        headers: {   
            'Content-Type': 'application/json'
        },
          //define o corpo da requisição
        body: JSON.stringify({ 
            title: 'Titulo de teste',
            body: 'Corpo de teste',
            userId: 2
        })
    })
    .then((Response) => {
        return Response.json();  // Quando a resposta é recebida com sucesso, converte para JSON
    })
    .then((json) => {
       
        // e exibe a resposta no console
        console.log(json);
    })
}

