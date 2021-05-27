//Bibliothécaire
const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// 1) Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log('-------------------------------------------\n');
let isRentedOnce = function(books) {
    for(book in books) {
        if (!books[book].rented || books[book].rented == 0) return false;
    }
    return true;
};
console.log(`Est-ce que tous les livres ont été au moins empruntés une fois ? ${isRentedOnce(books)}`);

// 2) Quel est livre le plus emprunté ?
console.log('-------------------------------------------\n');
let isMoreRented = Object.keys(books).reduce((a, b) => books[a].rented > books[b].rented ? a : b);
console.log(`Livre le plus emprunté : ${books[isMoreRented].title}`);

// 3) Quel est le livre le moins emprunté ?
console.log('-------------------------------------------\n');
let isLeastRented = Object.keys(books).reduce((a, b) => books[a].rented < books[b].rented ? a : b);
console.log(`Livre le moins emprunté : ${books[isLeastRented].title}`);

// 4) Trouve le livre avec l'ID 873495
console.log('-------------------------------------------\n');
let findIdBook = idBook => books.find(book => book.id == idBook);
console.log(`Livre avec l'ID "873495" : ${findIdBook(873495).title}`);

// 5) Supprime le livre avec l'ID 133712
console.log('-------------------------------------------\n');
let bookIndex = books.findIndex(book => book.id == 133712);
let deleteBookById = books.splice(bookIndex, 1);
console.log(`Suppression du livre avec l'ID 133712 :\n`, books);

// 6) Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé
console.log('-------------------------------------------\n');
books.sort((a, b) => {
    var nA = a.title.toLowerCase();
    var nB = b.title.toLowerCase();
    if(nA < nB) return -1;
    else if(nA > nB) return 1;
    return 0;
});
console.log(`Tri des livres par ordre alphabétique :\n`, books);
