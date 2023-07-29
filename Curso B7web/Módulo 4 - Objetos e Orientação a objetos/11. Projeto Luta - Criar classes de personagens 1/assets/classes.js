// Classe base para todos os personagens do jogo
class Character {

    // Propriedades com valores padrão para um personagem genérico
    _life = 1; // Vida atual (propriedade interna, deve ser acessada através do getter/setter)
    maxLife = 1; // Vida máxima (não muda após ser definida)
    attack = 0; // Valor do ataque (dano que o personagem causa)
    defense = 0; // Valor da defesa (reduz o dano recebido pelo personagem)

    // Construtor da classe Character, recebe o nome do personagem como parâmetro
    constructor(name) {
        this.name = name; // Atribui o nome do personagem ao atributo "name"
    }

    // Getter para a propriedade "_life"
    get life() {
        return this._life; // Retorna a vida atual do personagem
    }

    // Setter para a propriedade "_life"
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife; // Define a vida atual do personagem, garantindo que não seja menor que zero (mínimo 0)
    }
}

// Classe Knight (Cavaleiro) - Subclasse de Character
class Knight extends Character {

    // Construtor da classe Knight, recebe o nome do cavaleiro como parâmetro
    constructor(name) {
        // Chama o construtor da classe pai (Character) passando o nome do cavaleiro
        super(name);

        // Define valores específicos para as propriedades do cavaleiro
        this.life = 100; // Vida inicial do cavaleiro é 100
        this.attack = 10; // Valor do ataque do cavaleiro é 10
        this.defense = 8; // Valor da defesa do cavaleiro é 8
        this.maxLife = this.life; // Define a vida máxima do cavaleiro como sendo a vida inicial (100)
    }
}

// Classe Sorcerer (Feiticeiro) - Subclasse de Character
class Sorcerer extends Character {

    // Construtor da classe Sorcerer, recebe o nome do feiticeiro como parâmetro
    constructor(name) {
        // Chama o construtor da classe pai (Character) passando o nome do feiticeiro
        super(name);

        // Define valores específicos para as propriedades do feiticeiro
        this.life = 80; // Vida inicial do feiticeiro é 80
        this.attack = 14; // Valor do ataque do feiticeiro é 14
        this.defense = 3; // Valor da defesa do feiticeiro é 3
        this.maxLife = this.life; // Define a vida máxima do feiticeiro como sendo a vida inicial (80)
    }
}



/*

Classe Character:

A classe Character é a classe base para todos os personagens do jogo.
Ela possui quatro propriedades: _life, maxLife, attack e defense. Note que _life é uma propriedade interna (com o underscore no início) e, portanto, não deve ser acessada diretamente fora da classe. O acesso à vida do personagem é feito através da propriedade life, que é definida como um "getter" e "setter".
O construtor da classe Character recebe um parâmetro name, que é usado para atribuir um nome ao personagem.
O "getter" life retorna o valor da vida atual do personagem (_life).
O "setter" life é usado para definir o valor da vida do personagem, mas antes de atribuir o novo valor, ele verifica se o novo valor é menor que zero. Se for, ele define a vida como zero (personagem morto). Caso contrário, define o novo valor.
Classe Knight:

A classe Knight é uma subclasse (classe filha) da classe Character. Isso significa que ela herda todas as propriedades e métodos da classe Character.
No construtor, a classe Knight chama o construtor da classe Character usando super(name) para definir o nome do cavaleiro.
Em seguida, o construtor da classe Knight define valores específicos para as propriedades life, attack, defense e maxLife do cavaleiro.
Classe Sorcerer:

A classe Sorcerer é outra subclasse (classe filha) da classe Character. Ela também herda todas as propriedades e métodos da classe Character.
Assim como na classe Knight, o construtor da classe Sorcerer chama o construtor da classe Character usando super(name) para definir o nome do feiticeiro.
O construtor da classe Sorcerer define valores específicos para as propriedades life, attack, defense e maxLife do feiticeiro.
Resumindo, este código cria três classes que descrevem diferentes tipos de personagens para um jogo. A classe Character serve como uma classe base genérica para todos os personagens, enquanto as classes Knight e Sorcerer são subclasses que herdam características da classe Character e adicionam valores específicos para cada tipo de personagem (cavaleiro e feiticeiro).*/