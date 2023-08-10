/*Exercício: Manipulando Números com o Método map

Você foi contratado como desenvolvedor para criar uma aplicação que realiza transformações em um array de números. Sua tarefa é implementar uma série de funções utilizando o método map para cumprir os seguintes requisitos:

Dobrar Números: Crie uma função chamada dobrarNumeros que recebe um array de números e retorna um novo array com todos os números dobrados.

Calcular Quadrados: Implemente a função calcularQuadrados que aceita um array de números e retorna um novo array com os quadrados de cada número.

Conversão de Temperaturas: Desenvolva a função converterParaCelsius que recebe um array de temperaturas em Fahrenheit e retorna um novo array com as temperaturas convertidas para graus Celsius. A fórmula de conversão é: Celsius = (Fahrenheit - 32) * 5/9.

Aplicar Desconto: Crie a função aplicarDesconto que recebe um array de preços e um valor de desconto em porcentagem. A função deve retornar um novo array com os preços reduzidos de acordo com o desconto fornecido.



Lembre-se de utilizar o método map em cada uma das funções para iterar sobre os arrays e realizar as transformações necessárias. Teste suas funções com diversos conjuntos de dados para garantir que elas estão funcionando corretame*/


// Definindo um array de números
const numeros = [10, 22, 34, 45, 66, 88];

// Função para dobrar um número
const dobrarNumero = numero => numero * 2;

// Usando o método map para dobrar cada número no array
const numerosDobrados = numeros.map(dobrarNumero);
console.log("Números Dobrados:", numerosDobrados);

// Função para calcular o quadrado de um número
const calcularQuadrado = numero => numero * numero;

// Usando o método map para calcular o quadrado de cada número no array
const quadradosDosNumeros = numeros.map(calcularQuadrado);
console.log("Quadrados dos Números:", quadradosDosNumeros);

// Função para converter uma temperatura de Fahrenheit para Celsius
const converterParaCelsius = numero => ((numero - 32) * (5 / 9)).toFixed(2);

// Usando o método map para converter cada temperatura no array para Celsius
const temperaturasCelsius = numeros.map(converterParaCelsius);
console.log("Temperaturas em Celsius:", temperaturasCelsius);

// Função para aplicar um desconto a um valor
function aplicarDesconto(numeros, desconto) {
    // Validando o valor do desconto
    if (desconto < 0 || desconto > 100) {
        throw new Error("Desconto deve estar entre 0 e 100");
    }

    // Função para calcular o valor com desconto
    const calcularComDesconto = numero => parseFloat((numero * (100 - desconto)) / 100).toFixed(2);

    // Usando o método map para aplicar o desconto a cada número no array
    const valoresComDesconto = numeros.map(calcularComDesconto);
    return valoresComDesconto;
}

const desconto = 8;
console.log("Valores com Desconto:", aplicarDesconto(numeros, desconto));
