function calcular(){
    var num = document.getElementById('num')
    var txt = document.getElementById('txt')
    var c = 1
    var numm = Number(num.value)

    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else{

    txt.innerHTML = '' 

        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${numm} x ${c} = ${numm*c}`
            txt.appendChild(item) 
            c++
        }
    }
}