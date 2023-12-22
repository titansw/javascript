const transpose = (imput) => {
    if (imput == "") return imput
    let teste = imput
    let nw = []

    //console.log(teste);

    for (let i = 0; i = teste.length; i++) {
        // nw.push(imput[i].slice(i, i + 1))
        
        nw.push(teste[0].split("")[i] + teste[1].split("")[i])

        //if (teste[i+2] === undefined) break
        

    }



    //console.log(imput[0].split("").shift() + imput[1].split("").shift());
    //console.log(imput[1].split("").shift());

    return nw
    // imput[0].slice(0,1) + imput[1].slice(0,1) 
    //imput[0].slice(1,2) + imput[1].slice(1,2) 
}

//const input = ['A1'];//['A', '1']
const input = ['A', '1']; //['A1']
//const input = ['ABC', '123']

console.log(transpose(input)) 