// Obtém o elemento com o id "numero" do DOM
const numero = document.getElementById("numero");

// Cria uma nova Promise com uma função de callback que recebe os argumentos resolve e reject
let promessa = new Promise((resolve, reject) => {
    let resultado = true;
    let tempo = 3000; // Tempo de espera em milissegundos (3 segundos)

    // Utiliza a função setTimeout para aguardar o tempo definido antes de executar o código interno
    setTimeout(() => {
        if (resultado) {
            // Se a variável resultado for verdadeira, a Promise é resolvida com o valor 'ok'
            resolve('ok');
        } else {
            // Caso contrário, a Promise é rejeitada com o valor 'erro'
            reject('erro');
        }
    }, tempo); // Tempo de espera definido para a execução do código interno
});

// Manipula a Promise quando ela é resolvida (sucesso)
promessa.then((retorno) => {
    // Atualiza o conteúdo do elemento com o valor retornado da Promise ('ok' neste caso)
    numero.innerHTML = retorno;
    // Remove a classe "erro" do elemento (se estiver presente)
    numero.classList.remove("erro");
    // Adiciona a classe "ok" ao elemento para estilização ou marcação de sucesso
    numero.classList.add("ok");
});

// Manipula a Promise quando ela é rejeitada (erro)
promessa.catch((retorno) => {
    // Atualiza o conteúdo do elemento com o valor retornado da Promise ('erro' neste caso)
    numero.innerHTML = retorno;
    // Remove a classe "ok" do elemento (se estiver presente)
    numero.classList.remove("ok");
    // Adiciona a classe "erro" ao elemento para estilização ou marcação de erro
    numero.classList.add("erro");
});

// Define o conteúdo inicial do elemento antes de esperar pela resolução da Promise
numero.innerHTML = "Processando...";


/*
No código acima, o elemento com o id "numero" começa exibindo a mensagem "Processando...". A seguir, uma Promise é criada, e após 3 segundos (3000 milissegundos) utilizando setTimeout, ela é resolvida com o valor 'ok' ou rejeitada com o valor 'erro', dependendo do valor da variável resultado. Quando a Promise é resolvida, o elemento é atualizado com o valor 'ok', e a classe 'ok' é adicionada para estilização. Se a Promise for rejeitada, o elemento é atualizado com o valor 'erro', e a classe 'erro' é adicionada para estilização.

Essa estrutura de Promise permite uma execução assíncrona, o que é útil para casos em que uma tarefa leva tempo para ser concluída, como operações de rede ou leitura/gravação em disco, permitindo que a interface do usuário continue respondendo durante a espera.*/



/*

código sincrono


const numero = document.getElementById("numero");

let resultado = false;
let tempo = 3000;

setTimeout(() => {
    resultado = true;
}, tempo)


if(resultado){
    numero.innerHTML="Deu certo";
    numero.classList.remove("erro");
    numero.classList.add("ok");
}else{
    numero.innerHTML="ERRO!";
    numero.classList.add("erro");
    numero.classList.remove("ok");
}

numero.innerHTML="Processando..."

*/