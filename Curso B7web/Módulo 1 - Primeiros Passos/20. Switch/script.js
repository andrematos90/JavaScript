/* 
Switch é uma condicional com multiplos resultados

exemplo: depedendo da profissao a pessoa usa uma determinada cor de 
camisa 
*/


let profession = "policial";

console.log(`Profissão: ${profession}`)

switch(profession) {
    case 'fiscal':
        console.log("Camisa Verde");
        
    break;
    case 'bombeiro':
        console.log("Camisa Vermelha");

    break;
    
    case 'policial':
        console.log("Camisa Azul");

    break;

    default:
        console.log("Camisa Amarela"); // quando nenhuma das condicionais 
                                       // forem satisfeitas,  pode se usar uma condição padrão 
        break;
}

