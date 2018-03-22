$(document).ready(function(){

    let suitArray = ['hearts', 'spades', 'diamonds', 'clubs'];
    let numbersAndSignsArray = ['J', 'Q', 'K'];
    for (let x = 10; x >= 2; x--) {
        numbersAndSignsArray.unshift(x);
    }
    numbersAndSignsArray.unshift('A');

    let masterCards = [];
    let userCards = [];

    let masterValue = 0;
    let userValue = 0;

    let numberMasterCards = 0;
    let numberUserCards = 0;

    class Card {
        constructor(suit, value, representation, isCovered) {
            this.suit = suit;
            this.value = value;
            this.representation = representation;
            this.isCovered = isCovered;
        }

        coverCard() {
            if (this.isCovered === true) {
                $('.one').addClass('cardCover').show().val(this.value);
            }
        }

        unCoverCard () {
            let xAxis = 0;
            let yAxis = 0;

            if (this.isCovered === false) {
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
                    xAxis = (numbersAndSignsArray.indexOf('A') * -92);
                } else if (this.representation === 2) {
                    xAxis = (numbersAndSignsArray.indexOf(2) * -92);
                } else if (this.representation === 3) {
                    xAxis = (numbersAndSignsArray.indexOf(3) * -92);
                } else if (this.representation === 4) {
                    xAxis = (numbersAndSignsArray.indexOf(4) * -92)-1;
                } else if (this.representation === 5) {
                    xAxis = (numbersAndSignsArray.indexOf(5) * -92)-1;
                } else if (this.representation === 6) {
                    xAxis = (numbersAndSignsArray.indexOf(6) * -92)-1;
                } else if (this.representation === 7) {
                    xAxis = (numbersAndSignsArray.indexOf(7) * -92)-2;
                } else if (this.representation === 8) {
                    xAxis = (numbersAndSignsArray.indexOf(8) * -92)-2;
                } else if (this.representation === 9) {
                    xAxis = (numbersAndSignsArray.indexOf(9) * -92)-2;
                } else if (this.representation === 10) {
                    xAxis = (numbersAndSignsArray.indexOf(10) * -92)-3;
                } else if (this.representation === 'J') {
                    xAxis = (numbersAndSignsArray.indexOf('J') * -92)-3;
                } else if (this.representation === 'Q') {
                    xAxis = (numbersAndSignsArray.indexOf('Q') * -92)-3;
                } else if (this.representation === 'K') {
                    xAxis = (numbersAndSignsArray.indexOf('K') * -92)-4;
                }
                return  xAxis + 'px ' +yAxis+'px';
            }
        }

        masterCardOne () {
            this.isCovered = false;
            $('.one').addClass('cardUncover').show();
            $('.cardUncover').closest('.one').css('background-position', this.unCoverCard());
            $('.one').attr('data-value', this.value);
        }

        masterCardTwo () {
            $('.two').addClass('cardCover').show();
            $('.two').attr('data-value', this.value);
        }

        masterCardThree () {
            this.isCovered = false;
            $('.three').addClass('cardUncover').show();
            $('.cardUncover').closest('.three').css('background-position', this.unCoverCard());
            $('.three').attr('data-value', this.value);
        }

        masterCardFour () {
            this.isCovered = false;
            $('.four').addClass('cardUncover').show();
            $('.cardUncover').closest('.four').css('background-position', this.unCoverCard());
            $('.four').attr('data-value', this.value);
        }

        masterCardFive () {
            this.isCovered = false;
            $('.five').addClass('cardUncover').show();
            $('.cardUncover').closest('.five').css('background-position', this.unCoverCard());
            $('.five').attr('data-value', this.value);
        }

        userCardOne () {
            $('.six').addClass('cardUncover').show();
            $('.cardUncover').closest('.six').css('background-position', this.unCoverCard());
            $('.six').attr('data-value', this.value);
        }

        userCardTwo () {
            $('.seven').addClass('cardUncover').show();
            $('.cardUncover').closest('.seven').css('background-position', this.unCoverCard());
            $('.seven').attr('data-value', this.value);
        }

        userCardThree () {
            $('.eight').addClass('cardUncover').show();
            $('.cardUncover').closest('.eight').css('background-position', this.unCoverCard());
            $('.eight').attr('data-value', this.value);
        }

        userCardFour () {
            $('.nine').addClass('cardUncover').show();
            $('.cardUncover').closest('.nine').css('background-position', this.unCoverCard());
            $('.nine').attr('data-value', this.value);
        }

        userCardFive () {
            $('.ten').addClass('cardUncover').show();
            $('.cardUncover').closest('.ten').css('background-position', this.unCoverCard());
            $('.ten').attr('data-value', this.value);
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

    function masterTakeCards() {
        return masterCards.push(cardsArray.splice(cardsArray.indexOf(cardsArray[Math.floor(Math.random() * cardsArray.length - 1)]), 1)[0]);
    }

    function userTakeCards() {
        userCards.push(cardsArray.splice(cardsArray.indexOf(cardsArray[Math.floor(Math.random() * cardsArray.length - 1)]), 1)[0]);
        userCards[userCards.length - 1].isCovered = false;
    }

    function totalMasterValue () {
        if (masterCards.length === 5) {
            masterValue = masterCards[0].value + masterCards[1].value + masterCards[2].value + masterCards[3].value + masterCards[4].value;
        } else if (masterCards.length === 4) {
            masterValue = masterCards[0].value + masterCards[1].value + masterCards[2].value + masterCards[3].value;
        } else if (masterCards.length === 3) {
            masterValue = masterCards[0].value + masterCards[1].value + masterCards[2].value;
        } else if (masterCards.length === 2) {
            masterValue = masterCards[0].value + masterCards[1].value;
        }
    }

    function totalUserValue() {
        if (userCards.length === 5) {
            userValue = userCards[0].value + userCards[1].value + userCards[2].value + userCards[3].value + userCards[4].value;
        } else if (userCards.length === 4) {
            userValue = userCards[0].value + userCards[1].value + userCards[2].value + userCards[3].value;
        } else if (userCards.length === 3) {
            userValue = userCards[0].value + userCards[1].value + userCards[2].value;
        } else if (userCards.length === 2) {
            userValue = userCards[0].value + userCards[1].value;
        }
    }

    function totalNumberMasterCards() {
        numberMasterCards = masterCards.length;
    }

    function totalNumberUserCards() {
        numberUserCards = userCards.length;
    }

    function calculatevalueAsMaster() {
        for (let a=0; a < masterCards.length -1; a++)  {
            if (masterCards[a].representation === 'A') {
                totalMasterValue();
                if (masterValue > 21) {
                    masterCards[a].value = 1;
                }
            }
        }
    }

    function calculateValueAsUser() {
        for (let b=0; b < userCards.length -1 ; b++)  {
            if (userCards[b].representation === 'A') {
                totalUserValue();
                if (userValue > 21) {
                    userCards[b].value = 1;
                }
            }
        }
    }

    $('#start-button').on('click', function () {
        $('.blackjack-Tittle').hide();
        $('#hit-button, #stand-button, #reset-button').show();
        $(this).hide();
        userTakeCards();
        userCards[userCards.length -1].userCardOne();
        $('.six').animate({'left' : '300px'}, 'fast');
        userTakeCards();
        userCards[userCards.length -1].userCardTwo();
        $('.seven').animate({'left' : '380px'}, 'fast');
        masterTakeCards();
        $('.one').animate({'left' : '300px'}, 'fast');
        masterCards[masterCards.length -1].masterCardOne();
        masterTakeCards();
        masterCards[masterCards.length -1].masterCardTwo();
        $('.two').animate({'left' : '380px'}, 'fast');
    });

    $('#hit-button').on('click', function () {
        if (userCards.length === 2) {
            userTakeCards();
            userCards[userCards.length - 1].userCardThree();
            $('.six').animate({'left' : '260px'}, 'fast');
            $('.seven').animate({'left' : '340px'}, 'fast');
            $('.eight').animate({'left' : '420px'}, 'fast');
            calculateValueAsUser();
            totalUserValue();
            if (userValue > 21) {
                $('.master-win').show();
                $('#hit-button, #stand-button').hide();
            }
        } else if (userCards.length === 3) {
            userTakeCards();
            userCards[userCards.length - 1].userCardFour();
            $('.six').animate({'left' : '220px'}, 'fast');
            $('.seven').animate({'left' : '300px'}, 'fast');
            $('.eight').animate({'left' : '380px'}, 'fast');
            $('.nine').animate({'left' : '460px'}, 'fast');
            calculateValueAsUser();
            totalUserValue();
            if (userValue > 21) {
                $('.master-win').show();
                $('#hit-button, #stand-button').hide();
            }
        } else if (userCards.length === 4) {
            userTakeCards();
            userCards[userCards.length - 1].userCardFive();
            $('.six').animate({'left' : '180px'}, 'fast');
            $('.seven').animate({'left' : '260px'}, 'fast');
            $('.eight').animate({'left' : '340px'}, 'fast');
            $('.nine').animate({'left' : '420px'}, 'fast');
            $('.ten').animate({'left' : '500px'}, 'fast');
            calculateValueAsUser();
            totalUserValue();
            if (userValue > 21) {
                $('.master-win').show();
                $('#hit-button, #stand-button').hide();
            }
        }
    });

    $('#stand-button').on('click', function () {
        $('#hit-button, #stand-button').hide();

        masterCards[masterCards.length -1].isCovered = false;
        $('.cardCover').removeClass('cardCover');
        $('.two').addClass('cardUncover').show();
        $('.cardUncover').closest('.two').css('background-position', masterCards[masterCards.length -1].unCoverCard());

        calculatevalueAsMaster();
        totalMasterValue();
        if (masterValue < 17) {
            masterTakeCards();
            masterCards[masterCards.length -1].masterCardThree();
            $('.one').animate({'left' : '260px'}, 'fast');
            $('.two').animate({'left' : '340px'}, 'fast');
            $('.three').animate({'left' : '420px'}, 'fast');

        }

        calculatevalueAsMaster();
        totalMasterValue();
        if (masterValue < 17) {
            masterTakeCards();
            masterCards[masterCards.length -1].masterCardFour();
            $('.one').animate({'left' : '220px'}, 'fast');
            $('.two').animate({'left' : '300px'}, 'fast');
            $('.three').animate({'left' : '380px'}, 'fast');
            $('.four').animate({'left' : '460px'}, 'fast');
        }

        calculatevalueAsMaster();
        totalMasterValue();
        if (masterValue < 17) {
            masterTakeCards();
            masterCards[masterCards.length - 1].masterCardFive();
            $('.one').animate({'left' : '220px'}, 'fast');
            $('.two').animate({'left' : '300px'}, 'fast');
            $('.three').animate({'left' : '380px'}, 'fast');
            $('.four').animate({'left' : '460px'}, 'fast');
            $('.five').animate({'left' : '500px'}, 'fast');
        }

        calculatevalueAsMaster();
        totalMasterValue();
        if (masterValue > 21) {
            return $('.user-win').show();
        }

        totalMasterValue();
        totalUserValue();

        if (masterValue > userValue) {
            $('.master-win').show();
        } else if (masterValue < userValue) {
            $('.user-win').show();
        } else if (masterValue === 21 && userValue === 21){
            totalNumberMasterCards();
            totalNumberUserCards();
            if (numberMasterCards < numberUserCards) {
                $('.master-win').show();
            } else if (numberMasterCards > numberMasterCards) {
                $('.user-win').show();
            }
        } else {
            $('.draw').show();
        }
    });

    function collectCards() {
        console.log(masterValue);
        console.log(userValue);
        cardsArray.push(masterCards.pop());
        cardsArray.push(masterCards.pop());
        if (masterCards.length === 3) {
            cardsArray.push(masterCards.pop());
        }
        if (masterCards.length === 2) {
            cardsArray.push(masterCards.pop());
        }
        if (masterCards.length === 1) {
            cardsArray.push(masterCards.pop());
        }

        cardsArray.push(userCards.pop());
        cardsArray.push(userCards.pop());
        if (userCards.length === 3) {
            cardsArray.push(userCards.pop());
        }
        if (userCards.length === 2) {
            cardsArray.push(userCards.pop());
        }
        if (userCards.length === 1) {
            cardsArray.push(userCards.pop());
        }

        $('.cardUncover').css('background-position', '0px 0px');
        $('.cardUncover').removeClass('cardUncover');
        $('#hit-button, #stand-button, .user-win, .master-win, .draw').hide();
        $('.containers-player, .containers-master').hide();
        $('#start-button, .blackjack-Tittle').show();
        $('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .ten').removeAttr('data-value');
        $('.one, .two, .three, .four').animate({'left' : '340px'}, 'fast');
    }

    $('#reset-button').on('click', function () {
        $(this).hide();
        collectCards();
    });

});

// reset button // hit button second clicks // valor del As // 21 con dos cartas
