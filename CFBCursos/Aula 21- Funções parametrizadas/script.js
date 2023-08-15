const valorPadrao = 0;

function soma(a = valorPadrao, b = valorPadrao){
    res = a + b;
    return res;
}

console.log(soma(1));


function add(v){
    valor +=v; 
}

let valor = 0;

//em js pode se manipular uma variável dentro de uma função mesmo ela estando fora e sem return
console.log(valor);

add(10);
console.log(valor);

add(5);
console.log(valor);


/*
Sim, em JavaScript, uma variável definida fora de uma função pode ser acessada e manipulada dentro da função, mesmo que não seja passada como argumento e não haja um retorno explícito que inclua essa variável. Isso acontece devido ao conceito de escopo em JavaScript.

JavaScript tem escopo de função, o que significa que as variáveis declaradas dentro de uma função são visíveis apenas dentro dessa função. No entanto, as variáveis declaradas fora de uma função, conhecidas como variáveis globais, são visíveis e acessíveis em qualquer lugar do código, incluindo dentro de funções.

Aqui está um exemplo:

var globalVar = 10; // Variável global

function manipulaVariavel() {
    globalVar = 20; // Acessando e manipulando a variável global
}

manipulaVariavel();
console.log(globalVar); // Isso imprimirá 20 no console


Neste exemplo, a função manipulaVariavel() acessa e altera o valor da variável global globalVar, mesmo que ela não seja passada como argumento e não haja um retorno explícito na função.

No entanto, é importante ter cuidado ao manipular variáveis globais dentro de funções, pois isso pode levar a efeitos colaterais não intencionais e dificultar a compreensão do código. É uma boa prática manter o escopo das variáveis o mais restrito possível, usando parâmetros de função e retornos explícitos para facilitar a legibilidade e manutenção do código.*/