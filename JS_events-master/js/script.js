//Fonctionnalité 1 et 1-bis
function displayConsoleCoucou() {
    let i = 1;
    let footerElt = document.querySelector('footer');
    footerElt.addEventListener('click', e => {
        e.preventDefault();
        console.log(`clic n° ${i}`);
        i++;
    });
}

//Fonctionnalité 2
function toggleMenu() {
    let btnElt = document.querySelector('.navbar-toggler');
    let blockElt = document.querySelector('#navbarHeader');
    btnElt.addEventListener('click', e => {
        e.preventDefault();
        console.log(e);
        blockElt.classList.toggle('collapse');
    });
}

//Fonctionnalité 3
function clickToChangeFirstCard() {
    let btnElt = document.querySelectorAll('.card')[0].querySelector('.btn-outline-secondary');
    btnElt.addEventListener('click', e => {
        e.preventDefault();
        console.log(e.currentTarget);
        e.currentTarget.style.color = 'red';
    });
}

//Fonctionnalité 4
function clickToChangeSecondCard() {
    let btnElt = document.querySelectorAll('.card')[1].querySelector('.btn-outline-secondary');
    let defaultColor = '';
    btnElt.addEventListener('click', e => {
        e.preventDefault();
        if (e.currentTarget.style.color === 'green') {
            e.currentTarget.style.color = defaultColor;
        }
        else {
            e.currentTarget.style.color = 'green';
        }
    });
}

//Fonctionnalité 5
function disabledBootstrap() {
    let btnElt = document.querySelector('.navbar');
    let linkElt = document.querySelector('link[rel="stylesheet"]');
    btnElt.addEventListener('dblclick', e => {
        e.preventDefault();
        if (linkElt.disabled) {
            linkElt.disabled = false;
        }
        else {
            linkElt.disabled = true;
        }
    });
}

//Fonctionnalité 6
function toggleCardView() {
    let cardElt = document.querySelectorAll('.card');
    for (let i = 0; i < cardElt.length; i++) {
        toggleCard(cardElt[i]);
    }
}
function toggleCard(cardElt) {
    let btnElt = cardElt.querySelector('.btn-success');
    btnElt.addEventListener('click', e => {
        e.preventDefault();
        console.log(e.currentTarget);
        cardElt.querySelector('.card-text').classList.toggle('collapse');
        if (cardElt.querySelector('.card-text').classList.contains('collapse')) {
            cardElt.querySelector('.card-img-top').style.width = '20%';
        }
        else {
            cardElt.querySelector('.card-img-top').style.width = '';
        }
    });
}

//Fonctionnalité 7
function setLastCardInFirst() {
    let btnElt = document.querySelector('.jumbotron p .btn-secondary');
    btnElt.addEventListener('click', e => {
        e.preventDefault();
        let cardElts = document.querySelectorAll('.col-md-4');
        let firstCardElt = cardElts[0];
        let lastCardElt = cardElts[cardElts.length - 1];
        let newParent = document.createElement("div")
        let lastCardhtml = lastCardElt.innerHTML
        newParent.classList.add("col-md-4")
        newParent.innerHTML = lastCardhtml;
        lastCardElt.remove();
        firstCardElt.parentNode.insertBefore(newParent, firstCardElt);
    });
}

//Fonctionnalité 8
function setFirstCardInLast() {
    let btnElt = document.querySelector('.jumbotron p .btn-primary');
    btnElt.addEventListener('click', e => {
        e.preventDefault();
        let cardElts = document.querySelectorAll('.col-md-4');
        let firstCardElt = cardElts[0];
        let lastCardElt = cardElts[cardElts.length - 1];
        let newParent = document.createElement("div")
        let firstCardhtml = firstCardElt.innerHTML
        newParent.classList.add("col-md-4")
        newParent.innerHTML = firstCardhtml;
        firstCardElt.remove();
        lastCardElt.parentNode.insertBefore(newParent, lastCardElt.nextSibling);
    });
}

//Fonctionnalité 9
function keyOnModifyColumns() {
    let btnElt = document.querySelector('.navbar .navbar-brand strong');
    let listElt = document.querySelector('.album .row');
    let cardElt = listElt.querySelectorAll('.col-md-4');
    let defaultCardClass = 'col-md-4';
    let newCardClass = 'col-md-3';
    document.addEventListener("keydown", e => {
        switch (e.key) {
            case 'y':
                listElt.classList.add('justify-content-center');
                listElt.classList.remove('justify-content-end');
                break;
            case 'p':
                listElt.classList.className = '';
                listElt.classList.remove('justify-content-center');
                listElt.classList.add('justify-content-end');
                break;
            case 'a':
            case 'b':
                listElt.classList.remove('justify-content-center');
                listElt.classList.remove('justify-content-end');
                break;
        }
        for (let i = 0; i < cardElt.length; i++) {
            cardElt[i].className = '';
            switch (e.key) {
                case 'a':
                case 'y':
                case 'p':
                    cardElt[i].classList.add(newCardClass);
                    break;
                case 'b':
                    cardElt[i].className = '';
                    cardElt[i].classList.add(defaultCardClass);
                    break;
            }
        }
    });
}


//READY
displayConsoleCoucou();
toggleMenu();
clickToChangeFirstCard();
clickToChangeSecondCard();
disabledBootstrap();
toggleCardView();
setLastCardInFirst();
setFirstCardInLast();
keyOnModifyColumns();