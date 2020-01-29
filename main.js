
'user strict';
 
// - create 2 arrays of size 26, one is playerArray and the other is computerArray
  let playerArray=[];
  let computerArray=[];
  
  let ram=0;
  let playerScore=0;
  let computerScore=0;
  

 let dealbutton=document.getElementById("dealbutton");
  let nextbutton=document.getElementById("nextbutton");

 //  window.addEventListener("load",deal);
  //define what happend when click button

  dealbutton.addEventListener("click",deal,false);
  nextbutton.addEventListener("click",display,false);
   
  function shuffle()
  {
      for (var m = 0; m < 1000; m++)
   {
      let location1 = Math.floor((Math.random() * deck.cardArray.length));
      let location2 = Math.floor((Math.random() * deck.cardArray.length));
      let tmp = deck.cardArray[location1];
 
       deck.cardArray[location1] = deck.cardArray[location2];
       deck.cardArray[location2] = tmp;
   }
  }  

   function deal()
   {
     deck.load();
    shuffle();
    
     for (let x=0;x<26;x++ )
     {
       playerArray[x]=deck.cardArray[x];
       computerArray[x]=deck.cardArray[x+26];
     }
    
    dealbutton.classList.remove("displayInNone");
    nextbutton.classList.add("displayNone");
    nextbutton.classList.add("displayInlineBLock");
   }
  
    

    function display()
    { 
     
   doComputerStyle();
    doPlayerStyle();

     
      dealbutton.classList.add("displayNone");
      nextbutton.classList.add("displayNone");
      nextbutton.classList.add("displayInlineBLock");

   

      if ( parseInt(deck.rank.indexOf(playerArray[ram].rank))==parseInt(deck.rank.indexOf(computerArray[ram].rank)))
      {
        if (( parseInt(deck.suits.indexOf(playerArray[ram].suits))>parseInt(deck.suits.indexOf(computerArray[ram].suits))))
       {
        document.getElementById("result").innerHTML="This hand: Player WIN";
        playerScore++;
       }
       else
       {
        document.getElementById("result").innerHTML="This hand: player LOSE";
        computerScore++;
       }

      }
      else
      {
        if (( parseInt(deck.rank.indexOf(playerArray[ram].rank))>parseInt(deck.rank.indexOf(computerArray[ram].rank))))
       {
        document.getElementById("result").innerHTML="This hand: Player WIN";
        playerScore++;
       }
       else
       {
        document.getElementById("result").innerHTML="This hand: Player LOSE";
        computerScore++;
       }
      }
      
      
      document.getElementById("turn").innerHTML="Turn: "+(ram+1);
      document.getElementById("playerCard").innerHTML="Suit: "+playerArray[ram].suits.toString()+" ;"+"Rank: "+ playerArray[ram].rank.toString();
      document.getElementById("computerCard").innerHTML="Suit: "+computerArray[ram].suits.toString()+" ;"+"Rank: "+ computerArray[ram].rank.toString()
      document.getElementById("computerScore").innerHTML="current computer score: "+computerScore;
      document.getElementById("playerScore").innerHTML="current player score: "+ playerScore;
      ram++;
      
    if (ram==26)
    {
      
    document.getElementById("computerScore").innerHTML="Final Computer Score: "+computerScore;
    document.getElementById("playerScore").innerHTML="Final Player Score: "+playerScore;

    if (playerScore>computerScore)
    {
    document.getElementById("result").innerHTML="Final Result: Player WIN";
    }
    else
    {
      document.getElementById("result").innerHTML="Final Result: Player LOSE";
  
    }
      dealbutton.classList.add("displayNone");
      dealbutton.classList.add("displayInlineBLock"); 
      document.getElementById("nextbutton").disabled=true; 
      document.getElementById("dealbutton").disabled=false; 
      
  }
}

function doComputerStyle(){

  let computerElement= document.getElementById("computerCard");
  
  if( (deck.rank.indexOf(computerArray[ram].rank)==2)||(deck.rank.indexOf(computerArray[ram].rank)==3)
  || (deck.suits.indexOf(computerArray[ram].suits)==3))//Suits: hearts, rank=3, 4 show red
  {
 //  document.getElementById("computerCard").style.color="red";// one line code to do style ,color , font
    computerElement.className="cardRed";
  }
 else if ( (deck.rank.indexOf(computerArray[ram].rank)==0)||(deck.rank.indexOf(computerArray[ram].rank)==1))
 {
  // document.getElementById("computerCard").style.color="black";
 
    computerElement.className="cardBlack";
 }
 else
 {
  // document.getElementById("computerCard").style.color="green";
  computerElement.className="cardGreen";
 }
   document.getElementById("computerCard").style.fontWeight="700";
}

function doPlayerStyle()
{
  let playerElement=document.getElementById("playerCard");
  if( (deck.rank.indexOf(playerArray[ram].rank)==2)||(deck.rank.indexOf(playerArray[ram].rank)==3)
  || (deck.suits.indexOf(playerArray[ram].suits)==3))// spade hearts, rank=3, 4 show red
  {
   // document.getElementById("playerCard").style.color="red"
     playerElement.className="cardRed";
  }
 else if ( (deck.rank.indexOf(computerArray[ram].rank)==0)||(deck.rank.indexOf(computerArray[ram].rank)==1))
 {
  
   //document.getElementById("playerCard").style.color="black";
   playerElement.className="cardBlack";

 }
 else
 {
  // document.getElementById("playerCard").style.color="brown";
  playerElement.className="cardYellow";
 }
 document.getElementById("playerCard").style.fontStyle="italic";
}