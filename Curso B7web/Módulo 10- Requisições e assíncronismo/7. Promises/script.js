function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log("pegando temperatura...");

        setTimeout(function(){
            resolve('40 na sombra');
        }, 2000);     
    });
}

//usando promisse

//pode ser armazenada em uma variavel

let temp = pegarTemperatura();  // vai retornar uma promise

temp.then(function(resultado){   //pega a temperatura e quando(then) tiver a temperatura executa function(resultado) "exibe na tela"
       console.log("temperatura: " +resultado);

       });