let lista =  ['45', '4', '9', '16' , '25'];

let lista2 = [];



lista2 = lista.some(function(item){

       return (item > 90) ? true : false; //se le, se item for maior do que 3 então true se nao false

});

let res = lista2;

console.log(res);

