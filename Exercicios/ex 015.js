/*Escreva uma função chamada calcular que recebe dois números como parâmetros: numero1 e numero2. A função calcular deve retornar o resultado da seguinte operação: elevar numero1 ao quadrado e, em seguida, calcular a raiz quadrada do resultado, e por fim, multiplicar o resultado pela soma de numero2 com o dobro de numero1.

Em seguida, escreva uma função externa chamada exibirResultado que recebe um número como parâmetro: resultado. Dentro da função exibirResultado, crie uma função interna chamada formatarNumero que recebe um número como parâmetro e retorna o número formatado com duas casas decimais.

A função exibirResultado deve chamar a função formatarNumero passando o resultado como argumento, e em seguida, exibir um alerta com a mensagem: "O resultado formatado é: [resultado formatado]".

Utilize essas funções para calcular e exibir o resultado de calcular(numero1, numero2), e garanta que o resultado seja exibido corretamente formatado com duas casas decimais no alerta.

Você pode testar a solução chamando a função calcular e passando valores diferentes para numero1 e numero2.

Lembre-se de utilizar o alert() para exibir as mensagens e resultados no navegador.

Observações:

Utilize a função Math.sqrt() para calcular a raiz quadrada.
Utilize a função toFixed(2) para formatar o número com duas casas decimais.*/



function calcular(numero1, numero2){
    
    let raiz = Math.sqrt(numero1 * numero1);
    let resultado = raiz * (numero2 + (numero1 *2));
    return resultado;
}

function exibirResultado(resultado){
    function formatarNumero(numero){
        let numeroFormatado = numero.toFixed(2);
        return numeroFormatado;
    }

    let resultadoFormatado = formatarNumero(resultado);
    alert(`O resultado formatado é: ${resultadoFormatado}`);
}

let resultado = calcular(1, 2);

/*Passo 1: A função calcular(numero1, numero2) é definida com dois parâmetros: numero1 e numero2.

Passo 2: Dentro da função calcular, uma variável chamada raiz é declarada e calculada como a raiz quadrada do quadrado de numero1, usando Math.sqrt(numero1 * numero1).

Passo 3: Em seguida, uma variável chamada resultado é declarada e calculada como o produto da variável raiz pelo valor de numero2 adicionado ao dobro de numero1.

Passo 4: A função calcular retorna o valor da variável resultado.

Passo 5: A função exibirResultado(resultado) é definida com um parâmetro chamado resultado.

Passo 6: Dentro da função exibirResultado, é definida uma função interna chamada formatarNumero(numero) com um parâmetro chamado numero.

Passo 7: A função formatarNumero formata o número recebido como argumento com duas casas decimais usando o método toFixed(2). O número formatado é armazenado na variável numeroFormatado.

Passo 8: A variável resultadoFormatado é declarada e recebe o valor retornado pela função formatarNumero(resultado).

Passo 9: Um alerta é exibido com a mensagem "O resultado formatado é: [valor formatado]", onde [valor formatado] é o valor da variável resultadoFormatado.

Passo 10: Fora das funções, uma variável chamada resultado é declarada e recebe o resultado da chamada da função calcular(1, 1).

Passo 11: A função exibirResultado é chamada passando o valor da variável resultado como argumento.

Passo 12: O alerta é exibido com o resultado formatado.*/