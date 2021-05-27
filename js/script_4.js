//Startup Nation
const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

//Filtrer les entrepreneurs nés dans les années 70
console.log('-------------------------------------------\n');
console.log('1) Liste des entrepreneurs nés dans les années 70');
let chairmenBornFiltered = entrepreneurs.filter(e => e.year >= 1970 && e.year < 1980);
for (chairman in chairmenBornFiltered) {
    console.log(chairmenBornFiltered[chairman]);
}

//Array avec les prénoms et noms
console.log('-------------------------------------------\n');
console.log('2) Array avec les prénoms et noms');
let chairmenNames = [];
entrepreneurs.map( e => chairmenNames.push({ first: e.first, last: e.last }));
console.log(chairmenNames);

//Quel âge aurait chaque inventeur aujourd'hui ?
console.log('-------------------------------------------\n');
console.log('3) Age des entrepreneurs aujourd\'hui');
let chairmenAges = [];
let currentYear = Number(new Date().getFullYear());
entrepreneurs.map( e => {
    chairmenAges.push({ age: currentYear - Number(e.year) })
});
console.log(chairmenAges);

//Trier les entrepreneurs par ordre alphabétique du nom
console.log('-------------------------------------------\n');
console.log('4) Tri alphabétique des entrepreneurs par leur nom');
let alphabeticFilterByName = [];
alphabeticFilterByName = entrepreneurs.sort((a, b) => {
    var nA = a.last.toLowerCase();
    var nB = b.last.toLowerCase();
    if(nA < nB) return -1;
    else if(nA > nB) return 1;
    return 0;
});
console.log(alphabeticFilterByName);