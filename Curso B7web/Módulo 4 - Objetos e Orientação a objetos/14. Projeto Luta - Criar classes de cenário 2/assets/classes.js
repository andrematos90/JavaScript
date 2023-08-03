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


// Classe Stage representa um "cenário" de luta com dois lutadores e seus elementos correspondentes.
class Stage {
    //o
    constructor(fighter1, fighter2, fighter1Element, fighter2Element) {
        this.fighter1 = fighter1; // Lutador 1
        this.fighter2 = fighter2; // Lutador 2
        this.fighter1Element = fighter1Element; // Elemento HTML do Lutador 1
        this.fighter2Element = fighter2Element; // Elemento HTML do Lutador 2
    }

    start() {
        this.update(); // Inicia a atualização dos elementos na tela.

        /*selecina o botao de ataque do figther1 e adiciona um evento de click que chama a função doAttack()
        que recebe como parametros figther1 como agressor e figther2 como vitima */
        this.fighter1Element.querySelector('.attackButton').addEventListener("click", () =>
         this.doAttack(this.fighter1, this.fighter2))

           /*selecina o botao de ataque do figther2 e adiciona um evento de click que chama a função doAttack()
        que recebe como parametros figther2 como agressor e figther1 como vitima */
        this.fighter2Element.querySelector('.attackButton').addEventListener("click", () =>
        this.doAttack(this.fighter2, this.fighter1))
    }

    update() {
        // Atualiza o elemento HTML do Lutador 1 com seu respectivo nome e quantidade de vida.
        this.fighter1Element.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} Life`;
        
        //calcula a porcentagem de vida, dividindo vida pelo max de vida  vezes 100 e salva na variável
        let fighter1Percentage = (this.fighter1.life / this.fighter1.maxLife * 100);
        //seta o elemento "bar" com a quantidade de % vida em porcentgem,, váriavel (fighter1Percentage)
        this.fighter1Element.querySelector('.bar').style.width = `${fighter1Percentage}`;
        
        // Atualiza o elemento HTML do Lutador 2 com seu respectivo nome e quantidade de vida.
        this.fighter2Element.querySelector('.name').innerHTML =
         `${this.fighter2.name} - ${this.fighter2.life} Life`;
        let fighter2Percentage = (this.fighter2.life / this.fighter2.maxLife * 100);
        this.fighter2Element.querySelector('.bar').style.width = `${fighter2Percentage}%`;
    }

    doAttack(aggressor, victim){
        console.log(`${aggressor.name} está atacando ${victim.name}`)

        this.update();
    }
}


