//Modification n°1
function changeTitles() {
    let jumbotronElt = document.querySelector('.jumbotron');
    let titleElt = jumbotronElt.querySelector('h1.jumbotron-heading');
    let subTitleElt = jumbotronElt.querySelector('.lead');

    titleElt.textContent = "Ce que j'ai appris à THP";
    subTitleElt.textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

//Modification n°2
function changeCallToActions() {
    let jumbotronElt = document.querySelector('.jumbotron');
    let btnElt1 = jumbotronElt.querySelector('.btn-primary');
    let btnElt2 = jumbotronElt.querySelector('.btn-secondary');

    btnElt1.textContent = 'OK je veux tester !';
    btnElt1.setAttribute('href', 'http://www.thehackingproject.org');
    btnElt2.textContent = 'Non Merci';
    btnElt2.setAttribute('href', 'https://www.pole-emploi.fr/accueil/');
}

//Modification n°3
function changeLogoName() {
    let titleElt = document.querySelector('header .navbar strong');

    titleElt.textContent = 'The THP Experience';
    titleElt.style.fontSize = '2em';
}

//Modification n°4
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
function populateImages(arr) {
    let rowElt = document.querySelectorAll('.album .col-md-4');

    for (let [index, row] of rowElt.entries()) {
        row.querySelector('.card img.card-img-top')
            .setAttribute('src', arr[index]);
    }
}

//Modification n°5
function deleteLastCards() {
    let rowElt = document.querySelectorAll('.album .col-md-4');
    let rowLength = rowElt.length - 1;
    let limit = rowLength - 3;

    for (let i = rowLength; i > limit; i--) {
        rowElt[i].parentNode.removeChild(rowElt[i]);
    }
}

//Modification n°6
function changeCardsText() {
    let textArr = [
        'L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web',
        'Les feuilles de style en cascade, généralement appelées CSS de l\'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML',
        'JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C\'est un langage orienté objet à prototype.'
    ];
    let rowElt = document.querySelectorAll('.album .col-md-4');
    let rowLength = rowElt.length;

    for (let i = 0; i < 3; i++) {
        rowElt[i].querySelector('.card p.card-text').textContent = textArr[i];
    }
}

//Modification n°7
function changeViewButtons() {
    let rowElt = document.querySelectorAll('.album .col-md-4');

    for (let [index, row] of rowElt.entries()) {
        row.querySelectorAll('.card .btn-group .btn')[0]
            .classList.replace("btn-outline-secondary", "btn-success");
    }
}

//Modification n°8
function modifyCards() {
    let albumElt = document.querySelector('.album .container');
    let rowElts = albumElt.querySelectorAll('.row')
    let divElt = document.createElement('div');
    let thirdRow = rowElts[0].querySelectorAll('.col-md-4')[2];

    rowElts[0].removeChild(thirdRow);
    divElt.classList.add('row');
    divElt.appendChild(thirdRow);
    albumElt.appendChild(divElt);
}



//READY
changeTitles();
changeCallToActions();
changeLogoName();
populateImages(imagesArray);
deleteLastCards();
changeCardsText();
changeViewButtons();
modifyCards();
