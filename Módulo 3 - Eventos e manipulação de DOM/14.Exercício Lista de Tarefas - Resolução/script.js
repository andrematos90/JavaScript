//seleciona os elementos

const input = document.querySelector('input'); // Seleciona o elemento <input> no documento HTML e o atribui à variável 'input'.
const lista = document.querySelector('ul'); // Seleciona o elemento <ul> no documento HTML e o atribui à variável 'lista'.
 
//funções
function handleKeyUp(e){ // Declaração da função 'handleKeyUp' que será chamada quando uma tecla for liberada no elemento 'input'.
    if(e.key === 'Enter'){ // Verifica se a tecla pressionada é a tecla 'Enter'.
        const newLi = document.createElement('li'); // Cria um novo elemento <li> e o atribui à variável 'newLi'.
        newLi.innerHTML = input.value; // Define o conteúdo do elemento 'newLi' como o valor atual do 'input'.
        lista.appendChild(newLi); // Adiciona o elemento 'newLi' como um novo item da lista 'lista'.
        
        input.value = ''; // Define o valor do 'input' como uma string vazia, limpando o campo de entrada.
    }
}

//eventos
input.addEventListener('keyup', handleKeyUp); // Adiciona um ouvinte de evento ao 'input' para o evento 'keyup', que chama a função 'handleKeyUp' quando uma tecla é liberada.


/*
Em resumo, esse código adiciona um comportamento onde, ao pressionar a tecla "Enter" no campo de entrada (input), o valor desse campo é adicionado como um novo item em uma lista (<ul>) no documento HTML.*/
