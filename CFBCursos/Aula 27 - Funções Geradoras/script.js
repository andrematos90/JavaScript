function* cores(){
    yield 'vermelho';
    yield 'verde';
    yield 'roxo';
}

const iterator = cores()
console.log(iterator.next().value)
console.log(iterator.next().value)


/*
A função geradora cores é definida. Ela contém três instruções yield, cada uma gerando uma cor diferente: 'vermelho', 'verde' e 'roxo'.

A constante iterator é definida ao chamar a função geradora cores().

A primeira vez que o método next() é chamado no iterator, a execução da função geradora começa e para na primeira instrução yield. O valor 'vermelho' é retornado como resultado da chamada do next(). Portanto, a primeira chamada de console.log imprime 'vermelho'.

A segunda vez que o método next() é chamado, a execução da função geradora continua a partir da última instrução yield. A próxima instrução yield é encontrada, e o valor 'verde' é retornado. A segunda chamada de console.log imprime 'verde'.

É importante notar que, após a segunda chamada de console.log, o iterator não possui mais instruções yield a serem executadas. Portanto, se você chamasse o next() novamente, ele retornaria um objeto { value: undefined, done: true }, indicando que a iteração está completa.

Se você quisesse obter a próxima cor ('roxo'), você precisaria adicionar mais uma chamada de console.log(iterator.next().value);.

Espero que isso esclareça o funcionamento das funções geradoras no seu exemplo!*/