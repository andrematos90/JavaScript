let position = 1;

switch(position){
    case 1: {
        console.log("pole position")
        break;
    }
    case 2: {
        console.log("segundo colocado")
        break;
    }
    case 3: {
        console.log("terceiro colocado")
        break;
    }
    case 4: case 5: case 6: {
        console.log("fora da zona de pontuação")
        break;
    }
    default: {
        console.log("péssima colocação")
        break;
    }
}