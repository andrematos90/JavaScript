/*
Crie uma função chamada capitalizarNomes que recebe um array de strings contendo nomes e retorna um novo array com os nomes capitalizados (a primeira letra de cada nome em maiúscula e as demais em minúscula).

Instruções:

Crie uma função chamada capitalizarNomes que recebe um parâmetro nomes.
Utilize o método map para iterar sobre o array nomes e aplicar a capitalização em cada nome.
Retorne o novo array contendo os nomes capitalizados.*/

let nomes = [ 'andré', 'miguel', 'joao', 'pedro']

const capitalizarNomes = nomes.map((nome) => nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase())

console.log(capitalizarNomes)

/* O método map itera sobre cada elemento do array e aplica uma transformação a cada um deles. Neste caso, estamos capitalizando cada nome.

A função de callback (nome) => nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase() é uma função anônima que recebe o parâmetro nome representando cada elemento do array.

Dentro da função de callback, temos a seguinte lógica:

nome.charAt(0) retorna o primeiro caractere do nome.
.toUpperCase() converte o primeiro caractere em maiúscula.
nome.slice(1) retorna a substring do nome, começando do segundo caractere em diante.
.toLowerCase() converte todos os caracteres restantes em minúscula.
Dessa forma, concatenamos a primeira letra do nome em maiúscula com o restante do nome em minúscula, obtendo o nome capitalizado.

O map retorna um novo array com os nomes capitalizados.*/