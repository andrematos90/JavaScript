

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



/*Esse código é uma função assíncrona chamada carregaPosts, que carrega posts de uma API e os exibe em uma área específica do documento HTML.

A função começa selecionando a área onde os posts serão exibidos usando document.querySelector(".posts") e atribui o texto "Carregando..." a essa área usando postArea.innerHTML = 'Carregando...'.

Em seguida, é feita uma solicitação assíncrona usando fetch para obter os dados dos posts de uma URL específica (no caso, 'https://jsonplaceholder.typicode.com/posts'). O operador await é usado para aguardar a conclusão da solicitação e obter a resposta.

Após obter a resposta, ela é convertida para JSON usando response.json() e novamente o operador await é usado para aguardar a conclusão da conversão.

Em seguida, é verificado se o JSON retornado contém algum post. Se o comprimento do JSON (json.length) for maior que zero, significa que há posts para exibir.

Dentro do bloco if, a área de posts é limpa usando postArea.innerHTML = '' e, em seguida, um loop for...in é usado para iterar sobre cada post no JSON. Para cada post, é gerado um HTML formatado com o título e o corpo do post usando template literals e atribuído a postHtml. Em seguida, esse HTML é adicionado à área de posts usando postArea.innerHTML += postHtml.

Se o JSON não contiver nenhum post (ou seja, o comprimento do JSON for zero), a área de posts é atualizada com o texto "Nenhum post para exibir" usando postArea.innerHTML = 'Nenhum post para exibir'.

Por fim, a função carregaPosts é chamada para iniciar o carregamento dos posts.

Em resumo, esse código faz uma solicitação assíncrona para obter posts de uma API e os exibe em uma área específica do documento HTML. Durante o processo, ele exibe uma mensagem de "Carregando..." e trata o caso em que não há posts para exibir.*/

/*passo a passo


Seleciona a área onde os posts serão exibidos no documento 
Define o texto "Carregando..." na área dos posts
Faz uma solicitação assíncrona para obter os dados dos posts da API
Converte a resposta em formato JSON
Verifica se há posts no JSON retornado
Limpa a área dos posts
Itera sobre cada post no JSON
 Gera o HTML formatado para exibir o título e o corpo do post
 Adiciona o HTML do post à área dos posts
 Atualiza a área dos posts com a mensagem "Nenhum post para exibir" caso não haja posts no JSON
 Chama a função para carregar os posts*/