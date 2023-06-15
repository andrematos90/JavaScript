/*
Crie um programa que faça uma contagem regressiva a partir de um número fornecido pelo usuário até zero. O programa deve exibir cada número da contagem regressiva no console. */




let numero = prompt('Digite um número: ')
console.log(`numero fornecedo pelo usuário: ${numero}`)
console.log('Contagem..')

for (let c = numero; c >= 0; c--){
  console.log(`${c}`)
}