/* Crie uma função que valide usuario  e senha.
Usuario correto: andre
senha correta: 123
*/

//usa da função?


function validar(usuario, senha) {
    if (usuario === 'andre' && senha === '123') {
        return true;
    } else {
        return false;
    }
}


let usuario = 'and';
let senha = '123'
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso concedido');
} else {
    alert('Acesso Negado!')
}

/*
function login(user='andre', password=123){
    if (user != 'andre' || password != 123)
    return false
    else {
        return true
    }
    
}

let usuario = prompt('Usuário: ');
var senha = prompt('Senha: ');
validacao = login(usuario, senha)
if (validacao){
    console.log('Login Realizado com Sucesso!')
}
else{
    console.log('Usúario ou Senha incorretos!')
}*/ 