var agora = new Date()
var hora = agora.getHours() + ':' + agora.getMinutes() + ':' + agora.getSeconds()
console.log(`Agora são exatamente ${hora}.`)
if (hora <12) {
    console.log(`Boa Tarde!`)
} else if (hora <= 18) {
    console.log(`Boa tarde`)
} else if (hora <= 00) {
    console.log(`Boa noite`)
} else {
    console.log(`Boa madrugada`)
}