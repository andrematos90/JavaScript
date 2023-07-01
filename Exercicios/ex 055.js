/*Escreva uma função chamada obterElementos em JavaScript que recebe um array de strings e um índice como parâmetros. A função deve retornar uma string que representa o elemento do array localizado no índice especificado.

No entanto, é necessário verificar se o índice fornecido está dentro dos limites válidos do array. Caso o índice esteja fora dos limites, a função deve retornar a string "Índice inválido".

Além disso, considere que o índice pode ser negativo. Nesse caso, o índice negativo representa a posição a contar do final do array. Por exemplo, um índice de -1 corresponde ao último elemento do array, -2 corresponde ao penúltimo, e assim por diante.*/

function obterElementos(array, i) {
    let string;
    if (i >= array.length || i < -array.length) {
      // Verifica se o índice está fora do intervalo válido do array
      // Se o índice for maior ou igual ao comprimento do array
      // ou se o índice for menor que o negativo do comprimento do array
      
      string = 'Índice inválido!';
    } else {
      // O índice está dentro do intervalo válido do array
      if (i < 0) {
        // Se o índice for negativo, ajusta-o para obter o índice válido
        // adicionando-o ao comprimento do array
        string = array[array.length + i];
      } else {
        // O índice é positivo, portanto, pode ser usado diretamente
        string = array[i];
      }
    }
    return string;
  }
  
  let lista = ['ovo', 'carro', 'aviao', 'cobra'];
  
  console.log(obterElementos(lista, -10));
  