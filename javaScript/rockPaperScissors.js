// 10.13.22
// I completed the Rock, Paper, or Scissors game project within Codecademy's Learn Javascript program.
// From this I practiced nesting functions, calling functions, and leaving functions unassigned.
// This was my first multistep javaScript coding experience and it was very challenging. I refered to the Get Unstuck video for help.
// I discovered simple mistakes like checking spelling, capitalization, and paying attention to whether functions were properly closed.
// Overall a great learning experience that I found a lot of value from.

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game is tied.";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won.";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You win!";
    } else {
      return "The computer won.";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won.";
    } else {
      return "The computer won.";
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("You picked: " + userChoice);
  console.log("The computer picked: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
