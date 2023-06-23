/*Agora, escreva um código JavaScript para realizar as seguintes tarefas:

Quando o botão "Adicionar Tarefa" for clicado, o valor do campo de texto (newTaskInput) deve ser lido.
Se o campo de texto estiver vazio, exiba um alerta informando que é necessário digitar uma tarefa.
Caso contrário, crie um novo elemento <li> com o valor da tarefa digitada e adicione-o à lista (taskList).
Ao clicar em um item da lista, adicione a classe CSS "selected" ao item clicado para destacá-lo.
Ao clicar novamente em um item já destacado, remova a classe "selected" para desfazer o destaque.
Dica: Utilize os métodos querySelector, querySelectorAll, addEventListener, createElement, appendChild e classList para selecionar elementos e realizar as manipulações necessárias.

Lembre-se de testar o exercício no navegador para verificar se as funcionalidades estão sendo implementadas corretamente.
*/

function adicionaTarefa(){
    // Obtém a referência para a lista de tarefas
    let lista = document.getElementById('taskList');

    // Cria um novo elemento <li> para a nova tarefa
    let novoElementodaLista = document.createElement('li');

    // Obtém o valor digitado no campo de entrada
    let digitado = document.getElementById('newTaskInput');
    var texto = digitado.value;

    // Verifica se o campo de entrada está vazio
    if (texto == ''){
        // Exibe um alerta se nenhum texto foi digitado
        alert('ATENÇÃO! É necessário adicionar uma tarefa!')
    }
    else{
        // Adiciona o texto digitado como conteúdo do novo elemento <li>
        novoElementodaLista.append(texto);

        // Adiciona o novo elemento à lista de tarefas
        lista.appendChild(novoElementodaLista);

        // Limpa o campo de entrada
        digitado.value= '';
    } 
}

function adicionaClasse(itemdaLista){
    // Adiciona ou remove a classe 'selected' ao item da lista quando chamada
    itemdaLista.classList.toggle('selected');
}

