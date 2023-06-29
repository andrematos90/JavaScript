function clicou(){
    const teste = document.querySelector('#teste'); // Seleciona o elemento com o ID "teste" e armazena na variável "teste"
    const ul = teste.querySelector('ul'); // Seleciona o elemento <ul> dentro de "teste" e armazena na variável "ul"

    let newUL = document.createElement('ul'); // Cria um novo elemento <ul> e armazena na variável "newUL"

    for (let i = 0; i < 5; i++){
        let newLI = document.createElement('li'); // Cria um novo elemento <li> e armazena na variável "newLI"
        newLI.innerHTML = "item add" + (i + 1); // Define o conteúdo HTML do novo elemento <li>
        newUL.append(newLI); // Adiciona o novo elemento <li> como filho do novo elemento <ul>
    }

    ul.after(newUL); // Insere o novo elemento <ul> após o elemento "ul" selecionado anteriormente dentro de "teste"
}


/*
const teste = document.querySelector('#teste');: Aqui, estamos usando a função document.querySelector para selecionar o elemento HTML com o ID "teste" e armazenando-o na constante teste.

const ul = teste.querySelector('ul');: Aqui, estamos usando o método querySelector novamente, desta vez no elemento teste, para selecionar o primeiro elemento "ul" encontrado dentro do elemento com o ID "teste". O resultado é armazenado na constante ul.

let newUL = document.createElement('ul');: Aqui, estamos criando um novo elemento "ul" usando o método document.createElement e atribuindo-o à variável newUL. Este novo elemento "ul" será usado para armazenar os novos itens da lista.

for (let i = 0; i < 5; i++) { ... }: Este é um loop "for" que irá executar o código dentro do bloco de código para cada valor de i de 0 a 4. Neste caso, o loop será executado 5 vezes.

let newLI = document.createElement('li');: Dentro do loop, estamos criando um novo elemento "li" usando o método document.createElement e atribuindo-o à variável newLI. Este elemento "li" será usado para criar um novo item da lista.

newLI.innerHTML = "item add" + (i + 1);: Estamos definindo o conteúdo do novo elemento "li" usando a propriedade innerHTML. Neste caso, o conteúdo será definido como uma string "item add" concatenada com o valor atual de i acrescido de 1. Por exemplo, na primeira iteração do loop, i é 0, então o conteúdo será "item add1".

newUL.append(newLI);: Estamos anexando o novo elemento "li" ao elemento "ul" criado anteriormente (newUL) usando o método append. Isso adicionará o novo item da lista ao elemento "ul" recém-criado.

ul.after(newUL): Por fim, estamos usando o método after no elemento ul original para inserir o novo elemento "ul" (newUL) imediatamente após ele. Isso significa que o novo elemento "ul" e seus itens de lista serão adicionados como irmãos do elemento ul original.*/