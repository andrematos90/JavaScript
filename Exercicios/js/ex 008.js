/* Escreva um programa em JavaScript que solicita ao usuário que digite as coordenadas de um ponto no plano cartesiano (x, y). Em seguida, utilize uma estrutura de condicional dupla para verificar em qual quadrante o ponto se encontra e exiba a mensagem correspondente:

Se o ponto estiver no primeiro quadrante (x > 0 e y > 0), exiba a mensagem "O ponto está no primeiro quadrante!".
Caso contrário, se o ponto estiver no segundo quadrante (x < 0 e y > 0), exiba a mensagem "O ponto está no segundo quadrante!".
Caso contrário, se o ponto estiver no terceiro quadrante (x < 0 e y < 0), exiba a mensagem "O ponto está no terceiro quadrante!".
Caso contrário, se o ponto estiver no quarto quadrante (x > 0 e y < 0), exiba a mensagem "O ponto está no quarto quadrante!".
Se o ponto estiver no eixo x (x != 0 e y = 0), exiba a mensagem "O ponto está no eixo x!".
Se o ponto estiver no eixo y (x = 0 e y != 0), exiba a mensagem "O ponto está no eixo y!".
Caso contrário, se o ponto estiver na origem (x = 0 e y = 0), exiba a mensagem "O ponto está na origem!".*/


let x = prompt('Ponto X: ')
let y = prompt('Ponto Y: ')

if(x > 0 && y > 0){
    console.log('O ponto está no primeiro quadrante!')
}
else if( x < 0 && y > 0){
    console.log('O ponto está no segundo quadrante!')
}
else if(x < 0 && y < 0){
    console.log('O ponto está no terceiro quadrante!')
}
else if(x > 0 && y < 0){
    console.log('O ponto está no quarto quadrante!')
}
else if(x != 0 && y == 0){
    console.log('O ponto está no eixo x!')
}
else if(x == 0 && y !== 0){
    console.log('O ponto está no eixo y!')
}
else if(x == 0 && y == 0){
    console.log('O ponto está na origem!')
}

/* As duas primeiras linhas de código utilizam o comando prompt() para solicitar ao usuário que insira as coordenadas do ponto no plano cartesiano. Os valores inseridos pelo usuário são armazenados nas variáveis x e y.

Em seguida, o código utiliza uma estrutura de condicional dupla para verificar em qual quadrante o ponto se encontra e exibir a mensagem correspondente. Cada condição é verificada usando os operadores lógicos && (e) e || (ou).

A primeira condição verifica se o valor de x é maior que 0 e o valor de y é maior que 0. Se a condição for verdadeira, o bloco de código dentro do primeiro "if" será executado e exibirá a mensagem "O ponto está no primeiro quadrante!".

As condições seguintes seguem a mesma lógica, verificando cada quadrante e exibindo a mensagem correspondente.

A condição x != 0 && y == 0 verifica se o valor de x é diferente de 0 e o valor de y é igual a 0. Se a condição for verdadeira, o bloco de código dentro do "else if" será executado e exibirá a mensagem "O ponto está no eixo x!".

A condição x == 0 && y !== 0 verifica se o valor de x é igual a 0 e o valor de y é diferente de 0. Se a condição for verdadeira, o bloco de código dentro do "else if" será executado e exibirá a mensagem "O ponto está no eixo y!".

Por fim, a última condição x == 0 && y == 0 verifica se o valor de x é igual a 0 e o valor de y é igual a 0. Se a condição for verdadeira, o bloco de código dentro do "else if" será executado e exibirá a mensagem "O ponto está na origem!".*/