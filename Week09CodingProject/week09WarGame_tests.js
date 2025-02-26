import { expect } from "chai";
import Deck from "../week09WarGame.js"; // Adjust path if necessary

describe("WAR Game Unit Tests", function () {
    let deck;

    beforeEach(() => {
        deck = new Deck();
    });

    it("should create a deck with 52 unique cards", function () {
        expect(deck.deck).to.have.lengthOf(52);
        let uniqueCards = new Set(deck.deck.map(card => `${card.rank} of ${card.suit}`));
        expect(uniqueCards.size).to.equal(52);
    });

    it("should shuffle the deck and not lose any cards", function () {
        let originalDeck = [...deck.deck]; // Copy the deck before shuffling
        deck.shuffleDeck();
        expect(deck.deck).to.have.lengthOf(52);
        expect(deck.deck).to.have.deep.members(originalDeck); // Ensure all original cards are present
    });

    it("should distribute 26 cards to each player", function () {
        let player1 = { hand: [] };
        let player2 = { hand: [] };

        while (deck.deck.length > 0) {
            player1.hand.push(deck.deck.shift());
            player2.hand.push(deck.deck.shift());
        }

        expect(player1.hand).to.have.lengthOf(26);
        expect(player2.hand).to.have.lengthOf(26);
    });
});
