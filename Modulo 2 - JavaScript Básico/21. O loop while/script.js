// loop while é a mesma coisa que for, mas de forma diferente, o uso depende do que é preciso

let numero = 0;

while (numero <= 10 ) {                               //condicionao que enquanto for verdadeira roda o condigo a seguir que da um console e incrementa o numero em mais 1
console.log(`O numnero da vez é: ${numero}`);
numero++;  // no while a variavel tem que ser "alterada" para o codigo nao ser executado eternamente
}


/* codigo que faz exatamente a mesma coisa mas com "for", com o "while" é mais "desmenbrado"

for (let numero = 0; numero <= 10; numero++ {
    console.log( `o numero da ver é: ${numero}`)/
}

*/