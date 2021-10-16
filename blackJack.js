let blackjackgame={
    'you': {'scoreSpan':'#your-blackjackresult','div':'#your-box','score':0},
    'dealer': {'scoreSpan':'#dealer-blackjackresult','div':'#dealer-box','score':0},
};

const YOU = blackjackgame['you'];
const DEALER = blackjackgame['dealer'];


document.querySelector('blackjack-hit').addEventListener('click', blackjackHit);

function blackjackHit(){
    let cardImage = document.createElement('img');
    cardImage.src ="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/819px-Playing_card_spade_10.svg.png";
    document.querySelector(YOU['div']).appendChild(cardImage);
}