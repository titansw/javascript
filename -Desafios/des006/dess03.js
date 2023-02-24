/*
Desafios JavaScript
Básico 4
Escreva uma função que recebe dois parâmetros (fullname, flag)
-Se a flag for igual a "firstname" deve retornar apenas a primeira palavra da parâmetro fullname
-Se a flag for igual a "lastname" deve retornar todo o texto, exceto a primeira palavra da parâmetro fullname
-Se o parâmetro flag for vazio ou fullname conter apenas uma palavra, apenas retornar o conteúdo de fullname
*/

function myFunction1(fullname, flag = ''){
    const nome = fullname.split(' ')
    if (flag.length == 0 || nome.length <= 1){
        return fullname
    } else if (flag == 'firstname'){
        return nome[0]
    }
    return nome.slice(1).join(' ')
}

function myFunction(fullname, flag = ''){
    const nome = fullname.split(' ')
    return flag.length == 0 || nome.length <= 1 ? fullname : flag == 'firstname' ? nome[0] : nome.slice(1).join(' ')
    
}

console.log(myFunction('John Williams Smith', 'firstname')) // John
console.log(myFunction('John Williams Smith', 'lastname')) // Willians Smith
console.log(myFunction('John Williams Smith')) //John Williams Smith
console.log(myFunction('John', 'lastname')) //John