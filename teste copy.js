let _nome = 'test'
let _funcao = 'test2'
let _salario = 22


let obj = []

function enviar(_nome, _funcao, _salario) {
    obj.push({nome: _nome, funcao: _funcao, salario: _salario})
    //_res.innerHTML = `Nome: ${obj.nome} Função: ${obj.funcao} Salário: ${obj.salario}`
    // obj.push({ nome: 'joao', funcao: 'analista', salario: 3000 })
    
}


enviar(_nome, _funcao, _salario)
console.log(obj);