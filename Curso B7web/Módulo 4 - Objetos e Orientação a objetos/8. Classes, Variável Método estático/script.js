

    // Definição da classe Person
class Person {
       //static sinaliza que a váriavel esta relacionada com a classe mas não com os objetos que serão instanciados apartir dela

    static hands = 2;

    // Propriedade de instância 'age', específica para cada objeto criado a partir da classe
    age = 0;

    // Construtor da classe Person, recebe o parâmetro 'name'
    constructor(name) {
        // Atribui o parâmetro 'name' à propriedade de instância 'name'
        this.name = name;
    }

    // Método 'sayHi' da classe Person
    sayHi() {
        // Acessa a propriedade estática 'hands' diretamente na classe usando 'Person.hands'
        // Exibe uma mensagem com o nome da pessoa e o número de mãos (valor da propriedade estática)
        console.log(`Me chamo ${this.name} e tenho ${Person.hands} mãos.`);
    }
}

// Criando uma instância da classe Person com o nome 'André'
let pessoa1 = new Person('André');

// Chamando o método 'sayHi()' na instância 'pessoa1'
pessoa1.sayHi();

