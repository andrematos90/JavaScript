function clicou(){
    let teste = document.querySelector('#teste');
    console.log(teste.children[0].children);
    const ul = teste.querySelector('ul');

    ul.innerHTML = "<li> Item alterado</li>";

    console.log(ul.innerHTML);
}

/*
A função clicou() começa obtendo uma referência para um elemento HTML com o ID "teste" usando o método querySelector. O elemento encontrado é armazenado na variável teste.

Em seguida, é feito um console.log(teste.children[0].children). Vamos analisar isso em partes:

teste.children[0] retorna o primeiro filho do elemento teste. Essa notação [0] é usada para acessar o primeiro elemento na lista de filhos.
.children retorna uma lista dos filhos do primeiro filho de teste e não o texto que pode existir dentro por exemplo. Isso imprimirá a lista de elementos filhos.
A próxima linha de código utiliza teste.querySelector('ul') para encontrar o primeiro elemento <ul> dentro do elemento teste. O resultado é armazenado na constante ul.

A linha ul.innerHTML = "<li> Item alterado</li>"; define o conteúdo HTML da lista <ul> para uma nova string, que neste caso é "<li> Item alterado</li>". Isso substituirá todo o conteúdo anterior da lista.

Por fim, é exibido no console o conteúdo atualizado da lista usando console.log(ul.innerHTML).

Em resumo, a função clicou() obtém uma referência para um elemento HTML com o ID "teste". Em seguida, ela procura o primeiro elemento <ul> dentro desse elemento e altera o seu conteúdo para uma única <li> com o texto "Item alterado".
*/