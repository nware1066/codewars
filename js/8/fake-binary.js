//   split string to separate into array of numbers
//   if conditional - num <5 = 0, num >5 = 1
//   join and return
function fakeBin(x){
  return x.split("").map(num => {
    if (num < 5) {
      return 0
    } else {
      return 1
    }
  }).join("")
}


// this was very much the same as the previous kata that I did (dna to rna),
// but it still took me a minute to realize that I could not simply assign the value
// of the digits to one or zero, I had to RETURN them as one or zero
