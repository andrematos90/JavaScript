

// Definição da classe Pessoa
class Pessoa {
    // Propriedade 'idade' da classe Pessoa, inicializada com o valor 0
    idade = 0;

    // Construtor da classe Pessoa
    constructor(nome) {
        // Propriedade 'nome' da classe Pessoa, atribuída com o valor passado como parâmetro
        this.nome = nome;
    }

    dizOi(){
        console.log(`${this.nome} diz oi`);
    }
}

// Definição da classe Estudante, que herda da classe Pessoa
class Estudante extends Pessoa {
    // Construtor da classe Estudante
    constructor(nome, matricula) {
        // Chamada ao construtor da classe Pessoa usando 'super', para inicializar o nome
        super(nome);
        // Propriedade 'matricula' da classe Estudante, atribuída com o valor passado como parâmetro
        this.matricula = matricula;
    }
}

// Criação de uma instância da classe Estudante, chamando o construtor com os argumentos 'André' e 33
let pessoa1 = new Estudante('André', 335);

//atribuindo o valor 33 ao atributo idade da classe pessoa, devido a classe estudante herdar tudo 
pessoa1.idade =33;

// Exibindo o nome, idade e a matricula da pessoa1
console.log(`${pessoa1.nome} tem ${pessoa1.idade} anos e matricula ${pessoa1.matricula}`);

// o objeto pessoa1 consegue chamar o método da classe pessoa pois sua classe que é a de estudante herda  todos os métodos da classe base
pessoa1.dizOi();


