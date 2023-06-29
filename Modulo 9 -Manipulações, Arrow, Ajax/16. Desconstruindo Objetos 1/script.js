let pessoa = {
    nome: 'André',
    sobrenome: 'Matos',
    idade: 32,
    social: {
        facebook:'b7web',
        instagram:'malibu'
    },
    nomeCompleto: function(){
        return`${this.nome} ${this.sobrenome}`;
    }
};

console.log(pessoa.nomeCompleto());


