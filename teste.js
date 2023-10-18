const score = (x, y) => {
    let score = x + y

    if (x <= 0.7 && x >= -0.7) {
        if ((score >= 0 && score <= 1.4) || (score <= 0 && score >= -1.4)) return 10
    }


    if ((x >= 0 && x <= 5) || (x <= 0 && x >= -5)) {
        if ((score >= 0 && score <= 5) || (score <= 0 && score >= -5)) return 5
    }

    if ((x >= 0 && x <= 7) || (x <= 0 && x >= -7)) {
        if ((score >= 0 && score <= 10) || (score <= 0 && score >= -10)) return 1
    }

    return 0
};

console.log(score(0, -1)); //10
console.log(score(0.8, -0.8)); //5
console.log(score(-5, 0)); //5 
console.log(score(0.5, -4)); //5
console.log(score(-3.6, -3.6)); //1 
console.log(score(-7.0, 7.0)); //1 
console.log(score(7.1, -7.1)); //0 

/* 
0, 0.7      centro  =>  10 pontos
0.8, -3.5   meio    =>  5 pontos
3.6, 7 b    orda    =>  1 ponto
7.1, +      fora    =>  0 pontos 

*/