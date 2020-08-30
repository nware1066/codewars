// My solution:
// My first thought was that there is going to be a regex solution, but I wanted a more readable answer
function DNAtoRNA(dna) {
  return dna.split('').map(char => {
    if (char === 'T') {
      return 'U';
    } else {
      return char;
    }
  }).join('');
}
// My favorite other solutions
function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}
