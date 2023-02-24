/*
Desafios JavaScript
#12 - Arrays
Escreva uma função que recebe um array 'a' e um número 'b' como parâmetros.
Faça a soma de todos os elementos do array com valor maior do que b.
Retorne a soma.
*/

function myFunction(a, b){
    var soma = 0
    for(const item of a){
        if (item > b){
            soma += item
        }
    }
    return soma
}

console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)) //30
console.log(myFunction([-14, -12, -5, 4, -4], -5)) //0
console.log(myFunction([33, 53, 88, 105, 111], 99)) //216
