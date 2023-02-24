/*
I) Caça letras
Uma função que recebe uma letra e uma frase. Ele deve dizer quantas vezes essa letra aparece na frase.
*/

function myFunctiona(a, b) {
    var e = 0
    for (c of b.toLowerCase().split("")) {
        if (a === c) {
           e++
        }
    }
    return e
}

function myFunction(a, b) {
    return b.toLowerCase().split(a.toLowerCase()).length -1
}

console.log(myFunction('o', 'Leonardo'))