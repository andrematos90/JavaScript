/*
Você foi contratado para desenvolver uma calculadora de média ponderada. Sua tarefa é criar uma função chamada calcularMediaPonderada que recebe um array de objetos, onde cada objeto possui duas propriedades: nota e peso. A função deve calcular e retornar a média ponderada das notas, levando em consideração os pesos fornecidos.

Requisitos do exercício:

Crie uma função chamada calcularMediaPonderada que recebe um parâmetro chamado notas (um array de objetos).
Dentro da função calcularMediaPonderada, crie uma função interna chamada calcularProduto que recebe um parâmetro chamado nota e retorna o produto da nota pelo peso.
Utilize a função reduce() para percorrer o array de objetos e calcular a soma dos produtos das notas pelos pesos.
Utilize a função reduce() novamente para percorrer o array de objetos e calcular a soma dos pesos.
Divida a soma dos produtos pela soma dos pesos para obter a média ponderada.
Retorne a média ponderada calculada pela função calcularMediaPonderada.*/

function calcularMediaPonderada(notas) {
  // Função interna para calcular o produto da nota pelo peso
  function calcularProduto(nota) {
    return nota.nota * nota.peso;
  }

  // Calcular a soma dos produtos das notas pelos pesos
  var somaProdutos = notas.reduce(function(acumulador, nota) {
    return acumulador + calcularProduto(nota);
  }, 0);

  // Calcular a soma dos pesos
  var somaPesos = notas.reduce(function(acumulador, nota) {
    return acumulador + nota.peso;
  }, 0);

  // Calcular a média ponderada
  var mediaPonderada = somaProdutos / somaPesos;

  return mediaPonderada;
}

array = [ {nota: 5, peso:2 },
         { nota:8, peso:1 }];
        
console.log(calcularMediaPonderada(array));

/*
A função calcularMediaPonderada é definida com um parâmetro notas, que é um array contendo objetos com as propriedades nota e peso.
A função interna calcularProduto recebe um objeto nota e retorna o produto da propriedade nota pelo peso.
A variável somaProdutos é calculada usando o método reduce no array notas. Ela acumula a soma dos produtos das notas pelo peso, usando a função calcularProduto como callback.
A variável somaPesos é calculada usando o método reduce no array notas. Ela acumula a soma dos pesos das notas.
A variável mediaPonderada é calculada dividindo somaProdutos por somaPesos, resultando na média ponderada das notas.
A função retorna o valor da mediaPonderada.
Um array array é criado com dois objetos, cada um representando uma nota e um peso.
A função calcularMediaPonderada é chamada com o array array como argumento.
O resultado é exibido no console.
Basicamente, o código calcula a média ponderada das notas fornecidas, onde cada nota tem um peso associado. Ele itera sobre as notas, multiplicando cada nota pelo seu peso e acumulando o resultado. Em seguida, divide a soma dos produtos pelo total dos pesos para obter a média ponderada.*/
