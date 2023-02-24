/*
Desafios JavaScript
#9 - Arrays
Escreva uma função que recebe um array 'a' e um valor 'b' como parâmetros. A função deve remover todas as ocorrências de b e retornar o array filtrado.
*/

// O método splice recebe dois parâmetros, o primeiro é a posição no array e o segundo é a quantidade de elementos a remover. O splice modifica o array original e retorna um nova array contendo os elementos que foram removidos.

function myFunctiona(a, b){
    const filter = []
    for(const item of a){
        if (item !== b){
            filter.push(item)
        }
    }

   /* for (const item in a){
        if (a[item] !== b){
            filter.push(a[item])
        }
    }*/

    return filter
}

function myFunction(a, b){
    return a.filter(item => item !== b)
}




console.log(myFunction([1, 2, 3], 2)) //[1, 3]
console.log(myFunction([1, 2, '3'], '3')) //[1, 2]
console.log(myFunction(['1', false, 2, '3'], false)) //['1', 2, '3']
console.log(myFunction([5, 1, 2, 5, 3, 5], 5)) //[1, 2, 3]