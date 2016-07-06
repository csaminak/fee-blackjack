
(function runGame() {

    var display = document.getElementById('cards');
    var cards = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

    function getCard() {
        var card = Math.floor(Math.random() * cards.length);
        return cards[card];
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
        cards = display.innerHTML.split(' ');

        var cardValue = 0;
        var i, card;

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

        if (cardValue < 15 && standing) {
            alert('Dealer wins.');
        } else if (cardValue < 18 && standing) {
            alert('Push!');
        } else if (( ((cardValue > 18) && (cardValue <=21)) && standing) || cardValue === 21) {
            alert('You win!');
        } else if (cardValue > 21) {
            alert('You Bust.');
        }

        display.innerHTML = getCard();
        display.innerHTML = display.innerHTML + ' ' + getCard();
    }

    document.getElementById('stand').addEventListener('click', function() {
        checkResult(true, false);
    });

    document.getElementById('hit').addEventListener('click', function() {
        hit();
    });

    display.innerHTML = getCard();
    display.innerHTML = display.innerHTML + ' ' + getCard();
    checkResult(false, false);
})();
