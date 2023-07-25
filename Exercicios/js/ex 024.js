/*Escreva um programa em JavaScript que utilize um loop "for" para exibir na tela os números pares de 1 a 20. O programa deve percorrer os números de 1 a 20 e, para cada número, verificar se ele é par. Caso seja par, o número deve ser exibido no console. Caso contrário, o programa deve passar para o próximo número. Certifique-se de que seu programa esteja corretamente indentado e documentado.*/

for(i=0; i < 21; i++){
    if( i % 2 == 0){
        console.log(i)
    }
}

/*
Inicialização: O loop começa com a declaração i = 0, que atribui o valor 0 à variável i.

Condição: A condição i < 21 é verificada a cada iteração do loop. Enquanto a condição for verdadeira, o loop continuará sendo executado.

Incremento: Após cada iteração do loop, a instrução i++ é executada, o que incrementa o valor da variável i em 1.

Condição de filtro: Dentro do loop, há um bloco condicional if que verifica se i é divisível por 2, usando a expressão i % 2 == 0. O operador % retorna o resto da divisão de i por 2. Se o resto for 0, isso significa que i é um número par.

Exibição: Se a condição i % 2 == 0 for verdadeira, o número i é exibido no console usando a função console.log(i).

Repetição: Após a exibição ou não do número, o loop continua para a próxima iteração, verificando novamente a condição i < 21.

O loop for continuará executando até que a condição i < 21 seja falsa. Neste caso, o loop será executado para os valores de i de 0 a 20 e exibirá apenas os números pares no console*/