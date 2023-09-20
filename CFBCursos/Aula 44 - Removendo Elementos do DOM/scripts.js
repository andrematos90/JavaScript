const caixaCursos = document.querySelector('#caixaCursos');
const btnC = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector('#c1_2');
const cursos = ['HTML', 'CSS', 'JavaScript', "C#", "ASP.NET", "React"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.getElementById("btnRemove");

// Declare a função radioSelecionado antes de usá-la
const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll("input[type=radio")];
    let radioSelecionado = todosRadios.filter((elemento, indice, array) => {
        return elemento.checked
    })
    radioSelecionado = radioSelecionado[0]
    return radioSelecionado ? radioSelecionado.parentNode.parentNode : null;
}

cursos.map((elemento, index) => {
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c" + index);
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.innerHTML = elemento;

    const comandos = document.createElement("div");
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input");
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "rb_curso");

    comandos.appendChild(rb);

    novoElemento.appendChild(comandos);
    caixaCursos.appendChild(novoElemento)
})

btnCursoSelecionado.addEventListener('click', () => {
    const selecao = radioSelecionado();
    alert(selecao ? selecao.innerText : "Nenhum curso selecionado");
})

btnRemoverCurso.addEventListener('click', () => {
    const selecao = radioSelecionado();
    if (selecao) {
        selecao.remove();
    } else {
        alert("Nenhum curso selecionado para remover");
    }
})
