/*
Considere o seguinte objeto "pessoa":

let pessoa = {
  nome: "João",
  idade: 25,
  profissao: "Engenheiro"
};

Acesse a propriedade "idade" do objeto "pessoa" e armazene o valor em uma variável chamada "idadeAtual".
Altere a propriedade "profissao" do objeto "pessoa" para "Desenvolvedor".
Adicione uma nova propriedade chamada "cidade" ao objeto "pessoa" e atribua o valor "São Paulo".

*/

let pessoa = {
    nome: "João",
    idade: 25,
    profissao: "Engenheiro" 
}

idadeAtual =  pessoa['idade']
pessoa['profissao'] = 'Desenvolvedor'
pessoa ['cidade'] = 'Sao Paulo'
console.log(pessoa)
