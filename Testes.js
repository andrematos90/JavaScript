
let profissao = ''
switch (profissao) {
    case 'policial':
        uniforme = 'farda'
        console.log(`${profissao} ${uniforme}`)
        break

    case  'bombeiro':
        uniforme = 'camisa vermelha'
        console.log(`${profissao} ${uniforme}`)
        break

    case 'médico':
        uniforme = 'camisa branca'
        console.log(`${profissao} ${uniforme}`)
        break

    case 'guarda':
        uniforme = 'camisa azul'
        console.log(`${profissao} ${uniforme}`)
        break
    default:
        uniforme = 'sem unifome'
        console.log(`${uniforme}`)
}