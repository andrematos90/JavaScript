const main  = document.querySelector("main");
const divs = ["Primeiradiv", "SegundaDiv", "TerceiraDiv", "QuartaDiv", "QuintaDiv", "SextaDiv", "SétimaDiv"]

let divContainer =  document.createElement('div');
divContainer.setAttribute("class", "container");
main.appendChild(divContainer);



divs.map((elemento, index)=>{

    let div = document.createElement('div');
    div.setAttribute("class", "divPai");
    divContainer.appendChild(div)

    let divConteudo = document.createElement("div");
    divConteudo.setAttribute("class", "divs")
    divConteudo.innerHTML = elemento
    div.appendChild(divConteudo);

    let btn_lixeira = document.createElement('img');
    btn_lixeira.setAttribute("src", "lixeira.png");
    btn_lixeira.setAttribute("class", "btn_lixeiras");
    btn_lixeira.setAttribute("title", "Ao clicar a Div será excluida!") ;
    btn_lixeira.addEventListener("click", ()=>{
        div.remove()
    })
    div.appendChild(btn_lixeira)
    
})


/*
const main = document.querySelector("main");: Aqui, o código seleciona o elemento HTML <main> usando document.querySelector. Isso pressupõe que existe um elemento <main> na página HTML onde o script será executado.

const divs = [...]: É definido um array chamado divs que contém uma lista de nomes de divs.

let divContainer = document.createElement('div');: É criado um elemento <div> chamado divContainer. Este elemento servirá como um contêiner principal para as divs criadas dinamicamente.

divContainer.setAttribute("class", "container");: Um atributo de classe "container" é adicionado ao elemento divContainer.

main.appendChild(divContainer);: O elemento divContainer é anexado como filho do elemento <main> da página HTML.

divs.map((elemento, index) => { ... });: O método map é usado para percorrer o array divs. Para cada elemento no array, a função de callback é executada.

Dentro da função de callback, são criados elementos <div> e configurados com classes e conteúdo de texto:

let div = document.createElement('div');: Cria um elemento <div> chamado div.

div.setAttribute("class", "divPai");: Adiciona a classe "divPai" ao elemento div.

let divConteudo = document.createElement("div");: Cria um elemento <div> chamado divConteudo.

divConteudo.setAttribute("class", "divs"): Adiciona a classe "divs" ao elemento divConteudo.

divConteudo.innerHTML = elemento;: Define o conteúdo interno do elemento divConteudo com o nome da div do array.

Em seguida, é criado um elemento de imagem <img> que representa um botão de lixeira:

let btn_lixeira = document.createElement('img');: Cria um elemento <img> chamado btn_lixeira.
btn_lixeira.setAttribute("src", "lixeira.png");: Define o atributo "src" da imagem para o caminho da imagem da lixeira.
btn_lixeira.setAttribute("class", "btn_lixeiras");: Adiciona a classe "btn_lixeiras" ao elemento btn_lixeira.
btn_lixeira.setAttribute("title", "Ao clicar a Div será excluída!");: Define o atributo "title" da imagem para exibir uma dica de ferramenta quando o mouse passa sobre ela.
É adicionado um ouvinte de eventos ao botão de lixeira para que, quando clicado, a div pai seja removida:

btn_lixeira.addEventListener("click", (evt) => { div.remove(); }): Quando o botão de lixeira é clicado, a função de callback é executada, que remove a div pai (div) do DOM.
Finalmente, a div pai (com o nome e o botão de lixeira) é anexada ao divContainer, que é o contêiner principal criado anteriormente.

Este código JavaScript cria divs dinamicamente com nomes e botões de lixeira associados a cada uma delas, permitindo que o usuário exclua uma div clicando no botão de lixeira correspondente. Essas divs são adicionadas ao elemento <main> da página HTML.*/








