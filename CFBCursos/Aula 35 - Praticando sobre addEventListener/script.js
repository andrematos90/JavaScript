let divsesquerda = document.querySelectorAll('.esquerda .exemplo');
let divDireita = document.querySelector(".direita");
let botaoCopia = document.querySelector('#botao');
let elementoSelecionado;


//coneverte o HTMLCollection ou nodelist para array
arrayDeDivs = Array.from(divsesquerda);


arrayDeDivs.map((elemento) =>{
    elemento.addEventListener("click", (evento)=>{
        const elemento = evento.target
        elemento.classList.add("selecionada");
        elementoSelecionado = elemento;
        
        
        
    })
})


botaoCopia.addEventListener("click", copiar)
function copiar(){
    if(elementoSelecionado){
        console.log("clicado")
    const clone = elementoSelecionado.cloneNode(true);
    divDireita.appendChild(clone);
    elementoSelecionado.classList.remove("selecionada");
    elementoSelecionado = null;
    }
    
}


