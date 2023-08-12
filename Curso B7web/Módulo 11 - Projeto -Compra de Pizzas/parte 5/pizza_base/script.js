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
        
        // Preenche o modal com as informações da pizza clicada
        element('.pizzaBig img').src = pizzaJson[key].img;
        element('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        element('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;

        // Exibe o modal com uma transição suave de opacidade
        const pizzaWindowArea = element('.pizzaWindowArea');
        pizzaWindowArea.style.opacity = 0;
        pizzaWindowArea.style.display = 'flex';
        
        setTimeout(() => {
            pizzaWindowArea.style.opacity = 1;
        }, 200);
    });

    // Adiciona a pizza clonada à área de exibição de pizzas
    element('.pizza-area').append(pizzaItem);
});


/*

Atribuição do atributo data-key: A linha pizzaItem.setAttribute('data-key', index); atribui ao elemento clonado o atributo data-key com o valor index, onde index é o índice atual do loop. Isso é feito para associar cada pizza ao seu índice, o que será útil para identificar qual pizza foi clicada posteriormente, podendo preencher o modal com as informações da pizza clicada.

Manipulação do modal: Quando o link "Saiba Mais" é clicado, o código dentro do evento de clique é executado. Ele obtém o índice da pizza clicada usando e.target.closest('.pizza-item').getAttribute('data-key'), onde e.target se refere ao elemento clicado. O índice é então usado para acessar os dados da pizza no pizzaJson e preencher o modal com as informações corretas.




                                        função setAttribute

A função setAttribute em JavaScript é usada para definir ou modificar o valor de um atributo em um elemento HTML. Ela permite que você altere dinamicamente os atributos de elementos HTML em uma página da web por meio do código JavaScript. A sintaxe básica da função setAttribute é a seguinte:

elemento.setAttribute(nomeDoAtributo, valorDoAtributo);


Aqui está o que cada parte da sintaxe significa:

elemento: Isso é uma referência ao elemento HTML ao qual você deseja adicionar ou modificar o atributo.
nomeDoAtributo: É uma string que representa o nome do atributo que você deseja definir ou modificar.
valorDoAtributo: É uma string que representa o valor que você deseja definir para o atributo.

                        

                                         função closest

A função closest é um método disponível em elementos HTML no JavaScript que permite procurar o ancestral mais próximo que corresponda a um seletor específico. Ela é útil quando você deseja encontrar um elemento superior na hierarquia do DOM que atenda a determinadas condições de seleção.

A sintaxe básica da função closest é a seguinte:

elemento.closest(seletor);


Aqui está o que cada parte da sintaxe significa:

elemento: Isso é uma referência ao elemento HTML a partir do qual você deseja iniciar a busca pelo ancestral mais próximo.
seletor: É uma string que representa o seletor CSS que você deseja usar para encontrar o ancestral correspondente.
A função closest começa a busca pelo próprio elemento e percorre a árvore do DOM em direção ao ancestral mais alto (elementos pai, avô, bisavô, etc.). Quando encontra um elemento que corresponde ao seletor especificado, ela retorna esse elemento. Se nenhum ancestral corresponder ao seletor, a função retorna null.

A função closest é especialmente útil quando você tem eventos em elementos internos (como botões) e deseja interagir com elementos pai ou ancestrais específicos em resposta a esses eventos. Ela ajuda a evitar a necessidade de percorrer manualmente a árvore do DOM para encontrar o elemento desejado.
*/