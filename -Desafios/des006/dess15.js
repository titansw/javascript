function myFunction(a) {
    if (a.name === null)
        delete a.name
    if (a.surname === null)
        delete a.surname
    if (a.age === null)
        delete a.age
    return a
}

console.log(myFunction({ name: "Leo", surname: 'null', age: 23 }))

//if( a.name === null ? delete a.name : a.surname === null ? delete a.surname : a.age === null ? delete a.age )