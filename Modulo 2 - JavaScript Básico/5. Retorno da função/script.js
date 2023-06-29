
/*

ENTRADA >> PROCESSAMENTO >> SAIDA

A primeira parte da função é criar
A segunda é receber ou passar parametros para a função
A terceira parte da função é o retorno, "saida" ou "resultado"
As funções podem ter ao seu final um retorno padrão
que é 
*/


function NomeCompleto(nome, sobrenome) {
  
   return `${nome} ${sobrenome}`;
}

let completo = NomeCompleto("Andre", "Matos"); // executando a função
                                               // e armazendo o resultado em uma variavel
 console.log(completo);