/*
Exercício: Acesso e alteração de propriedades de um objeto

Você foi contratado para desenvolver um sistema de gerenciamento de funcionários de uma empresa. Cada funcionário é representado por um objeto com as seguintes propriedades:

const funcionario = {
  nome: "João",
  idade: 30,
  cargo: "Desenvolvedor",
  salario: 5000
};

Sua tarefa é criar as seguintes funções:

Acessar propriedades: Crie uma função chamada acessarPropriedade que recebe o nome de uma propriedade como parâmetro e retorna o valor correspondente dessa propriedade no objeto funcionario. Por exemplo, se a função for chamada assim: acessarPropriedade("nome"), ela deve retornar o valor "João".

Alterar propriedades: Crie uma função chamada alterarPropriedade que recebe o nome de uma propriedade e um novo valor como parâmetros, e atualiza o valor dessa propriedade no objeto funcionario. Por exemplo, se a função for chamada assim: alterarPropriedade("salario", 6000), o objeto funcionario deve ser alterado para:

{
  nome: "João",
  idade: 30,
  cargo: "Desenvolvedor",
  salario: 6000
}

Implemente essas funções e teste-as com diferentes propriedades e valores. Certifique-se de que elas estejam acessando e alterando corretamente as propriedades do objeto funcionario.
*/


const funcionario = {
    nome: 'André',
    idade: 30,
    cargo: 'Desenvolvedor',
    salario: 5000
};


function acessarPropriedade(propriedade){
  console.log(funcionario[propriedade])
}

function alterarPropriedade(propriedade, new_value){
  funcionario[propriedade] = new_value
  return funcionario;
}

acessarPropriedade('nome');
alterarPropriedade('salario', 8000);
console.log(funcionario)


/* 
Primeiro, um objeto chamado funcionario é definido, contendo várias propriedades, como nome, idade, cargo e salário.

Em seguida, a função acessarPropriedade é definida com um parâmetro chamado propriedade.

Dentro da função acessarPropriedade, usamos a sintaxe de colchetes [] para acessar a propriedade do objeto funcionario com base no valor passado como argumento propriedade. O valor da propriedade é então impresso no console.

A função alterarPropriedade é definida com dois parâmetros: propriedade e new_value.

Dentro da função alterarPropriedade, novamente usamos a sintaxe de colchetes [] para atribuir o novo valor (new_value) à propriedade do objeto funcionario com base no nome da propriedade fornecida (propriedade).

Após a alteração, o objeto funcionario é retornado pela função.

Em seguida, a função acessarPropriedade é chamada com o argumento 'nome'. Isso imprime o valor da propriedade "nome" do objeto funcionario no console, que é "André".

Depois disso, a função alterarPropriedade é chamada com os argumentos 'salario' e 8000. Isso altera o valor da propriedade "salario" do objeto funcionario para 8000.

Por fim, o objeto funcionario atualizado é impresso no console. Agora, a propriedade "salario" tem o valor 8000.*/