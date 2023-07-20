// Função para buscar informações de um usuário usando a API "ReqRes"
function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then((data) => data.json()) // Retorna os dados da resposta como um objeto JavaScript
        .catch((error) => console.log(error)); // Trata erros, caso ocorram, e os exibe no console
}

// Função assíncrona para mostrar o nome do usuário
async function showUserName(id){
    try {
        const user = await getUser(id); // Chama a função assíncrona getUser e aguarda o resultado

        console.log(`Nome do usuário: ${user.data.first_name}`); // Exibe o nome do usuário no console
    } catch(err) {
        console.log(`erro: ${err}`); // Captura e exibe erros, caso ocorram, no console
    }
}

// Chama a função showUserName com o id 3, para buscar e mostrar o nome do usuário com esse id
showUserName(3);



/*Esse código é uma implementação de uma função assíncrona que busca informações de um usuário usando a API "ReqRes". 

A função getUser(id) recebe um parâmetro id, que será o identificador do usuário a ser buscado na API.

Dentro da função getUser, é utilizada a função fetch para fazer uma solicitação HTTP GET à API do "ReqRes" usando o template string para incluir o id fornecido.

A função fetch retorna uma promessa, e com o método .then, encadeamos uma função que chama .json() para analisar os dados da resposta da API. Isso transforma os dados em um objeto JavaScript.

Se a solicitação for bem-sucedida, a função retornará o objeto de dados do usuário. Se ocorrer algum erro durante a solicitação, o catch será acionado e exibirá o erro no console.

A função showUserName(id) é assíncrona (usando async), e nela usamos um bloco try-catch para tratar erros assíncronos.

Dentro da função showUserName, é chamada a função getUser(id) usando await, que aguarda a resolução da promessa retornada pela função getUser.

Se a busca do usuário for bem-sucedida, o nome do usuário é exibido no console usando o valor user.data.first_name, que é o nome do usuário extraído dos dados retornados pela API.

Se ocorrer algum erro durante a busca do usuário (como uma falha na solicitação), o bloco catch capturará o erro e exibirá a mensagem de erro no console.

Portanto, ao chamar a função showUserName(3);, o código buscará o usuário com o id igual a 3 e exibirá o nome desse usuário no console, ou então mostrará uma mensagem de erro caso algo não funcione corretamente durante a busca.


MESMO CÓDIGO COM PROMISE


// Função para buscar informações de um usuário usando a API "ReqRes"
function getUser(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://reqres.in/api/users?id=${id}`)
            .then((data) => data.json()) // Retorna os dados da resposta como um objeto JavaScript
            .then((user) => resolve(user)) // Resolve a Promise com o objeto de usuário
            .catch((error) => reject(error)); // Rejeita a Promise em caso de erro
    });
}

// Função para mostrar o nome do usuário com base no id fornecido
function showUserName(id) {
    getUser(id)
        .then((user) => {
            console.log(`Nome do usuário: ${user.data.first_name}`); // Exibe o nome do usuário no console
        })
        .catch((err) => {
            console.log(`Erro: ${err}`); // Exibe o erro no console, caso ocorra algum problema
        });
}

// Chama a função showUserName com o id 3, para buscar e mostrar o nome do usuário com esse id
showUserName(3);

Nesta versão, utilizamos Promises para lidar com o fluxo assíncrono da busca do usuário na API. A função getUser retorna uma Promise que é resolvida com os dados do usuário se a busca for bem-sucedida, ou rejeitada com um erro, caso ocorra algum problema. Em seguida, na função showUserName, chamamos getUser(id) e usamos os métodos .then e .catch para tratar a resolução ou rejeição da Promise e exibir o nome do usuário ou o erro no console, respectivamente.
*/