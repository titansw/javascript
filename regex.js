//([0-9]{4})[-]([0-9]{2})[-]([0-9]{2})

 let data = "2010-02-13"

 console.log(data.replace(/([0-9]{4})[-]([0-9]{2})[-]([0-9]{2})/, /$3-$2-$1/));