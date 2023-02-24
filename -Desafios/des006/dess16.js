function myFunction(a) {
    var b = []
    for (c in a) {
        if (a[c].itsMe === true && a[c].admin === true) {
            b.push(a[c])
            delete a[c]
        }
    }
    for (c in a) {
        if (a[c].itsMe === true) {
            b.push(a[c])
            delete a[c]
        }
    }
    for (c in a) {
        if (a[c].admin === true) {
            b.push(a[c])
            delete a[c]
        }
    }
    for (c in a) {
        if (a[c].itsMe === false && a[c].admin === false) {
            b.push(a[c])
        }
    }
    return b
}


console.log(banana([
    { itsMe: false, admin: false, name: 'Nick' },
    { itsMe: true, admin: false, name: 'Titan' },
    { itsMe: false, admin: true, name: 'Jucelino' },
    { itsMe: true, admin: true, name: 'Leo' },
    { itsMe: false, admin: true, name: 'Kleiton' },
    { itsMe: false, admin: false, name: 'Sasuke' }
]))



function dele(x) {
    x.sort((a, b) => {
        if (a.itsMe === true && b.itsMe === false) {
            return -1
        }

    })
    x.sort((a, b) => {
        if (a.admin === true && b.admin === false) {
            return -1
        }
    })
    return x
}

function banana(x) {
    return x.sort((a, b) => {
        if (a.itsMe === b.itsMe) {
            if (a.admin === b.admin) {
                return 0
            }
            return a.admin > b.admin ? -1 : 1
        }
        return a.itsMe > b.itsMe ? -1 : 1
    })
}