// objeto é semelhante ao array, mas é uma lista desordenada ou grupo de informações, com propriedade e valor


let personagem = {
    nome: 'andre',
    idade: 32,
    pais: 'Brasil',
    caracteristicas: { forca: 5, velocidade:10 }, // objeto dentro de um objeto
    olhos: ['preto', 'castanho'] // array dentro de objeto
}


console.log(personagem.idade); //acessando uma propriedade dentro do objeto


console.log(`${personagem.nome} tem ${personagem.idade} anos.`)

console.log(personagem.caracteristicas.velocidade); //acessando objeto dentro de outro objeto
console.log(personagem.olhos[0]); // acessando array dentro de objeto



