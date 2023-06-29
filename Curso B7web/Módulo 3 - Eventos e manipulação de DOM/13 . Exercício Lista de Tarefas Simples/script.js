function adicionaItem(){
    let elemento = document.querySelector('ul');
    let input = document.querySelector('input');
    li = document.createElement('li');
    li.innerText = input.value;
    elemento.append(li)
    input.value = ''

    
}

