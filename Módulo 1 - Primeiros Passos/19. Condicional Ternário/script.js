/* basicamente é um "if" que é feito em uma linha
primeiro vai a condição, depois "?" que diz que é uma 
condicional ternaria
depois o valor que assume se estiver certa "2", e depois do ":"
o valor se for falso "10" no exemplo

verificar se o usuario tem direito a frete gratis em
um site de vendas */



let isMember = true;

let shipping = isMember ? 2 : 10;

console.log( isMember ? "Você é Membro" : "Você não é menbro" )
console.log("frete: " + shipping);