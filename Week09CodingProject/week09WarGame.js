// console.log('pls work');
//What do we need for a WAR card game?

/**
 * Deck
 * - 52 cards (should each card be its own class? Should it be an object with 3 values?)
 *  - Rank ("name value")
 *  - Suit (hearts, diamonds, clubs, spades)
 *  - Value
 * - a way to shuffle
 * - a way to pass the cards to the players (should this be in my Deck? or my game logic?)
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

// Deck class

/** Should have :
 *    An array to store the cards
 *    An array to store all the cards ranks
 *    An array to store all the cards suits
 */

class Deck {
    constructor() {
      this.deck = [];
      this.ranks = [
        'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'
      ];
      this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    }
  
    // A method to create a deck... iterate over our ranks/suits
    // Push a new card (as an object) into our constructor’s this.deck
    createDeck() {
      for (let i = 0; i < this.suits.length; i++) {
        for (let j = 0; j < this.ranks.length; j++) {
          this.deck.push({
            name: `${this.ranks[j]} of ${this.suits[i]}`,
            value: j + 1
          });
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
  
  // black spade &#9824;
  // black heart &#9829;
  // black diamond &#9830;
  // black club &#9827;
  
  // Class for a Game (Specifically our WAR game)
  /** Needs:
   *  - A deck... instantiate a new Deck inside of our Game class
   *
   *  - Create the deck, shuffle the deck, and pass the deck...
   *
   *  - Logic to play the game
   *    - Turn based, how many turns?
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
      this.player1 = { name: 'Player 1', score: 0, hand: [] };
      this.player2 = { name: 'Player 2', score: 0, hand: [] };
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
      // Instantiate a new deck, create a deck, then shuffle the deck
      const deck = new Deck();
      deck.createDeck();
      deck.shuffleDeck();
  
      // Distribute cards to players
      while (deck.deck.length !== 0) {
        this.player1.hand.push(deck.deck.shift());
        this.player2.hand.push(deck.deck.shift());
      }
  
      // Actually playing the game... how many turns do I need?
      for (let i = 0; i < this.player1.hand.length; i++) {
        let p1Card = this.player1.hand[i];
        let p2Card = this.player2.hand[i];
  
        // Conditional logic to award points based on comparing the card values
        if (p1Card.value > p2Card.value) {
          this.player1.score++;
          console.log(`P1: ${p1Card.name} vs P2: ${p2Card.name} → Player 1 wins this round!`);
        } else if (p2Card.value > p1Card.value) {
          this.player2.score++;
          console.log(`P1: ${p1Card.name} vs P2: ${p2Card.name} → Player 2 wins this round!`);
        } else {
          console.log(`P1: ${p1Card.name} vs P2: ${p2Card.name} → It's a tie! No points.`);
        }
      }
  
      // Announce the final winner
      console.log("\nFinal Scores:");
      console.log(`Player 1: ${this.player1.score}`);
      console.log(`Player 2: ${this.player2.score}`);
      
      if (this.player1.score > this.player2.score) {
        console.log("🏆 Player 1 wins the game!");
      } else if (this.player2.score > this.player1.score) {
        console.log("🏆 Player 2 wins the game!");
      } else {
        console.log("It's a tie!");
      }
    }
  }
  
  // Start the game
  const game = new Game();
  game.playGame();
  