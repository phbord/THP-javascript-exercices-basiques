//Acné-Bot
console.log('-------------------------------------------\n');
let botResponse = function(str) {
    if(str.slice(-1) === '?') {
        return 'Ouais Ouais...';
    }
    else if(str && str === str.toUpperCase()) {
        return 'Pwa, calme-toi...';
    }
    else if(str.toLowerCase().includes('fortnite')) {
        return 'on s\'fait une partie soum-soum ?';
    }
    else if(!str || str == null || str === '') {
        return 't\'es en PLS ?';
    }
    else {
        return 'balek';
    }
}
let response = prompt("Que puis-je faire pour t'aider ?");
console.log(botResponse(response));