
function clicou(){
    return "Retorno da função"
}

function ParOuImpar(){
    n1 = 8;
    n2 = 7;
    res = n1 + n1;
    if(res % 2 ==0){
        return "par"
    }
    else{
        return "impar"
    }
}

console.log(clicou());

let resp = ParOuImpar();
console.log(resp);