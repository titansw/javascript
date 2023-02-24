/*
Desafios JavaScript
#10 - Arrays
Escreva uma função que recebe um array a e uma flag order com valor padrão 'asc'. -Caso o valor de order seja 'asc' retornar o array ordenado em ordem ascendente e caso seja 'desc' retornar em ordem descendente
*/

function myFunction(a, order = 'asc'){
    return order === 'desc' ? a.sort().reverse() : a.sort()
}

console.log(myFunction([2,3,1], 'asc')) //[1,2,3]
console.log(myFunction([6, 2, 8, 1, 5], 'desc')) // [ 8, 6, 5, 2, 1]
console.log(myFunction([ 'laranja', 'maçã', 'uva'], 'asc')) //[ 'laranja', 'maçã', 'uva']
console.log(myFunction(['t', 'a', 's','z', 'm'])) //['a', 'm', 's', 't', 'z']