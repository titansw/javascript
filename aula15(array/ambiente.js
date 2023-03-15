let num = [5,8,2,9,3]
let num2 =[0,1]

num[5] = 6 // add o num 6 na 5 casa
num.push(7) // add o num 7 no último
num.unshift() // add no começo
num.length //qunt usados
num.sort() //colocar em ordem
num.indexOf() //buscar o valor de () e retorna a posição
num.concat(num2) //concatena o num + num2
num.toFixed(2) //se o número tiver vários valor após a virgula, ele só mostrara 2
num.replace(".", ".") //trocar o ponto por vírgula, mas vira uma string
num.shift() // remove do começo
num.pop() //remove do fim


let num3 = [...num,'%', ...num2]

console.log(num3)



console.log(num)



var n1 = 0

for(var c in num){ // Para cada posição em num:
    console.log(`A posição ${c} tem o valor ${num[c]}`)
} 

/*for(var c = 0; c < num.length; c++){
    
    n1 += num[c]
    //console.log(`A posição ${c} tem o valor ${num[c]}`)
    
}



var pos = num.indexOf(0)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {

    console.log(pos)
}*/

//-1 = não encontrado

//console.log(num.indexOf(5))// aonde esta o número 5

const Casa = {
    area: 1000,
    altura: 7,
    andares: 2,
}
  
for(let prop in Casa) { //campos
    console.log(prop);
}

  
let oi = [1,2,3]

for(d of oi){           //conteudo
    console.log(d)
}


function myFunction(a){
    return a.filter(res => res.length < 6)
}
console.log(myFunction(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']))