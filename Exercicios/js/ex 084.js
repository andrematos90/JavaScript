/*
Exercício sobre o Operador Spread em JavaScript

Você foi designado para criar um programa em JavaScript que manipula listas de compras usando o operador de propagação. O programa deve realizar as seguintes tarefas:

Declare duas listas de compras: listaDeCompras1 e listaDeCompras2, cada uma contendo alguns itens (por exemplo, frutas, legumes, produtos de higiene, etc.).

Use o operador de propagação para criar uma nova lista chamada listaDeComprasTotal que combine os itens das duas listas de compras.

Adicione um ou mais itens extras à listaDeComprasTotal usando o operador de propagação novamente.

Exiba no console a lista de compras completa listaDeComprasTotal para verificar se todos os itens foram corretamente combinados e adicionados.*/


listaDeCompras1 = ['bread', 'beans', 'rice', 'meat'];
listaDeCompras2 = ['pasta', 'egg', 'milk'];

listaDeComprasTotal = [...listaDeCompras1, ...listaDeCompras2];


console.log(listaDeComprasTotal)