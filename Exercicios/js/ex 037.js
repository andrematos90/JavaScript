/*
Crie um documento onde você tem uma lista de itens e precisa implementar a funcionalidade de remoção de um item ao clicar nele. O objetivo é permitir que o usuário clique em um item da lista e o item selecionado seja removido da página.
*/


function deletarElemento(item){
  item.remove();

}


/*
Neste exemplo, adicionamos a propriedade onclick a cada item da lista, passando this como argumento para a função removerItem(). O this representa o elemento que foi clicado.

A função removerItem() é definida no JavaScript e recebe o elemento como parâmetro. Dentro da função, chamamos o método remove() para remover o elemento do DOM, efetivamente removendo-o da lista.

É importante notar que, ao usar onclick diretamente no HTML, a função deve ser definida em escopo global ou disponível no escopo em que o código é executado. Certifique-se de incluir o código JavaScript em algum lugar da página antes de usar a função removerItem().

Essa abordagem também permite personalizar a lógica dentro da função removerItem() para realizar outras ações antes ou após a remoção do item, se necessário.

OBS: 
Usando a propriedade onclick diretamente no HTML, o elemento clicado é automaticamente passado para a função como o valor de this. Portanto, não é necessário selecionar o elemento novamente na função.*/
