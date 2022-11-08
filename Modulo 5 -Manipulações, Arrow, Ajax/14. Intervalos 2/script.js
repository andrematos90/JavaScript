let timer;

function rodar() {
       timer = setTimeOut(function() {
           document.querySelector('.demo').innerHTML = 'Rodou!';
      }, 2000);   
}

function parar() {
  clearTimeout(timer);
}

