/*
Desafios JavaScript
Básico 3
Escreva uma função que recebe 6 parâmetros
(a,b,c,d,e,f)
Faça a soma de a com b
O resultado da soma, subtraia o valor de c.
O resultado da subtração, muitiplique por d e
faça divisão por e
E para finalizar, faça o resultado elevado à
potência de f
*/

const soma = (a, b, c, d, e, f) => ((a + b - c) * d / e )** f
console.log(soma(6,5,4,3,2,1)) // 10.5
console.log(soma(6,2,1,4,2,3)) // 2744
console.log(soma(2,3,6,4,2,3)) // -8

/*
Precedência 
1- ()
2- **
3- * / %
4- + -
*/
