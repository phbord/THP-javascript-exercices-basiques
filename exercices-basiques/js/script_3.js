//Pyramide de Mario
console.log('-------------------------------------------\n');
let pyramide = function(n) {
    let brick = '';
    n = Number(n);
    let spaceNumber = n;
    for (let i = 0; i < n; i++) {
        brick += '#';
        --spaceNumber;
        let space = ' '.repeat(spaceNumber);
        console.log(space + brick);
    }
}

number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
pyramide(number);