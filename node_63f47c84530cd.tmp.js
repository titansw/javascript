function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
      break
    case 'Energizer':
      return 1.5
      break
    case 'Green Garden':
      return 1.5
      break
    case 'Tropical Island':
      return 3
      break
    case 'All or Nothing':
      return 5
      break
    default:
      return 2.5
  }
}

function remainingOrders(timeLeft, orders) {
  //chamar a 1 função enquanto não tiver batido o timeLeft
  let count = 0
  while (count <= timeLeft){
    count = timeToMixJuice(orders)
  }

}

console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']))