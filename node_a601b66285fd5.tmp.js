class Series {
  constructor(series) {
    this.series = [...series]
    this.new = []
    this.i = 0
  }

  slices(sliceLength) {
   
      for (this.i; this.i < sliceLength; this.i++) {
      this.new +=  this.series.slice(this.i,sliceLength)
      sliceLength++
      //this.series.slice(0,1)
    }  

    return this.new
  }
}

console.log(new Series('12').slices(1));