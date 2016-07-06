
function runGame() {

    var display = document.getElementById('cards');
    cards = ['A', '2','3', '4','5','6','7','7','8', '9', '10', 'J', 'Q', 'K']

    function hit() {
        var card = Math.round(Math.random() * cards.length);
        display.innerHTML = cards[card];
        checkResult('no', true);
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
                cardValue = cardValue + card;
            }

            if (card === 'J' || card == 'Q' || card === 'J')
                cardValue = cardValue + 10;

            if (cards[i] = 'A') { cardValue = cardValue += 11; }
        });

        if (cardValue < 15 && standing) {
            alert('Dealer wins.');
        }
        if (cardValue < 18 && standing) {
            alert('Push!');
        }
        if (cardValue > 18 & hitting || cardValue === 21) {
            alert('You win!');
        }
        if (cardValue > 21) {
            alert('You Bust.');
        }

    display.innerHTML = '';
    card = Math.round(Math.random() * cards.length);
    display.innerHTML = cards[card];
    }

    document.getElementById('stand').addEventListener('click', function() {
        checkREsult(true);
    });

    document.getElementById('hit').addEventListener('click',function(){checkResult(null, true);});

    card = Math.round(Math.random() * cards.length);
    display.innerHTML = cards[card];
    card = Math.round(Math.random() * cards.length);
    display.innerHTML = display.innerHTML + ' ' + cards[card];
}
