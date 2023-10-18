let number = []

function test() {
    for (i = 0; i <= 3; i++) {
        number.push(Math.floor(Math.random() * (6 - 1) + 1))
    }
    number.sort((a, b) => b - a).pop()
    return number.reduce((acc, current) => acc + current)
}

console.log(test());

const Modifier = {
    3: -4,
    4: -3,
    5: -3
}

console.log(Modifier[5]);