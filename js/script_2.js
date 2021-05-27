//Calculs rapides
console.log('-------------------------------------------\n');
let factorielle = function(n) {
    let res = 1;
    n = Number(n);
    for (let i = n; i > 0; i--) {
        res *= i;
    }
    return res;
}

userNumber = prompt("De quel nombre veux-tu calculer la factorielle ?");
console.log(`Le résultat est : ${factorielle(userNumber)}`);