const DNAStrand = dna => {
  return dna.split('').map(s => {
    if (s === 'A') return 'T';
    if (s === 'C') return 'G';
    if (s === 'T') return 'A';
    if (s === 'G') return 'C';
  }).join("")
};

console.log(DNAStrand('ATTGC'));
