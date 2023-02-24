/*
Desafios JavaScript
Básico 4
- Escreva uma função que recebe dois parâmetros (text, flag)
- Se a flag for igual a "start", deve retornar os 3 primeiros caracteres do parâmetro text
- Se a flag for igual a "end", deve retornar os 3 últimos caracteres do parâmetro text
- Se o parâmetro text tiver menos de 3 caracteres, apenas retornar o text
*/

function minha (text, flag = 'start'){
    if(text.length <= 3 ){
        return text
    } else if (flag == 'start'){
        return text[0] + text[1] + text[2]
    } else if (flag == 'end'){
        return text[text.length -3] + text[text.length -2] + text[text.length -1] 
    } 
}

function dele(text, flag = 'start'){
    if (text.length < 3){
        return text
    }
    if (flag === 'start'){
        return text.slice(0, 3) //ele para antes do último declarado
    }
        return text.slice(-3)  
} 

function teste(text, flag = 'start'){
    return text.length < 3 ? text : flag == 'start' ? text.slice(0 ,3) : text.slice(-3)
}

console.log(teste('abcdefg', 'start')) //abc
console.log(teste('abcdefg', 'end')) //efg
console.log(teste('ab', 'end')) //ab
console.log(teste('abcdefg')) //abc