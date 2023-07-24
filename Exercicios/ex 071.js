/*Desenvolva uma calculadora de investimentos em JavaScript que permita ao usuário calcular o valor futuro de um investimento, considerando a aplicação inicial, a taxa de juros anual e o período de investimento em anos.

Instruções:

Solicite ao usuário que informe o valor inicial do investimento (capital inicial).
Peça ao usuário que insira a taxa de juros anual (em decimal) do investimento.
Peça ao usuário que informe o período de investimento em anos.
Utilize os valores fornecidos para calcular o montante final usando a fórmula do juro composto: M = P * (1 + r)^n, onde M é o montante final, P é o capital inicial, r é a taxa de juros anual e n é o número de anos de investimento.
Exiba o valor futuro do investimento na página ou no console, com duas casas decimais após a vírgula.
Dica: Para realizar os cálculos, você pode utilizar a função Math.pow() para calcular a potência (1 + r)^n.*/

// Solicita ao usuário que insira o valor inicial do investimento e armazena em valorInicial.
let valorInicial = parseFloat(prompt('Valor de investimento: '));

// Solicita ao usuário que insira a taxa de juros anual (em decimal) e armazena em taxaJuros.
let taxaJuros = parseFloat(prompt('Taxa de juros anual (em decimal): '));

// Solicita ao usuário que insira o período de investimento em anos e armazena em periodo.
let periodo = parseInt(prompt('Período de investimento: '));

// Função calInvestimento(P, r, n) recebe o capital inicial (P), taxa de juros (r) e período de investimento (n).
function calInvestimento(P, r, n){
    // Calcula o montante final do investimento usando a fórmula do juro composto: M = P * (1 + r)^n.
    let montante = P * Math.pow((1 + r), n);
    
    // Retorna o valor do montante calculado.
    return montante;
}

// Chama a função calInvestimento() com os valores fornecidos pelo usuário e armazena o resultado em resultado.
let resultado = calInvestimento(valorInicial, taxaJuros, periodo);


// Exibe um alerta mostrando o resultado do investimento com duas casas decimais após a vírgula.
alert('O valor futuro do investimento é de R$ ' + resultado.toFixed(2));
