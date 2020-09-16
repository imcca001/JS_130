"use strict";

var SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
var RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
         "10", "Jack", "Queen", "King", "Ace"];

function createDeck() {
  var allCards = () => {
    return SUITS.reduce((deck, suit) => {
      RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  var deck = allCards();
  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  for (var counter = 0; counter < 400; counter += 1) {
    var randomIndex1 = randomCardIndex();
    var randomIndex2 = randomCardIndex();
    var tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  function randomCardIndex() {
    return Math.floor(Math.random() * deck.length);
  }
}

console.log(createDeck());