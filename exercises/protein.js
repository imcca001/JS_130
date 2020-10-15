const AMINOS = {
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
  UGA: 'STOP'
}

const translate = (rna) => {
  const CODON_LENGTH = 3;
  let protein = [];
  if (!rna) {
    return protein;
  }

  for (let beginningIdx = 0; beginningIdx < rna.length; beginningIdx += CODON_LENGTH) {
    let codon = rna.substring(beginningIdx, beginningIdx + CODON_LENGTH);

    let polypeptide = CODON_TO_POLYPEPTIDE[codon];
    
    if (polypeptide = "STOP") {
      return protein;
    }

    if (!polypeptide) {
      throw new Error("Invalid codon");
    }
    protein.push(polypeptide);
  }
  return protein;
}

module.exports = translate;