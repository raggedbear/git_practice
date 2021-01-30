const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock'|| userInput ==='paper'||userInput ==='scissors'){
      return userInput;
    } else {
      console.log('Error!');
    }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
  return 'The game is a tie!';
}
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
}

const playGame = () =>{
  let userChoice = getUserChoice('scissors');
  console.log(`you threw ${userChoice}`);
  let computerChoice =getComputerChoice();
  console.log(`compute threw ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();