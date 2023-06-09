class Series {
  constructor(series) {
    this.series = [...series]
    this.new = []
    this.i = 0
  }

  slices(sliceLength) {
   
      for (this.i; this.i <= sliceLength; this.i++) {
      this.new.push( this.series.slice(this.i, sliceLength))
     sliceLength++
      
    }  

    return this.new
  }
}

console.log(new Series('12').slices(1));