// Definição da classe Person
class Person {
    age = 0; // Inicializa o atributo 'age' com o valor padrão de 0

    constructor(name) {
        this.name = name; // Define o atributo 'name' com o valor fornecido no construtor
    }
}

// Função para criar uma instância da classe Person com um nome e idade específicos
function createPerson(name, age) {
    let p = new Person(name); // Cria um novo objeto 'Person' com o nome fornecido
    p.age = age; // Define a idade do objeto criado para o valor fornecido
    return p; // Retorna a instância criada
}

// Criação da instância 'pessoa1' usando a função 'createPerson'
let pessoa1 = createPerson('Andre', 33);

// Exibe a mensagem no console com o nome e idade da pessoa1
console.log(`meu nome é ${pessoa1.name} e tenho ${pessoa1.age} anos`);
