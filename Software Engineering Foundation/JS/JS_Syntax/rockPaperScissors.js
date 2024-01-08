const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput==='rock' || userInput==='paper' || userInput==='scissors') {
    return userInput;
  }
  else if(userInput==='bomb'){
    return userInput;
  }
  else {
    console.log('Error!');
  }
}

function getComputerChoice(){
  let randomNum = Math.floor(Math.random()*3);
  switch(randomNum){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      break;
  }
}

const determineWinner = (userChoice, computerChoice)=>{
  if (userChoice==='bomb'){
    return 'The human won';
  }
  if (userChoice===computerChoice){
    return 'The game is a tie!';
  }
  if(userChoice==='rock'){
    if (computerChoice==='paper'){
      return 'The computer won';
    }
    else if (computerChoice==='scissors'){
      return 'The human won';
    }
  }
  else if(userChoice==='paper'){
    if (computerChoice==='scissors'){
      return 'The computer won';
    }
    else if (computerChoice==='rock'){
      return 'The human won';
    }
  }
  else if(userChoice==='scissors'){
    if (computerChoice==='rock'){
      return 'The computer won';
    }
    else if (computerChoice==='paper'){
      return 'The human won';
    }
  }
}

function playGame(){
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()