(function runGame() {

    var display = document.getElementById('cards');
    var deck = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

    function getCard() {
        var card = Math.floor(Math.random() * deck.length);
        return deck[card];
    }

    function hit() {
        display.innerHTML += (' ' + getCard());
        checkResult(false, true);
    }

    /**
     * Check the result of the current cards and alert the game result
     *
     * @param  {Boolean} standing  Whether or not the player is standing
     * @param  {Boolean} hitting   Whether or not the player is hitting
     * @return {void}
     */
    function checkResult(standing, hitting) {
        var cards = display.innerHTML.split(' ');
        var cardValue = 0;
        var i, card, pushCondition, winCondition, dealerWin;

        for (i=0; i<cards.length; i++) {
            card = cards[i];
            if (Number(card)) {
                cardValue += (Number(card));
            } else if (card === 'J' || card === 'Q' || card === 'K') {
                card = 10;
                cardValue += card;
            } else if (card === 'A') {
                card = 11;
                cardValue += card;
            }
        }

        pushCondition = (cardValue >= 16) && (cardValue <= 18);
        winCondition = (cardValue >= 19) && (cardValue <= 21);
        dealerWin = cardValue < 16;

        if (dealerWin && standing) {
            alert('Dealer wins.');
            callCard();
        } else if (pushCondition && standing) {
            alert('Push!');
            callCard();
        } else if ( (cardValue === 21) || (winCondition && standing) ||
                                                (winCondition && hitting) ) {
            alert('You win!');
            callCard();
        } else if (cardValue > 21) {
            alert('You Bust.');
            callCard();
        }
    }

    document.getElementById('stand').addEventListener('click', function() {
        checkResult(true, false);
    });

    document.getElementById('hit').addEventListener('click', function() {
        hit();
    });

    /**
     * Calls the next pair of cards and checks their result automatically.
     *
     * @return {Void}
     */
    function callCard() {
        card1();
        card2();
        checkResult(false, false);
    }

    function card1() {
        display.innerHTML = getCard();
    }

    function card2() {
        display.innerHTML += ' ' + getCard();
     }

    card1();
    card2();
    checkResult(false, false);

})();
