

const botao = document.getElementById("botao")
botao.addEventListener("click", clicou)


function clicou(){
    const lista = document.getElementById('myList');
    let newul = document.createElement('ul');

    lista.after(newul);

    for(let i = 0; i < 5; i++){
        let newLi = document.createElement('li')
        newul.innerHTML = "item add " + i;
        newul.append(newLi);
    }
}