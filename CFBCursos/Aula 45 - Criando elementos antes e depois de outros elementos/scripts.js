const caixaCursos = document.querySelector('#caixaCursos');
const btnC = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector('#c1_2');
const cursos = ['HTML', 'CSS', 'JavaScript', "C#", "ASP.NET", "React"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.querySelector('#btnRemoverCurso');
const btnAdicionaAntes = document.querySelector('#btnAdicionarAntes');
const btnAdicionaDepois = document.querySelector('#btnAdicionarDepois');
const nomeCurso = document.querySelector('#nomeCurso');


const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll("input[type=radio")];
    let radioSelecionado = todosRadios.filter((elemento, indice, array) => {
        return elemento.checked
    })
    radioSelecionado = radioSelecionado[0]
    return radioSelecionado ? radioSelecionado.parentNode.parentNode : null;
}

let indice = 0

const criarNovoCurso = (nomeCurso) =>{
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c" + indice);
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.innerHTML = nomeCurso;

    const comandos = document.createElement("div");
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input");
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "rb_curso");

    comandos.appendChild(rb);
    novoElemento.appendChild(comandos);

    return novoElemento
}
cursos.map((elemento) => {
   const novoElemento = criarNovoCurso(elemento)
    caixaCursos.appendChild(novoElemento)
    indice++;
})

btnCursoSelecionado.addEventListener('click', () => {
    const selecionado = radioSelecionado();
    alert(selecionado ? selecao.innerText : "Nenhum curso selecionado");
})

btnRemoverCurso.addEventListener('click', () => {
    const selecao = radioSelecionado();
    if (selecao) {
        selecao.remove();
    } else {
        alert("Nenhum curso selecionado para remover");
    }
})

btnAdicionaAntes.addEventListener('click', ()=>{
    const selecionado = radioSelecionado();
    
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
    const selecionado = radioSelecionado();
    
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

