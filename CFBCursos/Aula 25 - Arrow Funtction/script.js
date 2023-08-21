// quando for um código de apenas uma linha pode se retirar as chaves e a palavra "return"
const s = (v1, v2) => v1 + v2;

//quando somente um parâmetro for passado não é necessário os parênteses
const d = v1 =>{
    return v1 / 2;
}


console.log(s(5, 10));
console.log(d(10));
