const caixaCursos = document.querySelector('#caixaCursos');
const btnC = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector('#c1_2');
const cursos = ['HTML', 'CSS', 'JavaScript', "C#", "ASP.NET", "React"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.querySelector('#btnRemoverCurso');
const btnAdicionaAntes = document.querySelector('#btnAdicionarAntes');
const btnAdicionaDepois = document.querySelector('#btnAdicionarDepois');
const nomeCurso = document.querySelector('#nomeCurso');


const cursoSelecionado = () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
    return cursosSelecionados[0]
    
}

let indice = 0

const tiraSelecao = () =>{
    const cursosSelecionado = [...document.querySelectorAll('.selecionado')];
    cursosSelecionado.map((el)=>{
        el.classList.remove("selecionado")
    })

}

const criarNovoCurso = (nomeCurso) =>{
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c" + indice);
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.innerHTML = nomeCurso;

    novoElemento.addEventListener("click", (evt)=>{
        tiraSelecao();
        evt.target.classList.toggle("selecionado")
    })

    const comandos = document.createElement("div");
    comandos.setAttribute("class", "comandos")

    

    novoElemento.appendChild(comandos);

    return novoElemento
}
cursos.map((elemento) => {
   const novoElemento = criarNovoCurso(elemento)
    caixaCursos.appendChild(novoElemento)
    indice++;
})

btnCursoSelecionado.addEventListener('click', () => {
    const selecionado = cursoSelecionado();
    alert(selecionado ? selecionado.innerText : "Nenhum curso selecionado");
})

btnRemoverCurso.addEventListener('click', () => {
    const selecao = cursoSelecionado();
    if (selecao) {
        selecao.remove();
    } else {
        alert("Nenhum curso selecionado para remover");
    }
})

btnAdicionaAntes.addEventListener('click', ()=>{
    const selecionado = cursoSelecionado();
    
    try{
     if(nomeCurso.value != ""){
         const novoCurso = criarNovoCurso(nomeCurso.value)
         caixaCursos.insertBefore(novoCurso, selecionado)
     }else{
         alert("Digite um curso");
     }
    }catch(ex){
     alert("Seleciona um curso")
    }
});

btnAdicionaDepois.addEventListener('click', ()=>{
    const selecionado = cursoSelecionado();
    
   try{
    if(nomeCurso.value != ""){
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, selecionado.nextSibling)
    }else{
        alert("Digite um curso");
    }
   }catch(ex){
    alert("Seleciona um curso")
   }
})

