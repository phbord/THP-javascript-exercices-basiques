//Question 1 :
let pNumber = document.querySelectorAll('p').length;
console.log(`Il y a "${pNumber}" <p> présents dans la page HTML`);
console.log('\n----------------------------------------------------------\n');

//Question 2 :
let contentCoucouId = document.querySelector('#coucou').textContent;
console.log(`contenu texte de l'élément portant l'id "coucou" :\n"${contentCoucouId}"`);
console.log('\n----------------------------------------------------------\n');

//Question 3 :
let thirdAHref = document.querySelectorAll('a')[2].getAttribute('href');
console.log(`URL vers laquelle pointe le 3ème élément <a> de la page HTML :\n"${thirdAHref}"`);
console.log('\n----------------------------------------------------------\n');

//Question 4 :
let comptemoiClassNumber = document.querySelectorAll('.compte-moi').length;
console.log(`Nombre d'éléments portent la classe "compte-moi" :\n"${comptemoiClassNumber}"`);
console.log('\n----------------------------------------------------------\n');

//Question 5 :
let comptemoiClassLiNumber = document.querySelectorAll('li.compte-moi').length;
console.log(`Nombre d'éléments <li> portent la classe "compte-moi" :\n"${comptemoiClassLiNumber}"`);
console.log('\n----------------------------------------------------------\n');

//Question 6 :
let liComptemoiClassInsideOlNumber = document.querySelectorAll('ol li.compte-moi').length;
console.log(`Nombre d'éléments <li> situés dans une liste ordonnée portent la classe "compte-moi" :\n"${liComptemoiClassInsideOlNumber}"`);
console.log('\n----------------------------------------------------------\n');

//Question 7 :
let contentFirstEltOfSecondList = document.querySelectorAll('ul')[1].querySelectorAll('li')[1].innerHTML;
console.log(`Récupération du contenu du 1er élément de la 2e liste :\n"${contentFirstEltOfSecondList}"`);