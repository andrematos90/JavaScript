/*Desenvolva um formulário de upload de arquivos utilizando HTML, CSS e JavaScript. O formulário deverá permitir que o usuário selecione um arquivo em seu dispositivo e, ao pressionar o botão "Enviar", o arquivo deverá ser enviado e processado por meio de código JavaScript.

Requisitos:

Crie um formulário HTML contendo os seguintes elementos:

Um campo para seleção do arquivo a ser enviado, utilizando a tag <input type="file">.
Um botão "Enviar" para iniciar o processo de upload.
Utilize CSS para estilizar o formulário de modo a torná-lo mais amigável e atraente visualmente.

Com JavaScript, adicione um evento de escuta ao botão "Enviar" para capturar o arquivo selecionado pelo usuário.

Implemente a funcionalidade de envio do arquivo selecionado para um servidor utilizando AJAX (XMLHttpRequest ou Fetch API). Caso não seja possível realizar o envio para um servidor real, você pode simular o envio exibindo uma mensagem de sucesso ou log no console.

Durante o processo de envio, exiba uma mensagem de carregamento ou um indicador visual para informar o usuário sobre o progresso.

Após o upload, processe o arquivo (por exemplo, exiba informações sobre o arquivo ou seu conteúdo, caso seja um arquivo de imagem ou texto).

Certifique-se de lidar com possíveis erros, como falha no envio ou tipos de arquivos não permitidos.*/


const elementoBotao = document.querySelector('#botao-enviar'); //seleciona o botao de enviar
elementoBotao.addEventListener('click', enviaArquivo); // adiciona um evento ao botao para chamar a função

function enviaArquivo() {
    const arquivo = document.getElementById('arquivo').files[0];  //pega o arquivo selecionado

    if (!arquivo) {
        alert('Selecione um arquivo para upload!');   //verifica o arquivo selecionado
        return;
    }

    const body = new FormData(); // contro o body com o objeto formdata
    body.append('title', 'foto'); //adiciona o titulo como 'foto'
    body.append('arquivo', arquivo); //adiciona o arquivo propriamente

    fetch('https://meusite.com.br.com.br/upload', {    
        method: 'POST',
        body: body,
        headers: {
            // Não é necessário definir o Content-Type quando se usa FormData.
        }
    })
    
    //caso a requisição de certo
    .then(response => {
        if (response.ok) {
            console.log('Upload realizado com sucesso!');
            // Aqui, você pode tratar a resposta do servidor, caso necessário.
            // Por exemplo, se o servidor retornar um JSON contendo alguma informação importante.
        } else {
            throw new Error('Erro no upload do arquivo.'); 
        }
    })
    //caso de erro
    .catch(error => {
        alert('Ocorreu um erro durante o upload do arquivo: ' + error.message);
    });
}


/*
COM ASYNC AWAIT

const elementoBotao = document.querySelector('#botao-enviar');  //seleciona o botao de enviar
elementoBotao.addEventListener('click', enviaArquivo);  // adiciona um evento ao botao para chamar a função

async function enviaArquivo() {   // cria a função assincrona
    const arquivo = document.getElementById('arquivo').files[0];  //pega o arquivo selecionado

    if (!arquivo) {
        alert('Selecione um arquivo para upload!');   //verifica o arquivo selecionado 
        return;
    }

    const body = new FormData();   // contro o body com o objeto formdata
    body.append('title', 'foto');  //adiciona o titulo como 'foto'
    body.append('arquivo', arquivo);  //adiciona o arquivo propriamente


    //o código dentro do bloco try será executado, e caso algum erro ocorra durante a execução, ele será capturado e tratado pelo bloco catch.
    try {
        const response = await fetch('https://meusite.com.br.com.br/upload', {
            method: 'POST',
            body: body,
            // Não é necessário definir o Content-Type quando se usa FormData.
        });

        if (response.ok) {
            console.log('Upload realizado com sucesso!');
            // Aqui, você pode tratar a resposta do servidor, caso necessário.
            // Por exemplo, se o servidor retornar um JSON contendo alguma informação importante.
        } else {
            throw new Error('Erro no upload do arquivo.');  // caso haja algum erro faz com que o bloco catch
        }
    } catch (error) {
        alert('Ocorreu um erro durante o upload do arquivo: ' + error.message);
    }
}

*/

