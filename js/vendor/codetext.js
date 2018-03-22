
let suitArray = ['hearts', 'spades', 'diamonds', 'clubs'];
let numbersAndSignsArray = ['J', 'Q', 'K'];
for (let x = 10; x >= 2; x--) {
    numbersAndSignsArray.unshift(x);
}
numbersAndSignsArray.unshift('A');

class Card {
    constructor(suit, value, representation, isCovered) {
        this.suit = suit;
        this.value = value;
        this.representation = representation;
        this.isCovered = isCovered;
    }

    coverCard() {
        if (this.isCovered === true) {
            if ($('.one').is(':empty')) {
                $('.one').addClass('cardCover').show().val(this.value);
            }
        }
    }


    unCoverCard() {
        let xAxis = 0;
        let yAxis = 0;
        if (this.isCovered === true) {
            if (this.suit === 'hearts') {
                yAxis = 0;
            } else if (this.suit === 'spades') {
                yAxis = -129;
            } else if (this.suit === 'diamonds') {
                yAxis = -258;
            } else {
                yAxis = -387;
            }
            if (this.representation === 'A') {
                xAxis = (numbersAndSignsArray.indexOf('A') * -129);
            } else if (this.representation === '2') {
                xAxis = (numbersAndSignsArray.indexOf(2) * -129);
            } else if (this.representation === '3') {
                xAxis = (numbersAndSignsArray.indexOf(3) * -129);
            } else if (this.representation === '4') {
                xAxis = (numbersAndSignsArray.indexOf(4) * -129);
            } else if (this.representation === '5') {
                xAxis = (numbersAndSignsArray.indexOf(5) * -129);
            } else if (this.representation === '6') {
                xAxis = (numbersAndSignsArray.indexOf(6) * -129);
            } else if (this.representation === '7') {
                xAxis = (numbersAndSignsArray.indexOf(7) * -129);
            } else if (this.representation === '8') {
                xAxis = (numbersAndSignsArray.indexOf(8) * -129);
            } else if (this.representation === '9') {
                xAxis = (numbersAndSignsArray.indexOf(9) * -129);
            } else if (this.representation === '10') {
                xAxis = (numbersAndSignsArray.indexOf(10) * -129);
            } else if (this.representation === 'J') {
                xAxis = (numbersAndSignsArray.indexOf('J') * -129);
            } else if (this.representation === 'Q') {
                xAxis = (numbersAndSignsArray.indexOf('Q') * -129);
            } else if (this.representation === 'K') {
                xAxis = (numbersAndSignsArray.indexOf('K') * -129);
            }
            $('.six').addClass('cardUncover').css('background-position', xAxis + 'px ' +yAxis+' px !important').val(this.value);
        }
    }
}



let cardsArray = [];
for (let y = 0; y < suitArray.length; y++) {
    for (let z = 0; z < numbersAndSignsArray.length; z++) {
        function value() {
            if (typeof numbersAndSignsArray[z] === 'number') {
                return numbersAndSignsArray[z]
            } else if (numbersAndSignsArray[z] === 'A') {
                return 11
            } else if (numbersAndSignsArray[z] === 'J') {
                return 10
            } else if (numbersAndSignsArray[z] === 'Q') {
                return 10
            } else if (numbersAndSignsArray[z] === 'K') {
                return 10
            }
        }
        cardsArray.push(new Card(suitArray[y], value(), numbersAndSignsArray[z], true));
    }
}



let masterCards = [];
let userCards = [];

function masterTakeCards() {
    return masterCards.push(cardsArray.splice(cardsArray.indexOf(cardsArray[Math.floor(Math.random() * cardsArray.length - 1)]), 1));
}

function userTakeCards() {
    return userCards.push(cardsArray.splice(cardsArray.indexOf(cardsArray[Math.floor(Math.random() * cardsArray.length - 1)]), 1));
}

