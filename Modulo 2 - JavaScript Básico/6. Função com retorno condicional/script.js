function maiorDeIDade(idade) {
    if ( idade >= 18 ) {
        return true;
    }
    else{
        return false;
    }
    
}

let idade = 65

let verificacao = maiorDeIDade(idade)

if(verificacao) {
    console.log('é maior de idade');
} else {
    console.log('é menor de idade')
}