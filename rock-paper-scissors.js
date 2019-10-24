// // # 1. The Unbeatable

// const unbeatableRockPaperScissors = userMove => {
//   let aiMove = "";
//   const cleanUserMove = userMove.toString().toLowerCase();

//   switch (cleanUserMove) {
//     case "scissors":
//       aiMove = "rock";
//       break;
//     case "rock":
//       aiMove = "paper";
//       break;
//     case "paper":
//       aiMove = "scissors";
//       break;
//     default:
//       return `I only take 'rock', 'paper' or 'scissors' as an argument.`;
//   }
//   return aiMove;
// };

// console.log(`
// \tThe Unbeatable:`);
// console.log("\nWith 'paper' as an argument:");
// console.log(unbeatableRockPaperScissors("paper"));
// console.log("\nWith 'rock' as an argument:");
// console.log(unbeatableRockPaperScissors("ROck"));
// console.log("\nWith 'scissors' as an argument:");
// console.log(unbeatableRockPaperScissors("scissors"));
// console.log(unbeatableRockPaperScissors(1));

// // #2. The Honest

// const honestRockPaperScissor = userMove => {
//   let moves = ["paper", "rock", "scissor"];
//   let aiMove = randomPickerOne(moves);

//   const cleanUserMove = userMove.toString().toLowerCase();

//   if (!moves == cleanUserMove) {
//     return `I'm an honest function bro, be honest too and just write 'rock', 'paper', or 'scissors' as an argument.`;
//   }
//   return aiMove;
// };

// const randomPickerOne = moves => {
//   const index = Math.floor(Math.random() * moves.length);
//   return moves[index];
// };

// console.log(`
// \tThe Honest:`);
// console.log("\nWith 'paper' as an argument:");
// console.log(honestRockPaperScissor("paper"));
// console.log("\nWith 'rock' as an argument:");
// console.log(honestRockPaperScissor("ROck"));
// console.log("\nWith 'scissors' as an argument:");
// console.log(honestRockPaperScissor("scissors"));
// console.log(honestRockPaperScissor(0));

// // #3. Two Players

// const rpsWithTwoPlayers = (playerA, playerB) => {
//   let result = "";

//   console.log(`Player A plays ${playerA} and Player B plays ${playerB}`);

//   if (playerA == "paper" && playerB == "scissors") {
//     result = `Player B is the winner!`;
//   } else if (playerA == "rock" && playerB == "scissors") {
//     result = `Player A is the winner!`;
//   } else if (playerA == "scissors" && playerB == "paper") {
//     result = `Player A is the winner!`;
//   } else if (playerA == "rock" && playerB == "paper") {
//     result = `Player B is the winner!`;
//   } else if (playerA == "paper" && playerB == "rock") {
//     result = `Player A is the winner!`;
//   } else if (playerA == "scissors" && playerB == "rock") {
//     result = `Player B is the winner!`;
//   } else if (playerA === playerB) {
//     result = `It's a draw!`;
//   }
//   return result;
// };
// console.log(`
// \tWith Two Players:`);

// console.log(rpsWithTwoPlayers("paper", "paper"));
// console.log(rpsWithTwoPlayers("rock", "scissors"));
// console.log(rpsWithTwoPlayers("scissors", "paper"));
// console.log(rpsWithTwoPlayers("rock", "paper"));

// // #3a. Two Players (my own version using random for defining the moves and later check who won)
// // with forEach loop

// const options = ["paper", "rock", "scissors"];

// const moves = () => {
//   const index = Math.floor(Math.random() * options.length);
//   return options[index];
// };

// const checkWinner = (playerA, playerB) => {
//   if (playerA == playerB) {
//     return `It's a draw!`;
//   }

//   let winnerTable = [
//     ["rock", "scissors", 0],
//     ["paper", "scissors", 1],
//     ["scissors", "paper", 0],
//     ["scissors", "rock", 1],
//     ["rock", "paper", 1],
//     ["paper", "rock", 0]
//   ];

//   let winner;
//   winnerTable.forEach(tableEntry => {
//     if (tableEntry[0] == playerA && tableEntry[1] == playerB) {
//       let winnerIndex = tableEntry[2];
//       winner = tableEntry[winnerIndex];
//     }
//   });
//   return `And the winner is ${winner}`;
// };

// const playerA = moves();
// const playerB = moves();

// console.log(`
// \tWith Two Players Random:`);

// console.log(`Player A plays ${playerA} and Player B plays ${playerB}.`);
// console.log(checkWinner(playerA, playerB));

// 3.b with if else statements

const game = () => {
  const options = ["paper", "rock", "scissors"];

  const moves = () => {
    const index = Math.floor(Math.random() * options.length);
    return options[index];
  };
  const playerA = moves();
  const playerB = moves();
  console.log(`Player A plays ${playerA} and Player B plays ${playerB}`);

  const checkWinner = (playerA, playerB) => {
    let result = "";

    if (playerA == playerB) {
      return `It's a draw!`;
    } else if (playerA == "paper" && playerB == "scissors") {
      result = `Player B is the winner!`;
    } else if (playerA == "rock" && playerB == "scissors") {
      result = `Player A is the winner!`;
    } else if (playerA == "scissors" && playerB == "paper") {
      result = `Player A is the winner!`;
    } else if (playerA == "rock" && playerB == "paper") {
      result = `Player B is the winner!`;
    } else if (playerA == "paper" && playerB == "rock") {
      result = `Player A is the winner!`;
    } else if (playerA == "scissors" && playerB == "rock") {
      result = `Player B is the winner!`;
    }

    return result;
  };
};
console.log(`
\tWith Two Players Random:`);

game();
checkWinner(playerA, playerB);
console.log(checkWinner(playerA, playerB));
