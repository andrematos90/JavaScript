let divsesquerda = document.querySelectorAll('.esquerda .exemplo');
let divDireita = document.querySelector(".direita");
let botaoCopia = document.querySelector('#botao');


//coneverte o HTMLCollection ou nodelist para array
arrayDeDivs = Array.from(divsesquerda);


arrayDeDivs.map((elemento) =>{
    elemento.addEventListener("click", (evento)=>{
        const elementoDiv = evento.target
        elementoDiv.classList.toggle("selecionada");
        
         
    })
})


botaoCopia.addEventListener("click", copiar);

function copiar(){
    const divsSelecionadas = [...document.querySelectorAll(".selecionada")]
    divsSelecionadas.map((el)=>{
    divDireita.appendChild(el)
    })
}
    



