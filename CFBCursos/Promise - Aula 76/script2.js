// Obtém o elemento com o id "numero" do DOM
const numero = document.getElementById("numero");
const btn_promessa = document.getElementById("promessa");

numero.innerHTML="Esperando..."

btn_promessa.addEventListener("click", ((evt) => {
    
numero.innerHTML="Processando..."
let  promessa = new Promise((resolve, reject) => {
    let resultado =true;
    let tempo = 3000;

    setTimeout(() => {
        if(resultado){
            resolve('ok');
        }else{
            reject('erro');
        }
    }, tempo)

})


promessa.then((retorno) =>{
    numero.innerHTML= retorno;
    numero.classList.remove("erro");
    numero.classList.add("ok");
});

promessa.catch((retorno) => {
    numero.innerHTML= retorno;
    numero.classList.add("erro");
    numero.classList.remove("ok");
});



}) 
);





