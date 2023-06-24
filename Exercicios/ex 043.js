/*Você foi contratado para desenvolver um sistema de gerenciamento de tarefas (to-do list) utilizando HTML, CSS e JavaScript. Para isso, você precisa implementar as seguintes funcionalidades:

Adicionar Tarefa: Quando o usuário preencher o campo de texto e clicar no botão "Adicionar", uma nova tarefa deve ser adicionada à lista de tarefas exibida na página. Cada tarefa deve ser representada por um elemento <li>.

Marcar Tarefa como Concluída: Quando o usuário clicar em uma tarefa, ela deve ser marcada como concluída. A tarefa concluída deve ter sua aparência alterada para indicar visualmente que foi finalizada.

Remover Tarefa: Ao passar o mouse sobre uma tarefa, um ícone de lixeira deve ser exibido. Quando o usuário clicar nesse ícone, a tarefa correspondente deve ser removida da lista.

Contar Tarefas: O sistema deve exibir a quantidade atual de tarefas pendentes (não concluídas) na página.

*/

function adicionaTarefa(){
    let ul = document.getElementById('Lista');
    let li = document.createElement('li');
    let tarefaDigitada = document.getElementById('inputTarefa');
    let tarefa = tarefaDigitada.value;
    li.addEventListener('click', concluida);
    li.append(tarefa);
    ul.append(li);
    tarefaDigitada.value = '';

    
}

function concluida(event){

    const targetElement = event.target;
    targetElement.innerHTML = targetElement.textContent +'(concluida)'

    targetElement.classList.toggle('concluida');
    
}





