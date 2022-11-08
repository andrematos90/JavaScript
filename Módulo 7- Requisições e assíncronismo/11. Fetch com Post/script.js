async function inserirPost(){
   document.getElementById("posts").innerHTML = "carregando.....";

   let req = await fetch('http://jsonplaceholder.typicode.com/posts',{
      method: 'POST',  // tipo da requisição
      body: JSON.stringify({
         title:'Titulo e teste',   // esses sao os dados que quero enviar, envio para o stringfy, que transforma o objeto em string com o objeto dentro
         body: 'Corpo de Teste',
         useId: 4
      }), 
      headers: {    // esse é o cabeçalho
         'Content-Type': 'application/json'
      }
   });

   let json = await req.json();  // recebo o resultado

   console.log(json);  // mostro no console
}
