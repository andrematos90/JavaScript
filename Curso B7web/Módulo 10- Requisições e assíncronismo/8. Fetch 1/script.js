/*retorna uma promessa, tem dois parametros o primeiro qual é a url que querp fazer a requisição o segundo é opcional
é um objeto, nesse objeto vao as configuração dessa requisição 
por exemplo o metodo "get","post","put","delete"
se nada for colocado no segundo parametro ele vai fazer a requisição "get"
*/

/*

function loadPosts(){
    document.getElementById("posts").innerHTML = 'carregando .....';
    fetch('https://jsonplaceholder.typicode.com/posts')   
     .then(function(resultado){
        return resultado.json();
       
     })   
     .then(function(json){
        document.getElementById("posts").innerHTML = json.length+' posts';
     })        
     .catch(function(error){
        console.log("erro!");
     });
                                                                    
}  


*/

const userName = 'andrematos90';

fetch(`https://api.github.com/users/${userName}`, {


   method: 'GET',
   headers: {
      Accpet: 'application/vnd.github.v3+json',
   },
})
.then((response) => {
   console.log(typeof response)
   console.log(response)
   return response.json()
})
.then((data) => {
   console.log(`Usuário: ${data}`)
})
cath((erro) => {
   console.log(`ERRO! ${erro}`)
})