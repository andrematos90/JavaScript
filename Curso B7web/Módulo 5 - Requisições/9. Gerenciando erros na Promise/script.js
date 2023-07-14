
//seleciona o botao e adiciona um evento de clicque a ele que chama a função "carregaPost"
document.querySelector("#botao").addEventListener("click", carregaPost)


function carregaPost() {

    // Faz uma solicitação HTTP para 'https://jsonplaceholder.typicode.com/posts'
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((Response) => {
            return Response.json(); // Quando a resposta é recebida com sucesso, converte para JSON
        })
        .then((json) => {
            
            
            alert(`Título do primeiro post: ${json[0].title}`); // exibe o título do primeiro post em um alerta
        })
        .catch((error) => {   // Em caso de erro na requisição, exibe um alerta informando o erro
           console.log(error); //exibi mais informações sobre o erro ocorrido
            alert('Erro na requisição');
        })

    // Exibe um alerta com o texto 'opa clicou'
    alert('opa clicou');
}



/*
A função carregaPost() realiza uma requisição GET para a URL "https://jsonplaceholder.typicode.com/posts" usando o método fetch(). O objetivo é obter uma lista de posts em formato JSON.

O código encadeia várias Promises para lidar com o resultado da requisição.


*/