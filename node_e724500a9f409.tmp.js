function encode(imput) {
    let array = imput.split()
    let count = 1
    let count2 = 0
    if (array === "") return ""


    for (let i = 0; i < array.length; i++) { //a
        //console.log(array[i]);
        for (let a of array) {
            if (array[i] == a) {
               count2++
            array[i+1] = ''
            }

        }
        console.log(count2 + array[i]);
        count2 = 0
    }
    console.log(array);
}

console.log(encode('AABBBCCCC')); //2A 3B 4C