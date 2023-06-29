/*Você é responsável por desenvolver um sistema de controle de vendas para uma empresa. Nesse sistema, você precisa implementar um mecanismo de desconto com base no tipo de cliente.

Você deve usar a declaração switch para criar a lógica de cálculo de desconto. A tabela abaixo apresenta as categorias de clientes e seus respectivos descontos:

Categoria "A": 20% de desconto.
Categoria "B": 15% de desconto.
Categoria "C": 10% de desconto.
Categoria "D": 5% de desconto.
Demais categorias: Sem desconto.
Seu objetivo é criar uma função chamada calcularDesconto que recebe dois parâmetros: categoriaCliente (uma string) e valorVenda (um número). A função deve retornar o valor final da venda após aplicar o desconto adequado.*/

function calcularDesconto(categoriaCliente, valorVenda){
    let preço;
    switch(categoriaCliente){
        case "A":
            preço = valorVenda - (valorVenda / 100 * 20)
            break;
        case "B":
            preço = valorVenda - (valorVenda / 100 * 15)
            break;
        case "C":
            preço = valorVenda - (valorVenda /100 * 10)
            break;
        case "D":
            preço = valorVenda - (valorVenda /100 * 5)
            break;
        default:
            preço = valorVenda
            break;
    }
    return preço.toFixed(2);
}

console.log(calcularDesconto('C', 100));