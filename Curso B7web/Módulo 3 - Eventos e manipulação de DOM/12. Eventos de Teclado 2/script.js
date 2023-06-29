
function soltou(parametroeevntquevemosdetalhes){
    console.log(parametroeevntquevemosdetalhes.key)

}
const input = document.querySelector('input');
input.addEventListener('keyup', soltou);

/*sempre que se tem um evento no caso (keyup) sempre vai mandar no paramentro da função
um event que tem detalhes do que aconteceu 

(parametroeevntquevemosdetalhes.key) vem mennos detalhes do que (parametroeevntquevemosdetalhes.code
    
    
para saber se foi  digitada uma letrta comm alt, ctrl, shift apertado

(parametroeevntquevemosdetalhes.shiftkey) returna true ou false
(parametroeevntquevemosdetalhes.altftkey)
(parametroeevntquevemosdetalhes.ctrltkey)
 */