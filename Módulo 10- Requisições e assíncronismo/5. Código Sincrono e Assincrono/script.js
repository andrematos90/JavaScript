let cartao = '112345654488945848';

let lasDigits = cartao.slice(-4);

let cartaoMascarado = lasDigits.padStart( 16, '*');

console.log( 'Este é o seu cartão? '+cartaoMascarado);


