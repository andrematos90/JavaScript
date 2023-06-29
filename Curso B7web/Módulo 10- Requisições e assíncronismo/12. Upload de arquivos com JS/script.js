async function enviar(){

   // pega o arquivo selecionado
   let arquivo = document.getElementById('arquivo').files[0]; 

   //para fazer o envio de arquivos tem que ser usado a classse formdata onde se adiciona os dados que quero 
   let body = new FormData();
   body.append('title', 'bla bla bla ');
   body.append('arquivo', arquivo);

   // para fazer o upload do arquivo é dado um fetch onde sao passados como parametro a url e as propriedades
   let req = await fetch ('https://www.meusite.com.br/upload', {
      method: 'POST',
      body: body,
      headers: {
         'Content-Type': 'multipart/form-data' // como se esta fazendo o envio de arquivos preciso modificar meu content-type para multipart/form-data
      }
   });
}