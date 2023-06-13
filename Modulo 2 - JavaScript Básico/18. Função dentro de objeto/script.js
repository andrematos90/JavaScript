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

Em JavaScript, this é uma palavra-chave reservada que se refere ao objeto atual em contexto. Ela é usada para acessar e referenciar propriedades e métodos do próprio objeto em que está sendo utilizada.

Quando uma função é chamada como um método de um objeto, o valor de this dentro da função é definido como o objeto em que o método está sendo chamado. Dessa forma, this permite que você acesse as propriedades e métodos desse objeto.

No exemplo que mencionei anteriormente:

const pessoa = {
  nome: "João",
  idade: 30,
  saudacao: function() {
    console.log("Olá, meu nome é " + this.nome + "!");
  }
};

pessoa.saudacao(); // "Olá, meu nome é João!"


Dentro da função saudacao, o this se refere ao objeto pessoa. Portanto, this.nome se refere à propriedade nome do objeto pessoa, permitindo que você acesse o valor "João" e concatene-o com a mensagem de saudação.

No entanto, é importante ter em mente que o valor de this pode variar dependendo do contexto em que uma função é chamada. Quando uma função é chamada de forma independente, fora de qualquer objeto, o valor de this será o objeto global (como window em um navegador ou global no Node.js). Em funções arrow (() => {}), o valor de this é herdado do contexto externo.

O comportamento exato de this pode ser complexo e depende do contexto de execução da função. É importante entender o contexto em que a função é chamada para garantir que this se refira ao objeto desejado.

*/