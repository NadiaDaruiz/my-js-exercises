// # 1. The Unbeatable

const unbeatableRockPaperScissors = userMove => {
  let aiMove = "";
  const cleanUserMove = userMove.toString().toLowerCase();

  switch (cleanUserMove) {
    case "scissors":
      aiMove = "rock";
      break;
    case "rock":
      aiMove = "paper";
      break;
    case "paper":
      aiMove = "scissors";
      break;
    default:
      return `I only take 'rock', 'paper' or 'scissors' as an argument.`;
  }
  return aiMove;
};

console.log("\nThe Unbeatable:");
console.log("\nWith 'paper' as an argument:");
console.log(unbeatableRockPaperScissors("paper"));
console.log("\nWith 'rock' as an argument:");
console.log(unbeatableRockPaperScissors("ROck"));
console.log("\nWith 'scissors' as an argument:");
console.log(unbeatableRockPaperScissors("scissors"));
console.log(unbeatableRockPaperScissors(1));

// #2. The Honest

const honestRockPaperScissor = userMove => {
  let moves = ["paper", "rock", "scissor"];
  let aiMove = randomPickerOne(moves);

  const cleanUserMove = userMove.toString().toLowerCase();

  if (!moves == cleanUserMove) {
    return `I'm an honest function bro, be honest too and just write 'rock', 'paper', or 'scissors' as an argument.`;
  }
  return aiMove;
};

const randomPickerOne = moves => {
  const index = Math.floor(Math.random() * moves.length);
  return moves[index];
};

console.log("\nThe Honest:");
console.log("\nWith 'paper' as an argument:");
console.log(honestRockPaperScissor("paper"));
console.log("\nWith 'rock' as an argument:");
console.log(honestRockPaperScissor("ROck"));
console.log("\nWith 'scissors' as an argument:");
console.log(honestRockPaperScissor("scissors"));
console.log(honestRockPaperScissor(0));

// #3. Two Players

const rspWithTwoPlayers = () => {};

// #3a. Two Players (my own version using random for defining the moves) ASK FOR HELP!

/* const rpsTwoPlayers = () => {
  let moves = ["paper", "rock", "scissor"];

  let playerA = randomPickerOne(moves);
  let playerB = randomPickerTwo(moves);

  let result = `Player A plays ${playerA} and Player B plays ${playerB}.`;

  return result;
};

const randomPickerTwo = moves => {
  const index = Math.floor(Math.random() * moves.length);
  return moves[index];
};

const theWinner = () => {
let thePlayerA = "";
let thePlayerB = "";

  if (thePlayerA == "paper") {
    switch (thePlayerB) {
      case "paper":
        return `It's a draw!`;
        break;
      case "scissor":
        return `Player B wins!`;
        break;
      case "rock":
        return `Player A wins!`;
        break 
    } 
    else if(thePlayerA == "rock"){
        switch (thePlayerB){
         case "paper":
            return `Player B wins!`;    
         case "rock": 
            return `It's a draw!`;   
         case "scissor":
            return `Player A wins!`;    
        }
         else 

    }

} 
};

console.log("\nWith two players:");
rpsTwoPlayers();

//theWinner();

*/
