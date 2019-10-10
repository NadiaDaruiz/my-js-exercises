// # 1. The unbeatable
/*
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
*/

// #2.The Honest

const honestRockPaperScissor = userMove => {
  let moves = ["paper", "rock", "scissor"];
  let aiMove = randomPicker(moves);

  const cleanUserMove = userMove.toString().toLowerCase();

  if (!moves == cleanUserMove) {
    return `I'm an honest function bro, be honest too and just write 'rock', 'paper', or 'scissors' as an argument.`;
  }
  return aiMove;
};

const randomPicker = moves => {
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
