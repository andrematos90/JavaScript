/*Neste exercício, você será desafiado a selecionar e manipular atributos de elementos no DOM (Document Object Model) usando JavaScript. Você deve implementar as seguintes tarefas:

Selecione um elemento HTML com o ID "meuElemento".
Obtenha o valor do atributo "src" de uma imagem.
Altere o valor do atributo "href" de um link para "https://www.exemplo.com".
Verifique se um botão possui o atributo "disabled" e exiba uma mensagem informando se está habilitado ou desabilitado.
Remova o atributo "class" de um elemento.
*/

var image = document.getElementById('meuElemento');
var src = image.getAttribute('src');
console.log(src)

var link = document.querySelector('a');
link.setAttribute('href', 'https://www.exemplo.com');
console.log(link)

var botao = document.getElementById('botao');
if (botao.hasAttribute('disabled')){
    console.log('possui atributo disable');
}
else{
    console.log('Não possui atributo');
}

var div = document.querySelector('.minhadiv');
div.removeAttribute('class');

