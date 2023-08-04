let char = new Knight('andre');
let monster = new BigMonster(); 

// instancia um novo objeto log com elemento html que vai ser a listagem
let log = new Log(document.querySelector('.log')) 

const stage = new Stage(
    //parametros que na classe stage se tornaram fighter1, fighter2, fighter1Element, fighter2Element
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log,
);

stage.start();





