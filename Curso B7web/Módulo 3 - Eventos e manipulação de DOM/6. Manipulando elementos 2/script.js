function clicou(){
    //seleciona o elemento pai
    let teste = document.querySelector('#teste');
    //seleciona o primeiro item filho
    const ul = teste.querySelector('ul');
    //append() adicina ao item
    ul.children[0].append(" alterado") 

}


/*
usando o innertHTML o conteudo é trocado por um novo igual o antigo mais o que foi adicionado
e quando se usa o append é apenas adicionado, append só funciona pra texto,
para outros tipos se usa o appendChild, primeiro criando na memória depois adicionando com o appendChild


append(), appendChild() e prepend(). Esses métodos são usados para adicionar elementos ou conteúdo a um elemento existente no DOM, mas apresentam algumas diferenças sutis em como eles funcionam.


append():

O método append() é usado para adicionar um ou mais elementos ou conteúdo ao final de um elemento pai.
Ele permite que você adicione vários elementos ou conteúdos em uma única chamada.
O método append() pode receber tanto elementos do DOM quanto strings de texto.
Se você passar um objeto NodeList ou um array de elementos, eles serão adicionados como filhos separados.
Exemplo:

const pai = document.getElementById('meu-pai');
const filho1 = document.createElement('div');
const filho2 = document.createElement('p');
const texto = document.createTextNode('Conteúdo');

pai.append(filho1, filho2, texto);



appendChild():

O método appendChild() é usado para adicionar um único elemento filho ao final de um elemento pai.
Ele aceita apenas elementos do DOM como argumento.
Se o elemento já existir em outro local no DOM, ele será removido de sua posição atual antes de ser adicionado como filho.
Exemplo:

const pai = document.getElementById('meu-pai');
const filho = document.createElement('div');

pai.appendChild(filho);

prepend():

O método prepend() é usado para adicionar um ou mais elementos ou conteúdo ao início de um elemento pai.
Ele funciona de maneira semelhante ao append(), mas adiciona os elementos ou conteúdo no início do elemento pai.
Exemplo:

const pai = document.getElementById('meu-pai');
const filho1 = document.createElement('div');
const filho2 = document.createElement('p');
const texto = document.createTextNode('Conteúdo');

pai.prepend(filho1, filho2, texto);

Em resumo, o append() adiciona elementos ou conteúdo ao final do elemento pai, o appendChild() adiciona um único elemento filho ao final do elemento pai, e o prepend() adiciona elementos ou conteúdo ao início do elemento pai. Esses métodos oferecem flexibilidade na manipulação do DOM e permitem adicionar elementos de maneira fácil e eficiente.






 PRIMEIRA FORMA  ADICONA O ELMENTO E MAIS A COPIA DO ANTIGO  (EXIGE MAIS PROCESSAMENTO)

function clicou() {
    const teste = document.querySelector('#teste);   seleciona o elemento 
    const ul = teste.quereSelector('ul'):            seleciona o elmento filho

    ul.innerHTML += "<li> Item adicionador</li>;"     adiciona ao elemento
}

SEGUNDA FORMA  APENAS ADICIONA O NOVO ELMENTO 

function clicou(){
    const test = document.querySelector('#teste);
    cons ul = teste.querySelector('#teste);

    let nerwLI = documente.creatElement("li");  cria o novo elemento, "li" sera o elemento no caso
    nerwLI.innnerText = "Item adicionado";      adiciona o conteudo ao novo elemento

    ul.appendChild(nerwLI);   é elemento criado é enviado ao elemento pai
}






















*/