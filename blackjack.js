
(function runGame() {

    var display = document.getElementById('cards');
    cards = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

    function card() {
        return Math.floor(Math.random() * cards.length);
    }

    function hit() {
        display.innerHTML = cards[card()];
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

        cards.forEach(function (card, i) {
            if (Number(card)) {
                cardValue += card;
            } else if (cards[i] === 'J' || cards[i] === 'Q' || cards[i] === 'J') {
                card = 10;
                cardValue += card;
            } else if (cards[i] === 'A') {
                card = 11;
                cardValue += card;
            }
        });

        if ((cardValue < 15) && standing) {
            alert('Dealer wins.');
        } else if ((cardValue < 18) && standing) {
            alert('Push!');
        } else if ((cardValue > 18) & hitting || cardValue === 21) {
            alert('You win!');
        } else if (cardValue > 21) {
            alert('You Bust.');
        }

    display.innerHTML = '';
    card = Math.floor(Math.random() * cards.length);
    display.innerHTML = cards[card];
    }

    document.getElementById('stand').addEventListener('click', function() {
        checkResult(true, false);
    });

    document.getElementById('hit').addEventListener('click',function() {
        checkResult(false, true);
    });

    card = Math.floor(Math.random() * cards.length);
    display.innerHTML = cards[card];
    card = Math.floor(Math.random() * cards.length);
    display.innerHTML = display.innerHTML + ' ' + cards[card];
})();
