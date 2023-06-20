/*
Você está desenvolvendo um aplicativo de lista de tarefas e precisa implementar uma função que verifique se um determinado item está presente na lista. Sua tarefa é criar a função verificarPresencaItem(lista, item) utilizando o método includes().*/

function verificarPresencaItem(lista, item){
    return lista.includes(item)
}

arraydeNumeros = [8, 4, 8, 18]
console.log(verificarPresencaItem(arraydeNumeros, 5))