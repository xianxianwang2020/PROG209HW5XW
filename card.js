// define an object constructor that builds card objects.
//Card objects have 2 properties, a suit which can be one of 1,2,3,4 and the other one is rank, which can be 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, or 14
//The constructor should take in 2 values to set these 2 properties.


 const Card=function(pSuits,pRank){
  this.suits=pSuits;
   this.rank=pRank;
  // this.inuse=false;
 }

// Class Card {
//   constructor(pSuits, pRank) {
//     this.suits = pSuits;
//     this.rank = pRank;
//   }
// }