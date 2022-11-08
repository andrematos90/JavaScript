async function mostrar(){
   let reader = new FileReader();
   let imagem = document.getElementById('imagem').files[0];

   reader.onloadend = function(){
      let img = document.createElement('img');
      img.src = reader.result;
      img.width = 200;
      
      document.getElementById ('area').appendChild(img); // appendchild permite selecionar varias imagens
   }

   reader.readAsDataURL(imagem)  // usa o FileReader para ler a imagem, ao ler a imagem executa um callback que configuro
}


