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
    constructor(fighter1, fighter2, fighter1Element, fighter2Element, logObject) {
        this.fighter1 = fighter1; // Lutador 1
        this.fighter2 = fighter2; // Lutador 2
        this.fighter1Element = fighter1Element; // Elemento HTML do Lutador 1
        this.fighter2Element = fighter2Element; // Elemento HTML do Lutador 2
        this.log = logObject;
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
        this.fighter1Element.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(2)} Life`;
        
        //calcula a porcentagem de vida, dividindo vida pelo max de vida  vezes 100 e salva na variável
        let fighter1Percentage = (this.fighter1.life / this.fighter1.maxLife * 100);
        /*seta o elemento "bar" com a quantidade de % vida em porcentgem, váriavel (fighter1Percentage)
        % no final serve para indicar que o valor sendo definido é uma porcentagem no css*/
        this.fighter1Element.querySelector('.bar').style.width = `${fighter1Percentage}%`;
        
        // Atualiza o elemento HTML do Lutador 2 com seu respectivo nome e quantidade de vida.
        this.fighter2Element.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)} Life`;

        let fighter2Percentage = (this.fighter2.life / this.fighter2.maxLife * 100);
        this.fighter2Element.querySelector('.bar').style.width = `${fighter2Percentage}%`;
    }

    doAttack(aggressor, victim){
        //verifica se o agressor ou o atacado estão mortos
        if(aggressor.life <= 0 || victim.life <= 0){
            console.log('Ja tá morto caraiiiii!');
            this.log.addMessage('Ja tá morto caraiiiii!');
            return; // interrompe a execução do código e retorna "undefined" voltando para onde a função foi chamada impedindo a continuação do código e consequentemente a execução do ataque.
        }

        //gera um numero aleatório vezes 2 com duas casas decimais no final que será o "fator ou força do ataque"
        let attackFactor = (Math.random() * 2).toFixed(2);

         //gera um numero aleatório vezes 2 com duas casas decimais no final que será o "fator ou força de defesa"
        let defenseFactor = (Math.random() * 2).toFixed(2);
    

        //multiplica a força de ataque do agreessor pelo fator do ataque, o que gerará o ataque atual e os danos
        let actualAttack = aggressor.attack * attackFactor;

        //multiplica a força de defesa do atacado pelo fator de defesa, o que gerará a defesa atual sobe o ataque
        let actuallDefense = victim.attack * defenseFactor;

        //verifica se o ataque atual é maior que a defesa atual, se for decrementa da vida da vitima o valor do ataque 
        if(actualAttack > actuallDefense){
            victim.life -= actualAttack;
            console.log(`${aggressor.name} causou ${actualAttack.toFixed(2)} de dano em ${victim.name}`)
            this.log.addMessage(`${aggressor.name} causou ${actualAttack.toFixed(2)} de dano em ${victim.name}`)
           
        }else{
            console.log(`${victim.name} conseguiu defender o ataque de ${aggressor.name}`)
            this.log.addMessage(`${victim.name} conseguiu defender o ataque de ${aggressor.name}`)
        }

        this.update();
    }

}


// Definição da classe Log
class Log {
    list = []; // Uma propriedade chamada 'list' que será usada para armazenar as mensagens.

    // Construtor da classe, recebe um elemento da lista como parâmetro
    constructor(listElement) {
        this.listElement = listElement;
    }

    // Método para adicionar uma mensagem à lista e renderizar as mensagens no elemento fornecido.
    addMessage(msg) {
        this.list.push(msg); // Adiciona a mensagem à lista.
        this.render(); // Chama o método 'render' para atualizar o conteúdo do elemento da lista.
    }

    // Método para renderizar as mensagens no elemento fornecido.
    render() {
        this.listElement.innerHTML = ''; // Limpa o conteúdo do elemento da lista.

        // Loop para percorrer todas as mensagens na lista e adicionar cada uma como um novo elemento <li> no elemento da lista.
        for (let i in this.list) {
            this.listElement.innerHTML += `<li>${this.list[i]}</li>`; // Adiciona a mensagem como um novo <li>.
        }
    }
}



/* explicação class log


class Log { ... }: Isso define a classe Log.

list = [];: Aqui, uma propriedade list é criada e inicializada com uma matriz vazia. Essa propriedade será usada para armazenar as mensagens.

constructor(listElement) { ... }: O construtor é chamado quando uma nova instância da classe é criada. Recebe um parâmetro listElement, que é um elemento HTML (por exemplo, uma tag <ul>) onde as mensagens serão renderizadas. O construtor associa esse elemento à propriedade listElement da instância.

addMessage(msg) { ... }: Este método permite adicionar uma mensagem à lista. Recebe um parâmetro msg, que representa a mensagem a ser adicionada. A mensagem é inserida no final da matriz list, e em seguida, o método render() é chamado para atualizar o conteúdo no elemento HTML.

render() { ... }: Este método é responsável por renderizar as mensagens na lista no elemento HTML fornecido. Primeiro, ele limpa o conteúdo do elemento (listElement.innerHTML = '') para garantir que a lista seja recriada a partir do zero. Em seguida, ele itera sobre a matriz list e, para cada elemento da matriz, adiciona uma tag <li> ao innerHTML do elemento, exibindo o conteúdo da mensagem. 

Em resumo, esta classe Log permite adicionar mensagens a uma lista e atualizar um elemento HTML para exibir essas mensagens como itens de lista (<li>). Cada vez que uma nova mensagem é adicionada, o método render() é chamado para atualizar a visualização das mensagens no elemento fornecido.*/


