let modalQt = 1; // variável que salva a quantidade de pizzas 


// Função de atalho para selecionar um único elemento do DOM
const element = (el) => document.querySelector(el);

// Função de atalho para selecionar vários elementos do DOM
const qs = (el) => document.querySelectorAll(el);

// Itera sobre o array pizzaJson para criar os elementos de pizza na página
pizzaJson.map((item, index) => {

    // Clona o modelo de pizza a partir do HTML
    let pizzaItem = element('.models .pizza-item').cloneNode(true);

    /* atribui o elemento 'data-key' com o valor "index" para cada pizza, para saber qual pizza aplicar ao modal*/
    pizzaItem.setAttribute('data-key', index); 

    // Preenche a imagem, preço, nome e descrição da pizza clonada
    pizzaItem.querySelector('.pizza-item--img img').src = item.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `RS ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    // Adiciona um evento de clique ao link "Saiba Mais" da pizza
    pizzaItem.querySelector('a').addEventListener("click", (e) => {
        e.preventDefault();

        // Obtém o índice da pizza a partir do atributo 'data-key'
        let key = e.target.closest('.pizza-item').getAttribute('data-key');

        modalQt =1; // sempre que abrir o modal a quantidade setada será "1"
        
        // Preenche o modal com as informações da pizza clicada
        element('.pizzaBig img').src = pizzaJson[key].img;
        element('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        element('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;

         // Atualiza o elemento com a classe '.pizzaInfo--actualPrice' com o preço da pizza formatado em reais.
        element('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

       // Remove a classe 'selected' de qualquer elemento com a classe '.pizzaInfo--size.selected'.
        element('.pizzaInfo--size.selected').classList.remove('selected');

        // Itera sobre todos os elementos com a classe '.pizzaInfo--size'.
        qs('.pizzaInfo--size').forEach((size, indexSize) =>{
            // Quando indexSize for igual a 2, adiciona a classe 'selected' ao elemento atual.
            if(indexSize == 2){
                size.classList.add('selected');
            }
              // Atualiza o conteúdo do elemento <span> dentro de cada tamanho com o tamanho da pizza correspondente.
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[indexSize];
        });

        element('.pizzaInfo--qt').innerHTML = modalQt;

        // Exibe o modal com uma transição suave de opacidade
        element('.pizzaWindowArea').style.opacity = 0;;
        element('.pizzaWindowArea').style.display = 'flex';
        
        setTimeout(() => {
            element('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    });

    // Adiciona a pizza clonada à área de exibição de pizzas
    element('.pizza-area').append(pizzaItem);
});


/*

para preencher a area que mostra o tamanho da pizza

seleciona todos os elementos com a a classe pizzaInfo--size percorrendo todos os elementos e para 
cada um deles selecionando e colocando na tag span o tamanho da pizza que esta no json

qs('.pizzaInfo--size').forEach((size, indexSize) =>{
            
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[indexSize];
        });

para descelecionar o tamanho da pizza para quando ao fechar o modal e quando abrir novamente 
nenhuma estar selecionada 

element('.pizzaInfo--size.selected').classList.remove('selected');

para o tamanho "grande" ficar selecionado 

 qs('.pizzaInfo--size').forEach((size, indexSize) =>{
            if(indexSize == 2){
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[indexSize];
        });





*/