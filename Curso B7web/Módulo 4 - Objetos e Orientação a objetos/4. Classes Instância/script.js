class Person {
//constructor é a função que seraá executada quano um novo objeto for instrnaciado
    constructor(name, age){
        //this se refere ao proprio objeto que esta sendo criado
        this.name = name;   //atributo name recebe a variável "name"
        this.age = age //  os atributos name/age não precisariam  ser o mesmo nome das váriaveis  "name e age"
    }
}

// Criando duas instâncias (objetos) da classe "Person" com valores diferentes
let pessoa = new Person('André', 33);
let pessoa1 = new Person('Giovanna', 25);


console.log(`${pessoa.name} e ${pessoa1.name}`)