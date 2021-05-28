//Code la vie
console.log('-------------------------------------------\n');
const arn1 = 'CCGUCGUUGCGCUACAGC';
const arn2 = 'CCUCGCCGGUACUUCUCG';

let codonToProtein = function(val) {
    switch (val) {
        case 'UCU':
        case 'UCC':
        case 'UCA':
        case 'UCG':
        case 'AGU':
        case 'AGC':
            return 'Sérine';
            break;
        case 'CCU':
        case 'CCC':
        case 'CCA':
        case 'CCG':
            return 'Proline';
            break;
        case 'UUA':
        case 'UUG':
            return 'Leucine';
            break;
        case 'UUU':
        case 'UUC':
            return 'Phénylalanine';
            break;
        case 'CGU':
        case 'CGC':
        case 'CGA':
        case 'CGG':
        case 'AGA':
        case 'AGG':
            return 'Arginine';
            break;
        case 'UAU':
        case 'UAC':
            return 'Tyrosine';
            break;
    }
}
let setProteinList = function(arn) {
    let codons = arn.match(/.{1,3}/g);
    let protein = '';
    let lastElt = codons.length - 1;
    for (let [index, codon] of codons.entries()) {
        if (index === lastElt) protein += `${codonToProtein(codon)}`;
        else protein += `${codonToProtein(codon)}-`;
    }
    return protein;
}
console.log(`Protéines de ${arn1} : ${setProteinList(arn1)}`);
console.log(`Protéines de ${arn2} : ${setProteinList(arn2)}`);
