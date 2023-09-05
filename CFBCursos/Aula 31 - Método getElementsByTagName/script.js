const element1 = document.getElementById('div1');
const element2 = document.getElementById('div2');
const element3 = document.getElementById('div3');
const element4 = document.getElementById('div4');
const element5 = document.getElementById('div5');
const element6 = document.getElementById('div6');

let array = [element1, element2, element3, element4, element5, element6]



console.log(array);

array.map((element)=>{
    element.innerHTML = "alterado";
    console.log(element)
   
})














