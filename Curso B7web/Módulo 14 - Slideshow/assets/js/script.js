// Obtém a quantidade total de slides no slider
let totalSlides = document.querySelectorAll('.slider--item').length;

// Define o índice do slide atual como 0
let currentSlide = 0;

// Obtém a largura do slider
let sliderWidth = document.querySelector('.slider').clientWidth;

// Define a largura total do elemento que contém todos os slides
document.querySelector('.slider--width').style.width = 
    `${sliderWidth * totalSlides}px`;

// Define a largura e a altura do controle de navegação do slider
document.querySelector('.slider--controls').style.width = 
    `${sliderWidth}px`;
document.querySelector('.slider--controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`;

// Função para ir para o slide anterior
function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1; // Volta para o último slide se estiver no primeiro
    }
    updateMargin(); // Atualiza a margem esquerda para mostrar o slide atual
}

// Função para ir para o próximo slide
function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides-1)) {
        currentSlide = 0; // Volta para o primeiro slide se estiver no último
    }
    updateMargin(); // Atualiza a margem esquerda para mostrar o slide atual
}

// Função para atualizar a margem esquerda para exibir o slide atual
function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = 
        `-${newMargin}px`; // Define a margem esquerda negativa para mostrar o slide correto
}



/*

// Obtém a quantidade total de slides no slider
let totalSlides = document.querySelectorAll('.slider--item').length;
Nesta linha, estamos selecionando todos os elementos que possuem a classe CSS "slider--item" e contando quantos elementos foram encontrados. Isso nos dará o número total de slides no slider.


// Define o índice do slide atual como 0
let currentSlide = 0;
Aqui, estamos inicializando a variável "currentSlide" com o valor 0, que representa o índice do slide atual. Inicialmente, o slide exibido será o primeiro, pois o valor do índice é 0.


// Obtém a largura do slider
let sliderWidth = document.querySelector('.slider').clientWidth;
Aqui, estamos obtendo a largura do elemento que possui a classe CSS "slider". Isso nos dará a largura do slider, que será usada para definir a largura de outros elementos posteriormente.


// Define a largura total do elemento que contém todos os slides
document.querySelector('.slider--width').style.width = 
    `${sliderWidth * totalSlides}px`;
Nesta linha, estamos definindo a largura do elemento que contém todos os slides (provavelmente um elemento wrapper). A largura é calculada multiplicando a largura do slider pelo número total de slides e, em seguida, definindo-a como estilo usando style.width.


// Define a largura e a altura do controle de navegação do slider
document.querySelector('.slider--controls').style.width = 
    `${sliderWidth}px`;
document.querySelector('.slider--controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`;
Aqui, estamos definindo a largura e a altura do controle de navegação do slider. O controle de navegação provavelmente é usado para permitir que o usuário navegue entre os slides. A largura é definida para ser igual à largura do slider, enquanto a altura é definida como a altura do elemento que possui a classe CSS "slider".


// Função para ir para o slide anterior
function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1; // Volta para o último slide se estiver no primeiro
    }
    updateMargin(); // Atualiza a margem esquerda para mostrar o slide atual
}
Aqui, temos uma função chamada goPrev(), que é responsável por ir para o slide anterior. Ela decrementa o valor do currentSlide (índice do slide atual) e, se o currentSlide for menor que 0 (ou seja, o primeiro slide), ele é ajustado para o índice do último slide. Em seguida, a função updateMargin() é chamada para exibir o slide atual.


// Função para ir para o próximo slide
function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides-1)) {
        currentSlide = 0; // Volta para o primeiro slide se estiver no último
    }
    updateMargin(); // Atualiza a margem esquerda para mostrar o slide atual
}
Aqui, temos uma função chamada goNext(), que é responsável por ir para o próximo slide. Ela incrementa o valor do currentSlide (índice do slide atual) e, se o currentSlide for maior que o índice do último slide, ele é ajustado para 0 (ou seja, o primeiro slide). Em seguida, a função updateMargin() é chamada para exibir o slide atual.


// Função para atualizar a margem esquerda para exibir o slide atual
function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = 
        `-${newMargin}px`; // Define a margem esquerda negativa para mostrar o slide correto
}
Nesta função updateMargin(), estamos obtendo a largura de um único slide (elemento com a classe CSS "slider--item") e calculando a nova margem esquerda com base no índice do slide atual. Em seguida, definimos a margem esquerda negativa do elemento que contém todos os slides (provavelmente o elemento com a classe CSS "slider--width") para exibir o slide correto na tela.
*/
