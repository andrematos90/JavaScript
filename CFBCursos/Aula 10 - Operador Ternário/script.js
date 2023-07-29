let num = 8;


res = !(num %2) ? "par" : "impar";

console.log(res)

// 0 = false
// 1 = true


/*
Em JavaScript, alguns valores são considerados "falsy" quando avaliados em um contexto booleano, ou seja, quando são usados em expressões que esperam um valor verdadeiro (true) ou falso (false). O valor 0 é um dos valores que é considerado "false".

Os valores "falsy" em JavaScript são os seguintes:

false: O próprio valor booleano false.
0: O número zero.
'' (String vazia): Uma string sem nenhum caractere.
null: Representa a ausência de valor.
undefined: Representa uma variável não inicializada.
NaN: Representa um valor que não é um número (Not a Number).

O número zero (0) é o único valor numérico que é considerado "falsy" e é tratado como false em expressões booleanas.*/