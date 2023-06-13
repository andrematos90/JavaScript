let pessoa = {
    nome: 'andre',
    sobrenome: 'matos',
    idade: 90,
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;  // função dentro de objeto, com arrow function => nao se consegue 
                                                   // acessar propriedades  do objeto 
    }
}

console.log(pessoa.nomeCompleto());

/* this é uma keyword "palavra chave" e significa isto 
se refere ao proprio objeto, acessa ao proprio objeto

*/