function contar(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    var res = document.getElementById('res')
    
    

    
    //res.innerHTML += `${pas}`

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 || pas.value == 0){
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        var inii = Number(ini.value)
        var fimm = Number(fim.value)
        var pass = Number(pas.value)    

        for(var c=inii; c <= fimm; c += pass){
            res.innerHTML += `&#128073; ${c}`
        }
        res.innerHTML += '&#127937;'
    }
}

