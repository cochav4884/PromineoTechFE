export { Deck, Game }; // Exporting Deck and Game classes for testing

// console.log('pls work');
// What do we need for a WAR card game?

/**
 * Deck
 * - 52 cards (should each card be its own class? Should it be an object with 3 values?)
 *  - Rank ("name value")
 *  - Suit (hearts, diamonds, clubs, spades)
 *  - Value
 * - A way to shuffle
 * - A way to pass the cards to the players (should this be in my Deck? or my game logic?)
 *
 * Players (do I need a player class? or can I just put it in my game logic?)
 * - Name?
 * - Score
 * - Hand
 *
 * Logic to actually play the game... we can use a Deck in any card game,
 *   but we're playing a specific one.
 * - Ways to compare the cards... number values on each card
 */

// Card class to represent each individual card
class Card {
    constructor(rank, suit, value) {
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }

    toString() {
        return `${this.rank} of ${this.suit}`;
    }
}

// Deck class
/** Should have:
 *    An array to store the cards
 *    An array to store all the card ranks
 *    An array to store all the card suits
 */
class Deck {
    constructor() {
        this.deck = [];
        this.ranks = [
            'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'
        ];
        this.suits = [ 
            { name: 'Hearts', symbol: '❤️' }, 
            { name: 'Diamonds', symbol: '💎' }, 
            { name: 'Clubs', symbol: '🍀' }, 
            { name: 'Spades', symbol: '🗡️' }];
        this.createDeck();
        this.shuffleDeck();
    }

    // A method to create a deck... iterate over our ranks/suits
    // Push a new card (as an object) into our constructor’s this.deck
    createDeck() {
        for (let suit of this.suits) {
            for (let i = 0; i < this.ranks.length; i++) {
                this.deck.push(new Card(this.ranks[i], `${suit.name} ${suit.symbol}`, i + 1)); // Use Card class
            }
        }
    }
    

    // A method to shuffle the deck
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}

// Player class to store player-related information
class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }

    playCard() {
        return this.hand.shift(); // Removes and returns the top card
    }

    increaseScore() {
        this.score++;
    }
}

// Black spade &#9824;
// Black heart &#9829;
// Black diamond &#9830;
// Black club &#9827;

// Class for a Game (Specifically our WAR game)
/** Needs:
 *  - A deck... instantiate a new Deck inside of our Game class
 *
 *  - Create the deck, shuffle the deck, and pass the deck...
 *
 *  - Logic to play the game
 *    - Turn-based, how many turns?
 *    - Do our players have a hand yet?
 *    - Control flow statement logic to decide who wins?
 *
 * - 2 players
 *  - Hand
 *  - Score
 *  - Name
 */

class Game {
    constructor() {
        this.player1 = new Player('Player 1');
        this.player2 = new Player('Player 2');
        this.deck = new Deck();
        this.dealCards();
    }

    // Distribute cards to players
    dealCards() {
        while (this.deck.deck.length > 0) {
            this.player1.hand.push(this.deck.deck.shift());
            this.player2.hand.push(this.deck.deck.shift());
        }
    }

    // Method to play the game
    /**
     * Pass out cards to our players
     * Take x amount of turns...
     * As long as players have cards (or the number of cards they have)
     * Award points based on card.value
     * Log the winner
     */
    playGame() {
        console.log("Starting the War game!\n");

        for (let i = 0; i < this.player1.hand.length; i++) {
            let p1Card = this.player1.playCard();
            let p2Card = this.player2.playCard();

            console.log(`Round ${i + 1}: ${this.player1.name} plays ${p1Card.toString()} vs ${this.player2.name} plays ${p2Card.toString()}`);

            if (p1Card.value > p2Card.value) {
                this.player1.increaseScore();
                console.log(`${this.player1.name} wins this round!\n`);
            } else if (p2Card.value > p1Card.value) {
                this.player2.increaseScore();
                console.log(`${this.player2.name} wins this round!\n`);
            } else {
                console.log("It's a tie! No points awarded.\n");
            }
        }

        this.displayWinner();
    }

    // Display the final scores and winner
    displayWinner() {
        console.log("\nFinal Scores:");
        console.log(`${this.player1.name}: ${this.player1.score}`);
        console.log(`${this.player2.name}: ${this.player2.score}`);

        if (this.player1.score > this.player2.score) {
            console.log(`🏆 ${this.player1.name} wins the game!`);
        } else if (this.player2.score > this.player1.score) {
            console.log(`🏆 ${this.player2.name} wins the game!`);
        } else {
            console.log("It's a tie! No winner.");
        }
    }
}

// Start the game
const game = new Game();
game.playGame();
