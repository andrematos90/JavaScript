
/*
parametros sao variaveis que sao passadas na função e 
retornao um valor, essas variaveis só estao disponiveis
dentro da função
*/
function Somar(n1, n2){
let resultado = n1 + n2;
console.log('Resultado: ' + resultado);
}

Somar(22,15); // chamndo a função e inserindo valores como parâmetro


function NomeCompleto(nome, sobrenome) {
  
   console.log(`${nome} ${sobrenome}`);
}

NomeCompleto("andre", "matos");
NomeCompleto("simba", "collie");