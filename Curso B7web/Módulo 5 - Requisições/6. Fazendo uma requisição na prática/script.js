
 // Função executada quando o botão é clicado
  
function clicou() {
   
    /*
    metodo fetch serve para fazer requisições, a url é passada como  parametro,
    e quando receber a resposta executa (then), a conversão para json*/
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // Primeiro .then() trata a resposta da solicitação
        return response.json(); // Converte a resposta em formato JSON
      })
      .then((json) => {
        // Segundo .then() trata o resultado da conversão em JSON
        console.log(json); // Exibe os dados no console
      });
  }
  
  // Associa o evento de clique do botão à função clicou
  document.querySelector("#botao").addEventListener("click", clicou);
  


/*A função clicou é definida, e dentro dela, uma solicitação HTTP é feita usando o método fetch. A URL https://jsonplaceholder.typicode.com/posts é passada como argumento para recuperar dados de uma API.

Após chamar o método fetch, é encadeado um .then() para tratar a resposta da solicitação. O .then() é um método do objeto Promise, que permite executar uma ação quando a promessa é resolvida.

Dentro do primeiro .then(), uma função de callback é passada para processar a resposta. Essa função recebe um parâmetro response que contém a resposta da solicitação HTTP.

Dentro dessa função de callback, é chamado o método json() da resposta para extrair os dados no formato JSON. Esse método retorna outra promessa.

Em seguida, é encadeado outro .then() para tratar o resultado da conversão em JSON. Dentro desse .then(), é definida uma nova função de callback que recebe um parâmetro json que contém os dados no formato JSON.

Dentro da função de callback do segundo .then(), é chamado o console.log(json) para exibir os dados obtidos a partir da API no console do navegador.

Fora da função clicou, o método addEventListener é usado para associar o evento de clique do elemento com o seletor #botao à função clicou. Isso significa que quando o botão é clicado, a função clicou será executada.

Em resumo, o código realiza uma solicitação HTTP usando fetch para obter dados de uma API. Em seguida, ele exibe esses dados no console quando o botão é clicado. O uso de callbacks com .then() permite que o código seja executado de forma assíncrona, lidando com a resposta da solicitação HTTP e o processamento dos dados retornados pela API.



Portanto, a sequência de execução é:

Fazer a solicitação HTTP usando fetch.
Tratar a resposta da solicitação no primeiro then e converter para JSON.
Aguardar a conclusão da conversão para JSON (promessa resolvida).
Executar o segundo then e passar o resultado (dados no formato JSON) para a função de callback.
Executar o console.log(json) para exibir os dados no console.
Essa estrutura de then encadeados permite lidar com o assincronismo da solicitação HTTP e da conversão para JSON, garantindo que o console.log seja chamado apenas quando os dados estiverem prontos para serem exibidos.*/