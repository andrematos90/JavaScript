let divEsquerda = document.querySelectorAll('.esquerda .exemplo');
let divDireita = document.querySelector(".direita");
let botaoCopia = document.querySelector('#botao');


//coneverte o HTMLCollection ou nodelist para array
const arrayDeDivs = Array.from(divEsquerda);


arrayDeDivs.map((elemento) =>{
    elemento.addEventListener("click", (evento)=>{
        const elementoDiv = evento.target
        elementoDiv.classList.toggle("selecionada");
        
         
    })
})


botaoCopia.addEventListener("click", transferir);

function transferir(){
    const divsSelecionadas = [...document.querySelectorAll(".selecionada")]
    const divsNãoSelecionadas = [...document.querySelectorAll(".exemplo:not(.selecionada)")]
   

    divsSelecionadas.map((el)=>{
    divDireita.appendChild(el)
    });

    
    divsNãoSelecionadas.map((el)=>{
        divEsquerda.appendChild(el)
        });

   
}
    



