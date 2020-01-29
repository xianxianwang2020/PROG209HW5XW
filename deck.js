
  
 let deck = {

   suits: ["spades", "diamonds", "clubs", "hearts"],
   rank :["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
   
  //suits: [1, 2, 3, 4],
//  rank: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],

  cardArray: [],

  load: function () {
    let card;

    for (let i = 0; i < deck.suits.length; i++) {
      for (let j = 0; j < deck.rank.length; j++) {
        card = new Card(deck.suits[i], deck.rank[j]);
        deck.cardArray.push(card);
      }

    }
    console.log(deck.cardArray);
    return this.cardArray;

  }
}



