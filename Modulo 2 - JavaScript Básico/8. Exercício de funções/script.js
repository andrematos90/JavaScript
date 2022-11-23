/* calcule o preço do imovel
- m2 = 3000
- se tiver 1 quarto, o m2 é 1x
-se tiver 2 quartos, o m2 é 1.2x
-se tiver 3 quartos, o m2 é 1.5x

Uso da função:
*/




function calcularImovel(metragem, quartos) {

    let m2 = 3000;
    let preco = 0;

    switch (quartos) {
        case 1:
        default:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 * 1.2);
            break;
        case 3:
            preco = metragem * (m2 * 1.5);
            break;

    }

    return preco;
}


let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);
