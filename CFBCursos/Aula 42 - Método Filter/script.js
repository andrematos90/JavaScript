const idades  = [10, 15, 33, 28, 12, 25]

const maiorDeIdade = idades.filter((elemento, index, idade)=>{
    if(elemento >= 18){
       return elemento
    }
})

console.log(maiorDeIdade)


const menorDeIdade = idades.filter((elemento)=>{
    if(elemento < 18){
        return elemento
    }
})

console.log(menorDeIdade)





