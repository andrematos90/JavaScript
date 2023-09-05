
const element1 = document.getElementById('div1');
const element2 = document.getElementById('div2');
const element3 = document.getElementById('div3');
const element4 = document.getElementById('div4');
const element5 = document.getElementById('div5');
const element6 = document.getElementById('div6');

// arrays com os elementos (pode se usar métodos de array)
let array = [element1, element2, element3, element4, element5, element6]
console.log(array);

//HTML collection com os elementos
let elementos = document.getElementsByTagName("div");
console.log(elementos);


//para poder usar funções de array pode ser fazer uma copia com o operador spead
elementos = [...elementos];

elementos.map((elemento) => {
    console.log(elemento);
})













