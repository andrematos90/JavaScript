const array = document.querySelector('#array');
const input = document.querySelector('#txt_pesquisar');
const botao = document.querySelector('#btnVerificar');
const resultado = document.querySelector('#resultado');

const numeros = [23, 45, 28, 1, 23, 11]

array.innerHTML = "[" + numeros + "]"


botao.addEventListener("click", ()=>{
  const resultadoEncontrado =   numeros.some((elemento)=> elemento >= 50);

    if(resultadoEncontrado){
        resultado.innerHTML = " Pelo menos um item é maior do que 50"
    }
    else{
        resultado.innerHTML = "Nenhum item é mmaior que 50";
    }
    }
);