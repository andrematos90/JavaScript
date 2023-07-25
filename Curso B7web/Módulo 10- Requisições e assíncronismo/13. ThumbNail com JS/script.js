
async function mostrar(){
   // Obtém o elemento de input do tipo file com o id "imagem" e seleciona o primeiro arquivo (caso múltiplos arquivos possam ser selecionados)
   let imagem = document.getElementById('imagem').files[0];
 
   // Cria um elemento <img> para exibir a imagem na página
   let img = document.createElement('img');
 
   // Define a propriedade 'src' do elemento <img> como a URL do objeto 'imagem' usando o método 'createObjectURL'
   // O método 'createObjectURL' gera uma URL temporária para o objeto Blob ou File, neste caso, para a imagem selecionada
   img.src = URL.createObjectURL(imagem);
 
   // temos duas opções criar a imagem  ex: inner.HTML = <img />; e depois altero essa imagem
  // ou posso criar a tag da imagem e adiciono
   //Adiciona o elemento <img> à área com o id "area" na página (a imagem será exibida na página)
   document.getElementById('area').appendChild(img);
 }
 
