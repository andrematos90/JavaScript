/*

Considere o seguinte objeto "calculadora":

let calculadora = {
  valor1: 0,
  valor2: 0,
  somar: function() {
    return this.valor1 + this.valor2;
  },
  subtrair: function() {
    return this.valor1 - this.valor2;
  }
};

Crie uma função chamada "multiplicar" dentro do objeto "calculadora" que realiza a multiplicação dos valores "valor1" e "valor2".
Crie uma função chamada "dividir" dentro do objeto "calculadora" que realiza a divisão dos valores "valor1" e "valor2".
Teste as funções "multiplicar" e "dividir" chamando-as e armazenando seus resultados em variáveis.*/

let calculadora = {
    valor1: 3,
    valor2: 12,
    somar: function() {
      return this.valor1 + this.valor2;
    },
    subtrair: function() {
      return this.valor1 - this.valor2;
    },
    dividir: function() {
        return  this.valor1 / this.valor2;
    },
    multiplicar: function() {
        return this.valor1 * this.valor2
    }
  };
  

  console.log(calculadora.multiplicar())


  /*
  let calculadora = {
  valor1: 3,
  valor2: 12,
  somar: function() {
    return this.valor1 + this.valor2;
  },
  subtrair: function() {
    return this.valor1 - this.valor2;
  },
  dividir: function() {
    return this.valor1 / this.valor2;
  },
  multiplicar: function() {
    return this.valor1 * this.valor2;
  }
};

Neste trecho, um objeto chamado "calculadora" é criado. Ele possui duas propriedades, "valor1" e "valor2", com valores iniciais de 3 e 12, respectivamente. Além disso, existem quatro métodos no objeto "calculadora": "somar", "subtrair", "dividir" e "multiplicar". Cada método realiza uma operação matemática com base nos valores das propriedades "valor1" e "valor2".

console.log(calculadora.multiplicar())

Nesta linha, o método "multiplicar" é chamado utilizando a notação de ponto para acessar a função dentro do objeto "calculadora". Isso realiza a multiplicação dos valores "valor1" e "valor2" definidos anteriormente. Em seguida, o resultado da multiplicação é impresso no console utilizando o método console.log().

O resultado esperado será o valor da multiplicação dos valores 3 e 12, ou seja, 36.