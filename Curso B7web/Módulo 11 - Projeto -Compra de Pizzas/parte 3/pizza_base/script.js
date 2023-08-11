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

    // Anexando o item de pizza preenchido à área de exibição de pizzas
    element('.pizza-area').append(pizzaItem);
});


/*

O código que você compartilhou parece ser uma parte de um projeto relacionado a exibição de informações de pizzas a partir de um arquivo JSON em uma página da web. Vou explicar o que cada parte do código faz:

const element = (el) => document.querySelector(el);
Essa função é definida para selecionar um único elemento do DOM (Document Object Model) usando um seletor CSS. Ela recebe um argumento el que é o seletor CSS e usa o document.querySelector para encontrar o elemento correspondente. Isso ajuda a simplificar o código, permitindo que você escreva element('.alguma-classe') em vez de document.querySelector('.alguma-classe').

const qs = (el) => document.querySelectorAll(el);
Similar à função anterior, mas essa função seleciona vários elementos correspondentes ao seletor CSS usando document.querySelectorAll. Também ajuda a simplificar a seleção de vários elementos usando qs('.alguma-classe').

pizzaJson.map((item, index) => {...}
Aqui, o código está mapeando (percorrendo) um array chamado pizzaJson, que aparentemente contém informações sobre diferentes tipos de pizzas. Para cada item no array, a função dentro do .map() é executada.

let pizzaItem = element('.models .pizza-item').cloneNode(true);
Esta linha está clonando um elemento HTML que provavelmente representa um modelo de exibição de uma pizza. O elemento é clonado para criar uma cópia que pode ser preenchida com as informações da pizza atual.

pizzaItem.querySelector('.pizza-item--img img').src = item.img;
Essa linha define o atributo src da imagem da pizza dentro do elemento clonado com o valor da propriedade img do objeto item. Isso atualiza a imagem da pizza no modelo clonado.

pizzaItem.querySelector('.pizza-item--price').innerHTML = RS ${item.price.toFixed(2)}
Esta linha define o conteúdo HTML do elemento que exibe o preço da pizza dentro do elemento clonado. O preço é formatado com duas casas decimais usando toFixed(2) e precedido por "RS".

pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
Similar à linha anterior, essa linha define o nome da pizza no elemento clonado.

pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
Essa linha define a descrição da pizza no elemento clonado.

element('.pizza-area').append(pizzaItem);
Finalmente, o elemento clonado preenchido com informações da pizza é anexado (adicionado) ao elemento com a classe .pizza-area. Isso provavelmente é onde todas as pizzas estão sendo exibidas na página.

O código globalmente está lendo informações sobre pizzas de um array JSON chamado pizzaJson, preenchendo um modelo de exibição de pizza com essas informações e adicionando o modelo preenchido à área de exibição de pizzas na página. Isso parece ser parte de um processo de renderização de uma lista de pizzas em uma interface web.

*/