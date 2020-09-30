const PROTEINS = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine', 
  UCC: 'Serine', 
  UCA: 'Serine', 
  UCG: 'Serine',
  UAU: 'Tyrosine', 
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP', 
}


function translate(RNA) {
  let proteins = [];
  if (RNA) {
    let codons = RNA.match(/.../g);
    for (let index = 0; index < codons.length; index += 1) {
      let codon = codons[index];
      let protein = PROTEINS[codon];

      if (!protein) {
        throw new Error("Invalid codon");
      }
      else if (protein === 'STOP') {
        break;
      }

      proteins.push(protein);
    }
  }

  return proteins;
};


module.exports = translate;