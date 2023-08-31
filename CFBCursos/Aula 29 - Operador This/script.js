function aluno(nome, nota){
    this.nome = nome;
    this.nota = nota;

    this.dados_anonimo = function(){
        setTimeout(function(){
            console.log(this.nome);
            console.log(this.nota);
        })
    }

    this.dados_anonimos_arrow = function(){
        setTimeout(()=>{
            console.log(this.nome);
            console.log (this.nota);
        }, 2000);
    }
  
}

aluno1 = new aluno("andré", 8);

aluno1.dados_anonimo();
aluno1.dados_anonimos_arrow();



/*Definição da Função Construtora aluno: É definida uma função chamada aluno que serve como uma "classe" para criar objetos do tipo aluno. Essa função recebe dois parâmetros: nome e nota.

Atributos de Instância: Dentro da função construtora aluno, são definidos dois atributos de instância: nome e nota. Esses atributos são inicializados com os valores passados como argumentos para a função construtora.

Método dados_anonimo: É definido um método chamado dados_anonimo. Este método utiliza a função setTimeout para agendar a execução de uma função anônima após algum tempo. No entanto, há um problema aqui: dentro da função anônima, o valor de this não está se referindo ao objeto aluno atual, mas sim ao escopo global ou à função setTimeout em si. Isso ocorre porque o valor de this muda quando você entra em funções internas.

Método dados_anonimos_arrow: É definido outro método chamado dados_anonimos_arrow. Este método também utiliza a função setTimeout, mas dentro da função de settimeout é usada uma função de seta (() => {}) em vez de uma função anônima regular. As funções de seta preservam o valor de this do contexto em que foram criadas, então nesse caso, this continua se referindo ao objeto aluno atual.

Criação do Objeto aluno1: É criada uma instância da classe aluno com o nome "andré" e a nota 8, e essa instância é atribuída à variável aluno1.

Chamada de Métodos: São chamados os métodos dados_anonimo e dados_anonimos_arrow do objeto aluno1. No entanto, devido às diferenças na definição das funções anônimas, os resultados serão diferentes.

O método dados_anonimo imprimirá undefined para this.nome e this.nota porque o valor de this dentro da função anônima não aponta para o objeto aluno1. Portanto, o resultado será algo como: undefined

O método dados_anonimos_arrow, por outro lado, imprimirá "andré" e "8" após um atraso de 2000 milissegundos (2 segundos), porque as funções de seta mantêm o valor correto de this:

andré
8

Em resumo, o código ilustra a diferença entre o uso de funções anônimas regulares e funções de seta em relação à preservação do valor de this dentro do contexto da função.










