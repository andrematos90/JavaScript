let carro = {
    nome: 'Fiat',
    modelo:'Uno',
    peso: '800kg',

    ligado:false,

    ligar: function(){
    this.ligado = true;
    console.log("vrum vrum")

    },
    acelerar:function(){
        if (this.ligado == true) {
            console.log("riiiiiiiiiiih");
        

        }
    }
};