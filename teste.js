const tournamentTally = (input) => {
    let table = 'Team                           | MP |  W |  D |  L |  P'
    let matches = input.split("\n")
    let teams = matches.join(";").split(";")

    let test = []

    const tournamen = {
        Team: "",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        P: 0
    }



    for (let i = 0; i <= matches.length; i++) {
        let aki = matches[0].split(";")






        //test[1].Team = aki[1]


        //test[i].MP++

        if (aki[2] == "win") {
            test[0] = tournamen
            test[0].MP++
            test[0].Team = aki[0]

            test[0].W = 1
            test[0].P = 3
        } else if (aki[2] == "draw") {
            test[0] = tournamen
            test[0].MP++
            test[0].Team = aki[0]

            test[0].D = 1
            test[0].P = 1
        } else {
            test[0] = tournamen
            test[0].MP++
            test[0].Team = aki[0]

            test[0].L = 1
        }

        if (test.length == 1) { }
        else {
            console.log(111111111);
            test[1] = tournamen
            test[1].MP++
            test[1].Team = aki[1]

            if (aki[2] == "win") {
                test[1].L = 1
            } else if (aki[2] == "draw") {
                test[1].D = 1
                test[1].P = 1
            } else {
                test[1].L = 1
            }
        }

    }

    console.log(test);

    if (matches.length > 1) {
        //teams[0].split(";")

        // console.log('é maior');
    }

    /*  for (let i = 0; i < matches.length; i++) {
 
 
         tournamen.MP = matches.length
         test[i] = tournamen
         test[i].Team = teams[i]
         //console.log(test[i].Team);
     } */

    //console.log(test);

    /*   if (teams[2] == "win") {
          return `Team                           | MP |  W |  D |  L |  P\n${teams[0]}             |  1 |  1 |  0 |  0 |  3\n${teams[1]}             |  1 |  0 |  0 |  1 |  0`
      }
  
      if (teams[2] == "loss") {
          return `Team                           | MP |  W |  D |  L |  P\n${teams[1]}             |  1 |  1 |  0 |  0 |  3\n${teams[0]}             |  1 |  0 |  0 |  1 |  0`
      }
      
      if (teams[2] == "draw") {
          return `Team                           | MP |  W |  D |  L |  P\n${teams[0]}             |  1 |  0 |  1 |  0 |  1\n${teams[1]}             |  1 |  0 |  1 |  0 |  1`
      }
  
  
       return table */
};

const input =
    'Allegoric Alaskans;Blithering Badgers;win\n' +
    'Allegoric Alaskans;Blithering Badgers;lose';

//console.log(tournamentTally(tournamentTally('')));
console.log(tournamentTally('Allegoric Alaskans;Blithering Badgers;win'));
//console.log(tournamentTally(input));




















/* ```text
Team                           | MP |  W |  D |  L |  P
Devastating Donkeys            |  3 |  2 |  1 |  0 |  7
Allegoric Alaskans             |  3 |  2 |  0 |  1 |  6
Blithering Badgers             |  3 |  1 |  0 |  2 |  3
Courageous Californians        |  3 |  0 |  1 |  2 |  1
```

What do those abbreviations mean ?

    - MP : Matches Played
    - W: Matches Won
    - D: Matches Drawn(Tied)
    - L: Matches Lost
    - P: Points */