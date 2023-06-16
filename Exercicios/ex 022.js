/*Crie um objeto chamado estudante com as seguintes propriedades:

nome: uma string com o nome do estudante.
idade: um número inteiro representando a idade do estudante.
curso: uma string com o nome do curso que o estudante está matriculado.
Adicione um método chamado apresentar ao objeto estudante. Esse método deve retornar uma string formatada contendo as informações do estudante.

Utilizando o objeto estudante, imprima no console a string retornada pelo método apresentar.*/

let estudante = { 
    nome: 'andré',
    idade: 33,
    curso: 'javascript',
    metodo: function(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`curso: ${this.curso}`);
    }   
}

estudante.metodo();

/*Inicialmente, um objeto chamado estudante é criado usando a sintaxe de chaves {}.
Dentro desse objeto, são definidas três propriedades: nome, idade e curso. Os valores correspondentes são fornecidos para cada uma dessas propriedades.
nome: 'andré' define a propriedade nome com o valor 'andré'.
idade: 33 define a propriedade idade com o valor 33.
curso: 'javascript' define a propriedade curso com o valor 'javascript'.
Em seguida, é definido um método chamado metodo dentro do objeto estudante. O método é uma função anônima que não recebe nenhum parâmetro.
O corpo do método é definido com chaves {} e contém três instruções console.log(), que imprimem informações do estudante no console:
console.log(Nome: ${this.nome}); imprime o valor da propriedade nome do objeto estudante.
console.log(Idade: ${this.idade}); imprime o valor da propriedade idade do objeto estudante.
console.log(Curso: ${this.curso}); imprime o valor da propriedade curso do objeto estudante.
Aqui, this é uma referência ao objeto estudante que está invocando o método.
Por fim, fora da definição do objeto, é feita a chamada para o método metodo do objeto estudante usando a notação de ponto (estudante.metodo()).
Isso executa o código dentro do método, que imprime as informações do estudante no console.*/
   