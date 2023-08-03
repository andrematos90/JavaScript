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
    }

    update() {
        // Atualiza o elemento HTML do Lutador 1 com seu respectivo nome.
        this.fighter1Element.querySelector('.name').innerHTML = this.fighter1.name;
        
        // Atualiza o elemento HTML do Lutador 2 com seu respectivo nome.
        this.fighter2Element.querySelector('.name').innerHTML = this.fighter2.name;
    }
}


/*Este código define uma classe chamada Stage, que é usada para gerenciar a exibição de informações de dois lutadores (fighters) em um cenário (stage) específico. A lógica do código pode ser explicada da seguinte maneira:

Construtor:

O construtor Stage recebe quatro parâmetros: fighter1, fighter2, fighter1Element e fighter2Element.
Os parâmetros fighter1 e fighter2 representam os objetos de lutadores, cada um contendo informações como o nome do lutador (name) e outras propriedades relacionadas.
Os parâmetros fighter1Element e fighter2Element são elementos HTML que representam onde as informações dos lutadores serão exibidas na interface do usuário.
Método start:

O método start é chamado para iniciar o cenário (stage).
Neste caso, a função update é chamada a partir de start().
Método update:

O método update atualiza a exibição dos nomes dos lutadores na interface do usuário.
Ele encontra os elementos HTML com a classe .name dentro de fighter1Element e fighter2Element (que são os elementos fornecidos ao criar uma instância da classe Stage).
Em seguida, atualiza o conteúdo desses elementos com o nome do lutador correspondente.
Isso implica que os elementos fighter1Element e fighter2Element devem conter elementos HTML com a classe .name para que a atualização funcione corretamente.
A ideia geral é que, ao criar uma instância da classe Stage e chamar o método start(), a interface do usuário será atualizada com os nomes dos lutadores fornecidos nos parâmetros fighter1 e fighter2. Isso é útil para criar uma representação simples do cenário de luta na página HTML, onde os nomes dos lutadores são exibidos em algum lugar.*/

