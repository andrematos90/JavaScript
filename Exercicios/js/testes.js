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