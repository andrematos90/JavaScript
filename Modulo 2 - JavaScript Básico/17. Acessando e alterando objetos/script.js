/*let personagem = {
    nome: 'andre',
    idade: 32,
    pais: 'Brasil',
    caracteristicas: { forca: 5, velocidade:10 }, // objeto dentro de um objeto
    olhos: ['preto', 'castanho'] // array dentro de objeto
}




personagem.nome = 'Matos'; // alterando o valor 

console.log(personagem.nome);

personagem.caracteristicas.forca += 5; // alterando objeto dentro de objeto

console.log(`A força é: ${personagem.caracteristicas.forca}`);

personagem.olhos.push('verde'); //adicionando mais um valor no array dentro do objeto
                               // com a função push() esse metodo só funciona com array

    */                        

let personagem = {
    nome: 'andre',
    idade: 32,
    carros: [
        {modelo: 'fiat', cor: 'preto'},
        {modeloo: 'twingo', cor: 'prata'}
    ]
}


personagem.carros[0].modelo  //acessando objeto dentro de array
