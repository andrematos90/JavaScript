const array = document.querySelector('#array');
const input = document.querySelector('#txt_pesquisar');
const botao = document.querySelector('#btnVerificar');
const resultado = document.querySelector('#resultado');

const numeros = [23, 45, 28, 48, 23, 11]

array.innerHTML = "[" + numeros + "]"


botao.addEventListener("click", ()=>{
    numeros.every((elemento, indice)=>{
        if(elemento >= 18){
            resultado.innerHTML = "Todo os itens do array atendem a condição maoir que 18!"
        }
        else{
            resultado.innerHTML = elemento + " na posição " + indice + " não atende a condição!"
        }
        return elemento;
    })
})