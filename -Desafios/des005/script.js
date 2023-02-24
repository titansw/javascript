var num = document.getElementById('num')
var txt = document.querySelector('select#txt')
var res = document.querySelector('div#res')
let n1 = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, t){
    if (t.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function add(){
    if (isNumero(num.value) && !inLista(num.value, n1)){
    n1.push(Number(num.value)) 
    var item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    txt.appendChild(item) 
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}



function cal(){
    
    var n2 = 0
    var maior = n1[0]
    var menor = n1[0]
       
        for(var c in n1){
        n2 += n1[c]

        if (n1[c] > maior)
            maior = n1[c]
        if (n1[c] < menor)
            menor = n1[c]
        }
            //${n1[n1.length-1]}

    n1.sort()
    

    res.innerHTML = `Ao todo, temos ${n1.length} números cadastrados.</br>
    O maior valor informado foi ${maior}.</br>
    O menor valor informado foi ${menor}.</br>
    Somando todos os valores, temos ${n2}.</br>
    A média dos valores digitados é ${n2/n1.length}.`
    
    
}

//var res = document.getElementById('res')
//res.innerHTML = 'Impossível contar!'

//${a.length}

    
