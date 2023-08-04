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


