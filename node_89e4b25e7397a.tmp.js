function limesToCut(wedgesNeeded, limes) {
  let i = 0
  let count = 0
  while (i < wedgesNeeded) {
    for (let lime of limes) {
      if (i < wedgesNeeded) {
        break
      } else if (lime === 'small') {
        i += 6
        count += 1
      } else if (lime === 'medium') {
        i += 8
        count += 1
      } else if (lime === 'large') {
        i += 10
        count += 1
      }
    }

  }
  return count
}

console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']))// => 4