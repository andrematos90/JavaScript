const array = document.querySelector('#array');
const input = document.querySelector('#txt_pesquisar');
const botao = document.querySelector('#btnPesquisar');
const resultado = document.querySelector('#resultado');

numeros = [1, 45, 28, 48, 23, 11]

array.innerHTML = "[" + numeros + "]"

botao.addEventListener("click",()=>{
    numeros.find((elemento, indice)=>{
        if(elemento == input.value){
            resultado.innerHTML = elemento + " encontrado na posição " + indice
            return elemento
        }
        else{
            resultado.innerHTML = " elemento não encontrado!"
        }
    })
})
