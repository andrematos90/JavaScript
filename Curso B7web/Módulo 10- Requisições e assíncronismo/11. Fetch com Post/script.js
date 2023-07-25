async function inserirPost(){
   // Define o conteúdo da div com o id "posts" como "carregando....."
   document.getElementById("posts").innerHTML = "carregando.....";
 
   // Faz uma requisição POST para a URL 'http://jsonplaceholder.typicode.com/posts'
   // O corpo da requisição contém um objeto JSON com os campos 'title', 'body', e 'userId'
   // O cabeçalho 'Content-Type' é definido como 'application/json'
   let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
     method: 'POST',  
     body: JSON.stringify({
        title:'Titulo e teste', 
        body: 'Corpo de Teste',
        useId: 4
     }), 
     headers: {   
        'Content-Type': 'application/json'
     }
   });
 
   // Aguarda a resposta da requisição ser resolvida como JSON
   let json = await req.json(); 
 
   // Imprime a resposta JSON no console
   console.log(json);  
 }
