/*Exercício: Função de Estatísticas de Números
Crie uma função chamada calcularEstatisticas que recebe um array de números como parâmetro e retorna um objeto contendo:

A média dos números
O maior número
O menor número
A função deve ser genérica o suficiente para funcionar com qualquer array de números.

Exemplo de uso:



const numeros = [10, 20, 30, 5, 50];
console.log(calcularEstatisticas(numeros));
Saída esperada:


Editar
{
  media: 23,
  maior: 50,
  menor: 5
}*/




function calcularEstatisticas(numeros){

    let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    let media = soma / numeros.length;
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);

    return{
        média: media,
        maior: maior,
        menor: menor
      };
}

const numeros = [10, 22, 48, 98]
console.log(calcularEstatisticas(numeros));