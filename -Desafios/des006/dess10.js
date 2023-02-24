/*
Desafios JavaScript
#13 - Arrays
Escreva uma função que recebe dois parâmetros, min e max (mínimo e máximo), e retorna um array de números de acordo com o intervalo.
Caso seja informado (1, 5) o array será: [1, 2, 3, 4, 5]
*/

function myFunction(a, b){
    const conta = []

    for(var c = a; c <= b; c++){
        conta.push(c)  
    }

    return conta 
}

console.log(myFunction(1, 5)) //[1, 2, 3, 4, 5]
console.log(myFunction(11, 18)) //[11, 12, 13, 14, 15, 16, 17, 18]
console.log(myFunction(-5, 5)) //[-5 , -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]

