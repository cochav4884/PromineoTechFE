import { expect } from "chai";
import { describe, it } from require("mocha");
import Deck from "./week09WarGame.js"; // Adjust the path if necessary

describe("Deck Class", function () {
  it("should shuffle the deck so that the order is different", function () {
    const deck = new Deck();
    deck.createDeck();
    const originalOrder = [...deck.deck]; // Copy the original deck
    deck.shuffleDeck();
    
    expect(deck.deck).to.have.lengthOf(originalOrder.length);
    expect(deck.deck).to.not.deep.equal(originalOrder);
  });
});