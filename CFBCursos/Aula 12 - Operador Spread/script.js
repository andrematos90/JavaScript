
objs1 = document.getElementsByTagName('div');
console.log(objs1); // imprime um HTMLCollection

objs2 = [...document.getElementsByTagName('div')];
console.log(objs2);










/*const jogador1 = {nome: 'André', energia: 40, vida: 20, magia:100};
const jogador2 = {nome: 'Ana', energia: 80, vida: 10, velocidade: 50};
const jogador3 = {...jogador1, ...jogador2};
console.log(jogador3);

O que acontece é que as propriedades dos dois objetos anteriores são combinadas em um novo objeto, jogador3. As propriedades do jogador1 são copiadas primeiro e, em seguida, as propriedades do jogador2 são copiadas. Se houver propriedades com o mesmo nome em ambos os objetos, o valor da propriedade do segundo objeto (no caso, jogador2) substituirá o valor da propriedade correspondente do primeiro objeto (jogador1).*/