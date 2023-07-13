document.querySelector("#botao").addEventListener("click", carregaPost)


function carregaPost() {
    //parte assicrona da função
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((Response) => {
            return Response.json();
        })
        .then((json) => {
            alert(`titulo do primero post : ${json[0].title}`)
        });

    //parte sincrona
    alert('opa clicou');
}


/*
No código fornecido, a parte síncrona é a primeira linha:

document.querySelector("#botao").addEventListener("click", carregaPost);

Essa linha adiciona um evento de clique ao elemento com o seletor "#botao" e associa a função carregaPost a esse evento. Essa operação é síncrona, pois é executada imediatamente quando o código é lido.

A parte assíncrona do código é a função carregaPost() e todo o seu conteúdo a partir da linha seguinte:

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((Response) => {
        return Response.json();
    })
    .then((json) => {
        alert(`titulo do primero post : ${json[0].title}`)
    });

alert('opa clicou');


Essa função realiza uma requisição assíncrona usando fetch() para obter dados de um servidor. O código dentro dos métodos then() é executado de forma assíncrona, ou seja, quando a resposta da requisição estiver disponível.

Dentro do primeiro método then(), a resposta da requisição é convertida em formato JSON usando o método json(). Em seguida, o segundo método then() é usado para acessar os dados convertidos e exibir um alerta com o título do primeiro post.

Após a chamada do fetch(), temos a linha alert('opa clicou');, que também é uma operação síncrona e é executada imediatamente após a chamada do fetch(). Portanto, esse alerta será exibido antes de a resposta da requisição estar disponível.

Em resumo, a parte síncrona do código é a adição do evento de clique, enquanto a parte assíncrona é a função carregaPost() que realiza a requisição assíncrona e manipula a resposta usando Promises.