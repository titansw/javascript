let num = [5,8,2,9,3]
let num2 =[0,1]

num[5] = 6 // add o num 6 na 5 casa
num.unshift() // add no começo
num.splice(position, qunt de delete, novo valor)
num.push(7) // add no final
num.length //qunt usados
num.sort() //colocar em ordem
num.indexOf() //buscar o valor de () e retorna a posição
num.includes() //busca o valor e retorna true/false
num.concat(num2) //concatena o num + num2
num.toFixed(2) //se o número tiver vários valor após a virgula, ele só mostrara 2
num.replace(".", ".") //trocar o ponto por vírgula, mas vira uma string
num.shift() // remove do começo
num.splice(position, qunt de delete, novo valor)
num.pop() //remove do fim
num.join(", ") // transforma em string e coloca ", " entre cada campo do array
num.slice() //retorna uma cópia de parte de um array
num.find(elemento => elemento === 5) //retorna o primeiro valor que satisfaz o teste
num.findIndex() //retorna o primeiro valor que satisfaz o teste, se NENHUM retorna -1
num.forEach((conteudo, indice) => console.log(conteudo, indice)) // navega entre os dados de um array
num.startsWith('D') //Inicia com...

num.every() //se TODOS os elementos no array passaram no teste
num.some() //se AO MENOS 1 dos elementos no array passou no teste
arr.filter((value) => value % 2 === 0) // filtra e retorna o conteudo
arr.map((value) => value * 2) // retorna um novo array transformado

arr.flatMap(num => (num % 2 === 0 ? [num * 2] : [])) // faz a msm coisa q o filter e map juntos

regex = quantificador (+) // todos q tem 
(*) // todos q tem e mais os q tem o primeiro caractere 

const toRna = ([...imput]) => imput.reduce((acumulador, valorAtual) => acumulador,  valorAtual, '');

let arr = [1, 2, 3, 4];
const newArr = arr.map((value) => value - 1);
console.log(newArr); // chama a função
// => [0, 1, 2, 3]
console.log(arr); //chama o array
// => [1, 2, 3, 4]

num.reduce((accumulator, currentValue) => accumulator + currentValue) //acumulador 


let num3 = [...num,'%', ...num2]

console.log(num3)

/* ```
let arr = [1, 2, 3, 4];

// Get the sum of elements
arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// => 10

// Classify the numbers by whether they are odd or not
arr.reduce(
  (accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      accumulator.even.push(currentValue);
    } else {
      accumulator.odd.push(currentValue);
    }

    return accumulator;
  },
  { even: [], odd: [] }
);
// => { even: [2, 4], odd: [1, 3] }
``` */




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