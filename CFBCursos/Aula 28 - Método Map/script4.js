// Definindo uma função chamada 'converterInt' que recebe um argumento 'e' e converte para um número inteiro.
const converterInt = (e) => parseInt(e);

// Criando um array 'num' contendo strings numéricas.
let num = ['1', '2', '3', '4', '5'].map(converterInt);

// Imprimindo o array 'num' resultante após a conversão das strings em números inteiros.
console.log(num);


/*const converterInt = (e) => parseInt(e);: Aqui, você define uma função chamada converterInt que recebe um argumento e. Essa função utiliza a função parseInt() para converter a string e em um número inteiro.

let num = ['1', '2', '3', '4', '5'].map(converterInt);: Cria um array chamado num contendo strings numéricas '1', '2', '3', '4' e '5'. Em seguida, você utiliza o método map() para iterar sobre cada elemento do array e aplicar a função converterInt() a cada um deles. Isso resulta em um novo array num contendo os números inteiros correspondentes.

console.log(num);: Finalmente, o array num resultante, contendo os números inteiros convertidos, é impresso no console.

O resultado do código será:

[1, 2, 3, 4, 5]


O método map() é utilizado aqui para aplicar uma transformação a cada elemento do array original e criar um novo array com os resultados transformados. Nesse caso, a transformação é a conversão de strings para números inteiros.*/