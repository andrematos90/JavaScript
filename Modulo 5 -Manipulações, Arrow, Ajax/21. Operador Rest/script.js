function adicionar(nomes, ...novosNomes){      // usando operador rest para receber  novos parametros

    let novoConjunto = [
        ...nomes,               // usando operador spread, novo array é criado com nomes e novosNomes
        ...novosNomes
    ];

    return novoConjunto;

}

let nomes = ["bonieky", "paulo"];



let outros = adicionar(nomes, "antonio", "maria", "jose");

console.log(outros);
