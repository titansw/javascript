/*
Desafios JavaScript
#11 - Arrays
-Escreva uma função que recebe dois arrays como parâmetros.
-Retorne um único array contendo os valores dos dois arrays concatenados, removendo valores duplicados, caso existam.
*/

function myFunction(a, b){
    return [...new Set(a.concat(b))]
}

console.log(myFunction([1, 2, 3], [3, 4, 5]))// [1, 2, 3, 4, 5]
console.log(myFunction([6, 7], [8, 9])) //[6, 7, 8, 9]
console.log(myFunction([-2, -1, 0, 1, 2], [-1, 1, 2, 3])) //[-2, -1, 0, 1, 2, 3]