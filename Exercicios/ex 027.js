/*"Escreva um programa em JavaScript que solicite ao usuário um número inteiro positivo e, em seguida, exiba a sequência de números de 1 até o número fornecido. Utilize um loop while para realizar essa tarefa. Certifique-se de validar a entrada do usuário para garantir que seja um número inteiro positivo."*/


let number = prompt('Digite um número: ');
let contador = 1;

while(contador <= number){
    console.log(contador)
    contador ++
}

/*O código começa com a declaração da variável number, que armazenará o número fornecido pelo usuário. A função prompt é utilizada para exibir uma caixa de diálogo onde o usuário pode digitar um valor. O resultado retornado pela função prompt é uma string, que representa o valor digitado pelo usuário.

Em seguida, declaramos a variável contador e a inicializamos com o valor 1. Essa variável será usada para iterar pelos números de 1 até o número fornecido pelo usuário.

Agora, entramos no loop while. A condição do loop é contador <= number, ou seja, enquanto o valor do contador for menor ou igual ao valor de number, o código dentro do loop será executado.

Dentro do loop, usamos console.log(contador) para imprimir o valor atual do contador no console. Assim, a cada iteração do loop, um número será impresso.

Logo após, incrementamos o contador usando contador++, para que seu valor seja atualizado e possamos passar para o próximo número da sequência.

O loop continuará executando enquanto a condição contador <= number for verdadeira. Quando o contador atingir o valor de number, o loop será interrompido.*/