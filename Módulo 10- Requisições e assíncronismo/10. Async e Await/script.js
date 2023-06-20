async function loadPosts(){  // diz que dento desta função estara sendo usado o await
   document.getElementById("posts").innerHTML = 'carregando...';   // ao clicar no botao aparece o texto carregando


   let req = await fetch('https://jsonplaceholder.typicode.com/posts');   // await faz esperar é uma promisse mas que fica esperando a promisse finalizar para continuar 
   let json = await req.json();
   montarBlog(json);
}



/*  mesma coisa que o codigo assima mas sem o await
 fetch('https://jsonplaceholder.typicode.com/posts')  // faz a requisição
     .then(function(resultado){          
        return resultado.json();  // pega o resultado e transforma em json
     }) 
     .then(function(json){        //pega o resultado do json
      montarBlog(json);
     })          
     .catch(function(error){
        console.log("erro!");
     });     

*/
                                                              
       

function montarBlog(lista) {
   let html = '';

   for(let i in lista) {

      html += '<h3>'+lista[i].title+'</h3>';
      html += lista[i].body+'br/>';
      html += '<hr/>';
   }

   document.getElementById("posts").innerHTML = html;
