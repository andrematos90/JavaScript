
objs1 = document.getElementsByTagName('div');
console.log(objs1); 

// converte o HTMLCollection e array possibilitando o uso de todas os métodos de array
objs2 = [...document.getElementsByTagName('div')]; 
console.log(objs2);

objs2.forEach(element => {
    // uso do de innterHTML no array para alterar o conteúdo das divs
    element.innerHTML = 'conteudo da div trocado!' 
});


/*
objs1 = document.getElementsByTagName('div');
Esta linha obtém uma coleção de todos os elementos HTML div na página e armazena-os na variável objs1. A variável objs1 conterá uma HTMLCollection ao vivo, o que significa que ela será atualizada automaticamente se elementos forem adicionados ou removidos do DOM.

console.log(objs1);
Esta linha imprime a variável objs1 no console, mostrando a coleção de elementos div que foram recuperados na linha anterior. A saída provavelmente será parecida com [div, div, div, ...], onde cada elemento representa um elemento div na página.

objs2 = [...document.getElementsByTagName('div')];
Esta linha cria um novo array objs2 contendo os mesmos elementos div que foram recuperados em objs1. O operador de propagação (...) é usado para converter a HTMLCollection em um array. Com isso, objs2 é agora um array estático que não mudará caso o DOM seja alterado.

console.log(objs2);
Esta linha imprime o array objs2 no console. A saída será parecida com a saída de objs1, mas desta vez, é um array.

objs2.forEach(element => { element.innerHTML = 'conteudo da div trocado!'; });
Este trecho de código itera por cada elemento em objs2 (ou seja, cada elemento div) usando o método forEach. Para cada elemento div, ele define a propriedade innerHTML para a string 'conteudo da div trocado!'. Como resultado, o conteúdo de cada elemento div na página será substituído por esse novo texto.

Em resumo, o código obtém todos os elementos div da página, os registra no console duas vezes (uma vez como uma HTMLCollection e outra como um array) e, em seguida, altera o conteúdo de cada elemento div para 'conteudo da div trocado!'*/








/*const jogador1 = {nome: 'André', energia: 40, vida: 20, magia:100};
const jogador2 = {nome: 'Ana', energia: 80, vida: 10, velocidade: 50};
const jogador3 = {...jogador1, ...jogador2};
console.log(jogador3);

O que acontece é que as propriedades dos dois objetos anteriores são combinadas em um novo objeto, jogador3. As propriedades do jogador1 são copiadas primeiro e, em seguida, as propriedades do jogador2 são copiadas. Se houver propriedades com o mesmo nome em ambos os objetos, o valor da propriedade do segundo objeto (no caso, jogador2) substituirá o valor da propriedade correspondente do primeiro objeto (jogador1).*/