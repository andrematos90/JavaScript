class Person {
    //variáveis com valor que será igual em todos os objetos criados a partir dessa classe
    age = 0; // Variável de instância que armazenará a idade, inicializada com valor 0.
    paçodado = 0; // Variável de instância que armazenará a quantidade de passos, inicializada com valor 0.

    constructor(name) {
        this.name = name; // O construtor recebe um parâmetro "name" e atribui esse valor à variável de instância "name".
    }

    //ações (métodos) que os objetos criados a partir da classe poderão executar
    somamaisumPaço() {
        this.paçodado++; // Método que incrementa em 1 a variável de instância "paçodado" toda vez que é chamado.
    }

    adicionaAge(newAge) {
        if (typeof newAge == 'number') {
            this.age = newAge; // Método que atribui uma nova idade ao objeto, verificando se o valor passado é um número.
        } else {
            console.log('o Parâmetro "idade" aceita apenas números!'); // Caso o valor passado não seja um número, exibe uma mensagem de aviso no console.
        }
    }
}

// Criação de dois objetos a partir da classe Person:
let pessoa = new Person('André'); // Cria um objeto chamado "pessoa" com nome "André" 
pessoa.somamaisumPaço(); // Chama o método somamaisumPaço() para o objeto "pessoa", incrementando a quantidade de passos.

pessoa.adicionaAge(33); // Chama o método adicionaAge(33) para o objeto "pessoa", definindo a idade como 33.

let pessoa1 = new Person('Giovanna'); // Cria um segundo objeto chamado "pessoa1" com nome "Giovanna" 

// Exibe informações sobre os objetos no console:
console.log(`${pessoa.name} deu ${pessoa.paçodado} passo(s)`); // Exibe o nome e a quantidade de passos da primeira pessoa.
console.log(`${pessoa.name} tem ${pessoa.age} anos de idade`); // Exibe o nome e a idade da primeira pessoa.
console.log(`${pessoa1.name} tem ${pessoa1.age} anos de idade`); // Exibe o nome e a idade da segunda pessoa.
console.log(`${pessoa1.name} deu ${pessoa1.paçodado} passo(s)`); // Exibe o nome e a quantidade de passos da segunda pessoa.



/*
Definição da classe Person:

A classe Person é definida com a seguinte estrutura:
Possui duas variáveis de instância, age e paçodado, que serão iguais em todos os objetos criados a partir dessa classe. age é inicializada com o valor 0, e paçodado também é inicializada com 0.
Tem um construtor que recebe um parâmetro name e atribui esse valor à variável de instância name.
Métodos da classe Person:

somamaisumPaço(): Este método incrementa em 1 a variável paçodado de cada objeto criado a partir da classe.
adicionaAge(newAge): Este método permite adicionar uma idade (newAge) ao objeto somente se newAge for um número. Caso contrário, é exibida uma mensagem de aviso no console.
Criação de objetos:

let pessoa = new Person('André', 33);: Aqui é criado um objeto chamado pessoa com o nome "André" e idade 33. A variável paçodado é inicializada como 0.
pessoa.somamaisumPaço();: O método somamaisumPaço() é chamado para o objeto pessoa, incrementando paçodado para 1.
pessoa.adicionaAge(33);: O método adicionaAge(33) é chamado para o objeto pessoa, atribuindo 33 à variável age.
let pessoa1 = new Person('Giovanna', 25);: Outro objeto chamado pessoa1 é criado com o nome "Giovanna" e idade 25. A variável paçodado é inicializada como 0.
Impressão dos resultados:

console.log(${pessoa.name} deu ${pessoa.paçodado} passo(s));: Exibe no console o nome e a quantidade de passos (paçodado) do objeto pessoa.
console.log(${pessoa.name} tem ${pessoa.age} anos de idade);: Exibe no console o nome e a idade (age) do objeto pessoa.
console.log(${pessoa1.name} tem ${pessoa1.age} anos de idade);: Exibe no console o nome e a idade (age) do objeto pessoa1.
console.log(${pessoa1.name} deu ${pessoa1.paçodado} passo(s));: Exibe no console o nome e a quantidade de passos (paçodado) do objeto pessoa1.

Observações:

O objeto pessoa1 não teve a idade definida explicitamente, por isso permanece com o valor inicial 0.
É importante notar que, no construtor da classe, é fornecido um parâmetro name, mas não há uma forma de definir a idade no momento da criação do objeto. A idade só é definida posteriormente através do método adicionaAge(newAge).*/