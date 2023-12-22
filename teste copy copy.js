const transpose = (imput) => {
    if (imput == "") return imput
    let teste = imput
    let nw = []

    //console.log(teste);

    for (let i = 0; i <= teste.length; i++) {
         //nw.push(imput.slice(0))
        
        console.log(teste[i]);

        if (teste[0].length >= 1){
            nw.push(teste[0].split("")[i] + teste[1].split("")[i])
        } else {
            nw.push(teste[0].slice(i, i + 1))
        }

        if (teste[i+2] === undefined) break
        

    }



    //console.log(imput[0].split("").shift() + imput[1].split("").shift());
    //console.log(imput[1].split("").shift());

    return nw
    // imput[0].slice(0,1) + imput[1].slice(0,1) 
    //imput[0].slice(1,2) + imput[1].slice(1,2) 
}

//const input = ['A1'];//['A', '1']
const input2 = ['A', '1']; //['A1']
const input3 = ['ABC', '123']

console.log(transpose(input2)) 
//console.log(transpose(input3)) 