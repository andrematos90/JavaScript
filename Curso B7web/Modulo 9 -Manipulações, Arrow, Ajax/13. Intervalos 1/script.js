let timer;

function comecar(){
    timer = setInterval(showTime, 1000);

}

function parar() {
  clearInterval(timer) // limpa o intervalo, é passado como parametro a variavel timer
}
function showTime() {
    let d = new Date();

    let hora = d.getHours();
    let minutos = d.getMinutes();   // pegando a hora, minutos, e segundos
    let segundos = d.getSeconds(); 

    let txt = hora + ':' + minutos + ':' + segundos ;                       // juntar todos em um texto

   document.querySelector('.demo').innerHtml = txt;
   

}

//let timer = setInterval(showTime, 1000); //  no primeiro parametro é passada a função que vai rodar, no segundo parametro de quanto em quanto tempo em milisegundos