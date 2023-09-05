let elementos = document.getElementsByClassName('minhaclassevermelha');

elementos = [...elementos];

function mudaCor() {
    elementos.map((elemento) => {
        elemento.classList.add('azul');
    });
}










