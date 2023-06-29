// mapear o array e fazer uma copia do modelo em html e jogar na tela 

const c = (el)=>document.querySelector(el); // retorna o item que achou, para nao precisar digitar sempre "document.querySelector('.pizza-area  ......'"
const cs =(el)=>document.querySelectorAll(el); // retorna um array com os itens que achou

pizzaJson.map((item, index) => {
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML =`R$ ${item.price.toFixed(2)}`; // adiciona o preço "toFixed para ficar dois numeros depois da virgula"
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name; // adiciona o nome das pizzas
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description; // adiciona a descrição
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');

        c('.pizzaBig img').src = pizzaJson[key].img; // seleciona a imagem no modal
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name; // seleciona o nome da pizza no modal
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description; // seleciona a descrição no modal

        c('.pizzaWindowArea').style.opacity = 0; // seleciona o modal e aplica opaceidade 0
        c('.pizzaWindowArea').style.display = 'flex'; // selecionar o modal e aplica display flex
        setTimeout(() =>{                             // seleciona o modal e aplica opacidade 1 depois de 200 milesimos para criar o efeito lento de abertura
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    });
   

   c('.pizza-area').append( pizzaItem);   // append pega o conteudo que ja tem tem 'pizzaarea' e vai adicionar mais um conteudo
});


// armazena qual pizza esta aberta no modal