let numeros = [ 10, 20, 30, 40];

/* --------------------------------------------------------------
executão a mesma coisa (o indice dos elementos)

for(let i= 0; i < numeros.length; i++){
    console.log(i);
}

for(n in numeros){
    console.log(n);
}
-----------------------------------------------------------------*/


/* executão a mesma coisa (o valor  dos elementos)
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

for(n in numeros){
    console.log(numeros[n])
}

--------------------------------------------------------------------*/
// com "of" n imprime diretamente o valor dos elementos 

for( n of numeros ){
    console.log(n)
}