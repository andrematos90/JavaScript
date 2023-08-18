let modalQt = 1; // variável que salva a quantidade de pizzas 
let cart = []; // váriavel que vai salvar o que foi selecionado no modal;
modalKey = 0;


const element = (el) => document.querySelector(el);
const qs = (el) => document.querySelectorAll(el);

pizzaJson.map((item, index) => {

    let pizzaItem = element('.models .pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `RS ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('a').addEventListener("click", (e) => {
        e.preventDefault();


        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt = 1;
        modalKey = key;

        element('.pizzaBig img').src = pizzaJson[key].img;
        element('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        element('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        element('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        element('.pizzaInfo--size.selected').classList.remove('selected');
        qs('.pizzaInfo--size').forEach((size, indexSize) => {

            if (indexSize == 2) {
                size.classList.add('selected');
            }

            size.querySelector('span').innerHTML = pizzaJson[key].sizes[indexSize];
        });

        element('.pizzaInfo--qt').innerHTML = modalQt;
        element('.pizzaWindowArea').style.opacity = 0;;
        element('.pizzaWindowArea').style.display = 'flex';

        setTimeout(() => {
            element('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    });

    element('.pizza-area').append(pizzaItem);
});


function closeModal() {
    element('.pizzaWindowArea').style.opacity = 0;;
    setTimeout(() => {
        element('.pizzaWindowArea').style.display = 'none';
    }, 500);
}

qs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal);
});

element('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++;
    element('.pizzaInfo--qt').innerHTML = modalQt;
});


element('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (modalQt > 1) {
        modalQt--;
        element('.pizzaInfo--qt').innerHTML = modalQt;
    }
});

qs('.pizzaInfo--size').forEach((size) => {


    size.addEventListener('click', () => {
        element('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    })
});


element('.pizzaInfo--addButton').addEventListener('click', () => {

 
    let size = parseInt(element('.pizzaInfo--size.selected').getAttribute('data-key'));
    //variável indentifier recebee a junção do id da pizza mais o tamanho 
    let identifier = pizzaJson[modalKey].id + '@' + size;

    //varre o array e retorna o indice do primeiro elemento se for igual ao identifier
    let key = cart.findIndex((item) => item.identifier == identifier);

    /*verfifica se já há no carrinho um item com o mesmo identificador, se sim ele não adiciona o item no carrinho, mas sim adiciona somente mais um a quantidade
    */
    if(key > -1){
        cart[key].qt += modalQt;
    }
    //se não houver o item adiciona tudo ao carrinho
    else{
        cart.push({
            identifier,
            id: pizzaJson[modalKey].id,
            size: size,
            qt: modalQt
        });
    }
  

    closeModal();
});


/*
element('.pizzaInfo--addButton').addEventListener('click', () => {...});
Isso está adicionando um ouvinte de eventos de clique ao elemento com a classe CSS pizzaInfo--addButton. Quando esse botão for clicado, a função anônima (uma função sem nome) dentro das chaves será executada.

let size = parseInt(element('.pizzaInfo--size.selected').getAttribute('data-key'));
Aqui, o código está recuperando o tamanho selecionado da pizza. Ele procura um elemento com a classe CSS pizzaInfo--size.selected, obtém o valor do atributo data-key desse elemento (presumivelmente contém informações sobre o tamanho da pizza), e em seguida converte esse valor em um número inteiro usando parseInt.

let identifier = pizzaJson[modalKey].id + '@' + size;
Um identificador único está sendo criado para a pizza selecionada e seu tamanho. O valor é uma combinação do id da pizza, acessado a partir do objeto pizzaJson usando a chave modalKey, e o tamanho da pizza, separados por um "@".

let key = cart.findIndex((item) => item.identifier == identifier);
Isso procura no array cart (presumivelmente o carrinho de compras) por um item que tenha um identificador correspondente ao valor calculado anteriormente. A função findIndex verifica se há um item no array que atenda à condição especificada pela função de callback, que verifica se o atributo identifier do item é igual ao identificador calculado.

if (key > -1) { ... } else { ... }
Isso verifica se um item com o identificador já existe no carrinho. Se key for maior que -1, significa que o item já está no carrinho e a quantidade modalQt (presumivelmente alguma quantidade selecionada pelo usuário) será adicionada à quantidade existente.

cart.push({ ... });
Se o item não existir no carrinho, um novo objeto será criado e adicionado ao array cart. Esse objeto contém informações sobre a pizza selecionada, incluindo seu identificador, id, tamanho e quantidade.

closeModal();
Esta função é chamada para fechar algum tipo de modal ou janela após o processo de adição da pizza ao carrinho ter sido concluído.

Em resumo, este código lida com a adição de pizzas ao carrinho de compras. Ele verifica se a pizza selecionada já existe no carrinho com base no tamanho e identificador únicos, e atualiza a quantidade correspondente ou adiciona uma nova entrada ao carrinho, dependendo do resultado dessa verificação. Após isso, ele fecha uma janela modal que provavelmente foi usada para selecionar as opções da pizza.
---------------------------------------------------------------------------
explicação: 
para quando por exemplo for adicionada duas pizzas pequenas de calabresa e depois foi adicionada mais uma do mesmo tipo e tamanho  apenas um objeto deve ser criado dentro do array, mais de um objetos só quando os tamanhos e pizzas forem diferentes  para isso algumas verificações dever ser feitas

primeiro: a mesma pizza do mesmo tamanho devem estar juntas
criar um identificador que junta o id da pizza o tamanho dela 

let identifier = pizzaJson[modalKey].id + '@' + size;

procura no array "cart" o indice do primeiro elemento
e o adiciona na variáevl "key" se for igual ao  identifier,  se não achar a variável recebe o valor -1
let key = cart.findIndex((item) => item.identifier == identifier);

verfifica se já há no carrinh um item com o mesmo identificador, se sim  (key maior do que -1) ele não adiciona o item no carrinho, mas sim adiciona somente mais um a quantidade
    
    if(key > -1){
        cart[key].qt += modalQt;
    }
    //se não houver o item adiciona tudo ao carrinho
    else{
        cart.push({
            identifier,
            id: pizzaJson[modalKey].id,
            size: size,
            qt: modalQt
        });
    }

*/