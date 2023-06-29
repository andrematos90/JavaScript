/* desta forma as condicionais são independentes, 
e mais de uma pode ser satisfeita
ocasionando erros


let idade = 98;

if (idade < 18) {
    console.log("Você é um criança!");
}

if ( idade > 18) { 
    console.log(" Você é adulto!");
}

if ( idade > 60 ) {
    console.log("Você é idoso!");
}




para tornalas dependentes utilizase o "else if" "se não se"
quando uma é satisfeita as outras sao descartadas 
assim se tem apenas um resultado possivel  */

let idade = 98;

if (idade < 18) {
    console.log("Você é um criança!");
}

else if ( idade >= 18 && idade < 60) { 
    console.log(" Você é adulto!");
}

else if ( idade >= 60 ) {
    console.log("Você é idoso!");
}





