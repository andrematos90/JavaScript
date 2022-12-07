function trocar() { 
   if(document.querySelector('button').classList.contains('preto')) {
    document.querySelector('button').classList.remove('preto');
    document.querySelector('button').classList.add('verde');
   }else {
    document.querySelector('button').classList.remove('verde');
    document.querySelector('button').classList.add('preto');

   }
}


//document.querySelector('button')<< esta selecionando o elemeto da tag button.classList.contains('preto') 
 //contains é uma funçao que verifica se tem essa classe nesse elemento especifico retornando true ou false
 // ou seja ele vai verificar se na lista de classe de button se tem a classe preto 
 //se tiver ele remove ela e add a classe verde