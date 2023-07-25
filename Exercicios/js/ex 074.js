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


const elementoBotao = document.querySelector('#botao-enviar');
elementoBotao.addEventListener('click', enviaArquivo);

function enviaArquivo() {
    const arquivo = document.getElementById('arquivo').files[0];

    if (!arquivo) {
        alert('Selecione um arquivo para upload!');
        return;
    }

    const body = new FormData();
    body.append('title', 'foto');
    body.append('arquivo', arquivo);

    fetch('https://meusite.com.br.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            // Não é necessário definir o Content-Type quando se usa FormData.
        }
    })
    .then(response => {
        if (response.ok) {
            console.log('Upload realizado com sucesso!');
            // Aqui, você pode tratar a resposta do servidor, caso necessário.
            // Por exemplo, se o servidor retornar um JSON contendo alguma informação importante.
        } else {
            throw new Error('Erro no upload do arquivo.'); 
        }
    })
    .catch(error => {
        alert('Ocorreu um erro durante o upload do arquivo: ' + error.message);
    });
}


/*
COM ASYNC AWAIT

const elementoBotao = document.querySelector('#botao-enviar');
elementoBotao.addEventListener('click', enviaArquivo);

async function enviaArquivo() {
    const arquivo = document.getElementById('arquivo').files[0];

    if (!arquivo) {
        alert('Selecione um arquivo para upload!');
        return;
    }

    const body = new FormData();
    body.append('title', 'foto');
    body.append('arquivo', arquivo);

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
            throw new Error('Erro no upload do arquivo.');
        }
    } catch (error) {
        alert('Ocorreu um erro durante o upload do arquivo: ' + error.message);
    }
}

*/

