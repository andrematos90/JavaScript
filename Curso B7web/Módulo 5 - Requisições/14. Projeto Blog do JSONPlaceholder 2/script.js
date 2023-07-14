

async function carregaPosts(){
    let postArea = document.querySelector(".posts"); // Seleciona a área onde os posts serão exibidos no documento HTML
    postArea.innerHTML = 'Carregando...'; // Define o texto "Carregando..." na área dos posts

    let response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Faz uma solicitação assíncrona para obter os dados dos posts da API
    let json = await response.json(); // Converte a resposta em formato JSON

    if (json.length > 0) { // Verifica se há posts no JSON retornado
        postArea.innerHTML = ''; // Limpa a área dos posts

        for (let i in json) { // Itera sobre cada post no JSON
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}<hr/></div>`; // Gera o HTML formatado para exibir o título e o corpo do post
            postArea.innerHTML += postHtml; // Adiciona o HTML do post à área dos posts
        }
    }
    else{
        postArea.innerHTML = 'Nenhum post para exibir'; // Atualiza a área dos posts com a mensagem "Nenhum post para exibir" caso não haja posts no JSON
    }
}

carregaPosts(); // Chama a função para carregar os posts

async function addNewPost(title, body) {
    // Faz uma requisição POST para o endpoint 'https://jsonplaceholder.typicode.com/posts'
    // para adicionar um novo post no servidor
    await fetch('https://jsonplaceholder.typicode.com/posts'),
    {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json' // Define o cabeçalho Content-Type como JSON
      },
      body: JSON.stringify({
        title : title,   // Título do post
        body: body,      // Corpo do post
        userId: 2        // ID do usuário associado ao post
      })
    };
    
    // Limpa os campos de entrada de texto após a adição do post
    title = document.querySelector('#titleField').value = '';
    body  = document.querySelector('#bodyField').value = '';
  
    carregaPosts(); // Carrega os posts atualizados
  }
  
  // Adiciona um evento de clique ao elemento com o id 'insertButton'
  document.querySelector('#insertButton').addEventListener("click", () => {
    let title = document.querySelector('#titleField').value;
    let body  = document.querySelector('#bodyField').value;
  
    if(title && body){
      // Chama a função addNewPost se os campos 'title' e 'body' estiverem preenchidos
      addNewPost(title, body);
    }else {
      // Exibe um alerta se algum dos campos estiver vazio
      alert('Preencha todos os campos!');
    }
  });
  