const caixaCursos = document.querySelector('#caixaCursos');
const btnC = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector('#c1_2');
const cursos = ['HTML', 'CSS', 'JavaScript', "C#", "ASP.NET", "React"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");


cursos.map((elemento, index) =>{
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c" + index);
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.innerHTML = elemento;

    const comnandos = document.createElement("div");
    comnandos.setAttribute("class", "comandos")

    const rb= document.createElement("input");
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "rb_curso");

    comnandos.appendChild(rb);

    novoElemento.appendChild(comnandos);
    caixaCursos.appendChild(novoElemento)
})

btnCursoSelecionado.addEventListener('click', ()=>{
    const todosRadios = [...document.querySelectorAll("input[type = radio")];
    let radioSelecionado = todosRadios.filter((elemento, indice, array) =>{
        return elemento.checked
    })
    radioSelecionado = radioSelecionado[0]
    //const curoselecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent faz a mesma seleção
    const curoselecionado = radioSelecionado.parentNode.previousSibling.textContent
    alert(curoselecionado)
})