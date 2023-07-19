function loadPosts(){
   document.getElementById("posts").innerHTML = 'carregando...';   // ao clicar no botao aparece o texto carregando

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
                                                                    
}        

function montarBlog(lista) {
   let html = '';

   for(let i in lista) {

      html += '<h3>'+lista[i].title+'</h3>';
      html += lista[i].body+'br/>';
      html += '<hr/>';
   }

   document.getElementById("posts").innerHTML = html;
}