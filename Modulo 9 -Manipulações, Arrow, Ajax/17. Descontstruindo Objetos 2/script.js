let pessoa = { 
    nome: 'André',
    sobrenome: 'Matos',
    idade: 32,
    social: {
        facebook: 'b7web',
        instagram: {
            url:'@andre',
            seguidores: 1000
        }
    }

 };

 function pegarNomeCompleto(obj){
    return obj.nome+' '+obj.sobrenome;
 }
 

 console.log(pegarNomeCompleto(pessoa));

