const numero = document.getElementById("numero");

let resultado = false;
let tempo = 3000;

setTimeout(() => {
    resultado = true;
}, tempo)


if(resultado){
    numero.innerHTML="Deu certo";
    numero.classList.remove("erro");
    numero.classList.add("ok");
}else{
    numero.innerHTML="ERRO!";
    numero.classList.add("erro");
    numero.classList.remove("ok");
}

numero.innerHTML="Processando..."