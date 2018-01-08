const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    return userInput;
  } else {
    console.log("Error");
  }
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie";
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return "You have WON!";
    } else {
      return "You have LOST";
    }
  }

  if (userChoice === 'paper') {
    if(computerChoice === "rock") {
      return "You have WON!"
    } else {
      return "You have LOST";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You have WON!"
    } else {
      return "You have LOST"
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice)
  console.log('You threw: ' + computerChoice)

  console.log(determineWinner(userChoice, computerChoice));
}

playGame()
