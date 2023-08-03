let char = new Knight('andre');
let monster = new BigMonster(); 

const stage = new Stage(
    //parametros que na classe stage se tornaram fighter1, fighter2, fighter1Element, fighter2Element
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
);

stage.start();


/*let char = new Knight('andre');:

Aqui, uma nova instância da classe Knight é criada, passando o nome 'andre' como parâmetro.
A classe Knight provavelmente possui uma construtora que recebe o nome e inicializa o objeto Knight com esse nome.
let monster = new BigMonster();:

Aqui, uma nova instância da classe BigMonster é criada.
A classe BigMonster não recebe nenhum parâmetro em seu construtor.

const stage = new Stage(char, monster, document.querySelector('#char'), document.querySelector('#monster'));:

Uma nova instância da classe Stage é criada, passando as instâncias de Knight e BigMonster, juntamente com dois elementos HTML obtidos usando document.querySelector.
O elemento HTML associado a #char será usado para mostrar as informações do cavaleiro (Knight) char.
O elemento HTML associado a #monster será usado para mostrar as informações do monstro (BigMonster) monster.
stage.start();:

O método start da instância stage é chamado.
O método start internamente chamará o método update para atualizar a exibição das informações do cavaleiro e do monstro na interface do usuário.
Assumindo que as classes Knight e BigMonster têm propriedades como name, a interface do usuário será atualizada com os nomes "andre" (para o cavaleiro) e possivelmente um nome padrão definido para o monstro. Além disso, a atualização também dependerá da estrutura HTML dos elementos associados a #char e #monster, onde a classe .name é usada para exibir o nome dos personagens.*/