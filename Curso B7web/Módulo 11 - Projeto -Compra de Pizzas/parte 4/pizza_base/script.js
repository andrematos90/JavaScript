// Função para selecionar um único elemento do DOM pelo seletor CSS
const element = (el) => document.querySelector(el);

// Função para selecionar vários elementos do DOM pelo seletor CSS
const qs = (el) => document.querySelectorAll(el);

// Mapeando o array de informações de pizzas (pizzaJson)
pizzaJson.map((item, index) => {
    
    // Clonando o modelo de exibição de pizza para preenchimento
    let pizzaItem = element('.models .pizza-item').cloneNode(true);

    /* acessa "pizzaItem" que é a div clonada e dentro dela acessa ('.pizza-item--img img') e dentro dela
    acessa o atributo src e define seu valor com "item.img" no json que é um endereço de imagem*/
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;

     /* acessa "pizzaItem" que é a div clonada e dentro dela acessa (''.pizza-item--price') e dentro dela
    utilizando o innerHTML seta com o preço do item*/
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `RS ${item.price.toFixed(2)}`;

    /* acessa "pizzaItem" que é a div clonada e dentro dela acessa ('.pizza-item--name') que é a classe onde 
    ficará o elemento com o  nome da pizza no HTML e dentro dela utilizando o innerHTML seta com o nome do item 
    que esta no json*/
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;

    // Definindo a descrição da pizza
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    // Seleciona o link 'a' dentro do elemento pizzaItem e adiciona um ouvinte de evento de clique
    pizzaItem.querySelector('a').addEventListener("click", (e) => {
    // Prevenir o comportamento padrão do link, que é redirecionar a página
    e.preventDefault();

    // Seleciona a área da janela de detalhes da pizza
    const pizzaWindowArea = element('.pizzaWindowArea');

    // Define a opacidade da área da janela de detalhes como 0, tornando-a invisível
    pizzaWindowArea.style.opacity = 0;

    // Define o estilo de exibição da área como 'flex', tornando-a visível
    pizzaWindowArea.style.display = 'flex';

    // Após um atraso de 200ms, define a opacidade como 1, criando uma transição suave
    setTimeout(() => {
        pizzaWindowArea.style.opacity = 1;
    }, 200);
});


    // Anexando o item de pizza preenchido à área de exibição de pizzas
    element('.pizza-area').append(pizzaItem);


});


/*
Em resumo, esse trecho de código é responsável por exibir suavemente a janela de detalhes da pizza quando o link "a" é clicado, controlando a opacidade da área de detalhes para criar uma animação suave de exibição.


Seleção do Link a e Adição de um Evento de Clique:

pizzaItem.querySelector('a').addEventListener("click", (e) => {
    // ...
});

Nesta parte, o código seleciona o primeiro elemento a (link) dentro do elemento pizzaItem (provavelmente um item individual de pizza) e adiciona um ouvinte de evento de clique a ele. Isso significa que quando esse link é clicado, a função anônima passada como segundo argumento será executada.




Prevenção do Comportamento Padrão do Link:

e.preventDefault();

Dentro da função de clique, a primeira coisa que é feita é chamar o método preventDefault() no objeto do evento (e). Isso evita o comportamento padrão de seguir o link, o que é importante para controlar a interação sem sair da página.



Manipulação da Janela de Detalhes da Pizza:

element('.pizzaWindowArea').style.opacity = 0;
element('.pizzaWindowArea').style.display = 'flex';
setTimeout(() => {
    element('.pizzaWindowArea').style.opacity = 1;
}, 200);


Aqui, a área da janela de detalhes da pizza é manipulada.

element('.pizzaWindowArea').style.opacity = 0;: Define a opacidade da área da janela de detalhes para 0, tornando-a invisível.
element('.pizzaWindowArea').style.display = 'flex';: Define o estilo de exibição da área da janela de detalhes para 'flex', tornando-a visível. Isso é feito mesmo que a opacidade seja 0, para que a área seja preparada para aparecer.
setTimeout(() => { element('.pizzaWindowArea').style.opacity = 1; }, 200);: Usando setTimeout, após um atraso de 200 milissegundos, a opacidade da área da janela de detalhes é definida como 1. Isso cria uma transição suave, fazendo a área de detalhes da pizza aparecer gradualmente após a janela ser exibida.

*/