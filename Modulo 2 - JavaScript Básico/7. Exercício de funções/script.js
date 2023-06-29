/* calcule a porcentagem entre 2 numeros.
Exemplo: 25% de 40 é 10

formula da porcentagem : (y / x ) * 100

uso da função :

let x = 40 ;
let y = 10/
let pct = calcPct(x, y); 
console.log (`${pct}% de ${x} é ${y}`);

*/


function calcPct(x, y) {
    let pct = (y / x)*100
    return pct;
};
let x = 80;
let y = 10;
let pct = calcPct(x, y);

console.log (`${pct}% de ${x} é ${y}`);