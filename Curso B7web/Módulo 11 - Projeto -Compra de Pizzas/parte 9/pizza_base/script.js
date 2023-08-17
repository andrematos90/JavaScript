let modalQt = 1; // variável que salva a quantidade de pizzas 
let cart = []; // váriavel que vai salvar o que foi selecionado no modal;
modalKey = 0;



const element = (el) => document.querySelector(el);
const qs = (el) => document.querySelectorAll(el);

//Listagem das pizzas
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

        // varável que salva qual pizza foi adicionado ao "carrinho"
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

//Eventos do modal

//função para fechar modal
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


//seleciona o botoao de adicionar o carrionho  e adiciona um evento de clique que chama a função
element('.pizzaInfo--addButton').addEventListener('click', () => {

    //seleciona o elemento  pela classe e  atributo e salva na varíavel "size depois de converter para inteiro"
    let size = parseInt(element('.pizzaInfo--size.selected').getAttribute('data-key'));
    //adicina um objeto ao array "cart"
    cart.push({
        id: pizzaJson[modalKey].id,
        size: size,
        qt: modalQt
    });

    closeModal();
});


