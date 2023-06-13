// 1. No array abaixo qual numero pega a ferrari
let carros = ['bmw', 'ferrari', 'mercedes']
console.log(`o item que pega a ${carros[1]} é o "1"`)

//2. troque a ferrari por "audi"

carros[1] = 'audi'
console.log('Lista com "audi":')
console.log(carros)

//3.adicione "volvo" a lista

carros.push('volvo')
console.log('Lista com "volvo" no final:')
console.log(carros)

//4.exiba quantos itens contém o array 

console.log(`Quantidade de itens: ${carros.length}`)