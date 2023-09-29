const array = document.querySelector('#array');
const input = document.querySelector('#txt_pesquisar');
const botao = document.querySelector('#btnReduzir');
const resultado = document.querySelector('#resultado');

const numeros = [1, 2, 3, 4, 5, 6]
let auz = []

array.innerHTML = "[" + numeros + "]"


botao.addEventListener("click", ()=>{
   resultado.innerHTML =  numeros.reduce((resultadoDaOperacao, Elementoatual, pos)=>{
    return resultadoDaOperacao +  Elementoatual
    })
})