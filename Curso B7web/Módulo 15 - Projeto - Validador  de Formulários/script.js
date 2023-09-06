// Criação de um objeto Validator para encapsular lógica de validação
let Validator = {
    // Método que lida com o envio do formulário
    handleSubmit: (event) => {
        // Impede o envio padrão do formulário, que recarregaria a página
        event.preventDefault();

        // Define uma variável send como verdadeira, usada para determinar se o formulário pode ser enviado
        let send = true;

        // Obtém uma lista de todos os elementos input dentro do formulário
        let inputs = form.querySelectorAll('input');

        // Chama a função que limpa os erros, para cada vez que clicar adicionar uma mensagem de erro na tela
        Validator.clearErrors();

        // Itera sobre os inputs
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];

            // Chama o método checkInput para verificar se o valor do input atende às regras especificadas
            let check = Validator.checkInput(input);

            // Se check não for verdadeiro, define send como falso e exibe o erro
            if (check !== true) {
                send = false;
                Validator.showError(input, check);
            }
        }

        // Se send for verdadeiro, submete o formulário
        if (send) {
            form.submit();
        }
    },

    // Método para verificar as regras do input
    checkInput: (input) => {
        // Obtém as regras do atributo data-rules do input da vez (por que a função foi chamada no for)
        let rules = input.getAttribute('data-rules');

        if (rules !== null) {
            // Divide as regras em um array
            rules = rules.split('|');

            // Itera sobre as regras
            for (let k in rules) {
                let rDetails = rules[k].split('=');

                switch (rDetails[0]) {
                    case 'required':
                        // Verifica se o campo está vazio (regra: required)
                        if (input.value == '') {
                            return 'Campo não pode ser vazio';
                        }
                        break;
                    case 'min':
                        if (input.value.length < rDetails[1]) {
                            return 'Campo necessita de pelo menos ' + rDetails[1] + ' caracteres';
                        }
                        break;
                    case 'email':
                        if (input.value != '') {
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                            if (!regex.test(input.value.toLowerCase())) {
                                return 'Campo necessita de um email válido!';
                            }
                        }
                        break;
                }
            }
        }
        // Se nenhuma regra falhar, retorna verdadeiro
        return true;
    },

    // Método para exibir mensagens de erro
    showError: (input, error) => {
        // Muda a cor da borda do input para vermelho
        input.style.borderColor = '#FF0000';

        // Cria um elemento div para exibir a mensagem de erro (não anexado ao DOM)
        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        // Insere a mensagem de erro antes do input
        input.parentElement.insertBefore(errorElement, input.nextElementSibling);
    },

    // Limpa as mensagens de erro da tela e a borda vermelha
    clearErrors: () => {
        let inputs = form.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            // Restaura a cor da borda para o estado padrão
            inputs[i].style.border = '';
        }
        let errorElements = document.querySelectorAll('.error');
        for (let i = 0; i < errorElements.length; i++) {
            // Remove as mensagens de erro da tela
            errorElements[i].remove();
        }
    }
};

// Seleciona o formulário com a classe "validator" e adiciona um ouvinte de evento de envio
let form = document.querySelector('.validator');
form.addEventListener('submit', Validator.handleSubmit);
