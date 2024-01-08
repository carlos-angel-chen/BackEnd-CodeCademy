let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random()*10);
}

const getAbsoluteDistance = (a, b) => {
  return Math.abs(a-b);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if (humanGuess>9 || humanGuess<0){
        return 'Out of range';
      }
  const humanCompareTarget = getAbsoluteDistance(targetGuess,humanGuess);
  const computerCompareTarget = getAbsoluteDistance(targetGuess,computerGuess);

  if (humanCompareTarget<=computerCompareTarget){
    return 'human';
  }
  else {
    return 'computer';
  }
}

const updateScore = winner => {
  if (winner === 'human'){
    humanScore++;
  }
  else if (winner === 'computer'){
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;