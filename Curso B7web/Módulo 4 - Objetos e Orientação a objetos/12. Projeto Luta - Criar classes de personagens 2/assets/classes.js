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

// Classe LittleMonster (Pequeno Monstro) - Subclasse de Character
class LittleMonster extends Character {

    // Construtor da classe LittleMonster
    constructor() {
        // Chama o construtor da classe pai (Character) com o nome 'Little Monster'
        super('Little Monster');

        // Define valores específicos para as propriedades do Pequeno Monstro
        this.life = 40; // Vida inicial do Pequeno Monstro é 40
        this.attack = 4; // Valor do ataque do Pequeno Monstro é 4
        this.defense = 4; // Valor da defesa do Pequeno Monstro é 4
        this.maxLife = this.life; // Define a vida máxima do Pequeno Monstro como sendo a vida inicial (40)
    }
}

// Classe BigMonster (Grande Monstro) - Subclasse de Character
class BigMonster extends Character {

    // Construtor da classe BigMonster
    constructor() {
        // Chama o construtor da classe pai (Character) com o nome 'Big Monster'
        super('Big Monster');

        // Define valores específicos para as propriedades do Grande Monstro
        this.life = 120; // Vida inicial do Grande Monstro é 120
        this.attack = 15; // Valor do ataque do Grande Monstro é 15
        this.defense = 6; // Valor da defesa do Grande Monstro é 6
        this.maxLife = this.life; // Define a vida máxima do Grande Monstro como sendo a vida inicial (120)
    }
}


