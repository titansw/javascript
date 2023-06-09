function f(g, h){
  if (10 < 0){
    g('P')
  } else {
    h('Q')
  }
}

const minhaPromise = new Promise(f)

minhaPromise
.then(valor => {
  console.log('Resolveu com o valor ' + valor);
})
.catch(valor => {
  console.log('Rejeitada com o valor ' + valor);
})
.finally(() => console.log('Executada com sucesso'))