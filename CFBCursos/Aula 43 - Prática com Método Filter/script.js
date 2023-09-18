const idades  = [10, 15, 33, 28, 12, 25]

const maiorDeIdade = idades.filter((elemento, index, idade)=>{
    if(elemento >= 18){
       return elemento
    }
})

console.log(maiorDeIdade)


const menorDeIdade = idades.filter((elemento)=>{
    if(elemento < 18){
        return elemento
    }
})

console.log(menorDeIdade)




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