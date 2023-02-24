/*
Desafios JavaScript
Básico 8
Escreva uma função que recebe um array por parâmetro e remove os 3 primeiros elementos do array.
Caso o array tenha menos de 3 elementos, retornar um array vazio.
*/

function myFunction(a){
    return a.length <= 3 ? [] : a.slice(3)
}

console.log(myFunction([1, 2, 3, 4, 5])) //[4, 5]
console.log(myFunction([5, 4, 3, 2, 1, 0])) //[2, 1, 0]
console.log(myFunction([10, 20, 30])) //[]
console.log(myFunction([99, 100])) //[]

function myFunction1(a){
    if (a.length > 3){
        a.splice(0, 3)
        return a
    }
    return [] 
}