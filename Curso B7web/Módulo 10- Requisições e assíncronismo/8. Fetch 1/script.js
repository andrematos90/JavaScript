/*retorna uma promessa, tem dois parametros o primeiro qual é a url que querp fazer a requisição o segundo é opcional
é um objeto, nesse objeto vao as configuração dessa requisição 
por exemplo o metodo "get","post","put","delete"
se nada for colocado no segundo parametro ele vai fazer a requisição "get"
*/

function loadPosts() {

   document.getElementById('posts').innerHTML = 'carregando...';
   
   fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
         return response.json();
      })
      .then(json => {
         document.getElementById('posts').innerHTML = json.length + 'posts';
      })
      .catch(error => {
         console.log("se fudeu")
      })


}