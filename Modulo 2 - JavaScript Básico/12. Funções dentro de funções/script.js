function addraiz(a, b) {
    function raiz(x) {
        return x * x;
    }
    let raizA = raiz(a);
    let raizB = raiz(b);
    return raizA + raizB;
}
console.log((addraiz(2, 3)));

/*
Mesma função dentro de outra função, mas com arrow function

function addraiz(a, b) {
    const raiz = -x) =>  x * x;
    let raizA = raiz(a);
    let raizB = raiz(b);
    return raizA + raizB;
}
-
console.log((addraiz(2, 3)));
*/