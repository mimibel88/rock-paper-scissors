const choices = ["rock", "paper", "scissors"];

const form = document.querySelector("#game-form");

// Function to randomly choose for the computer
const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

// Function to determine the winner
const checkWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Win";
  } else {
    return "Lose";
  }
};

// Listen for the form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the player's choice
  const playerChoice = document.querySelector("#player-choice").value;

  // Get the computer's random choice
  const computerChoice = getComputerChoice();

  // Check who won
  const result = checkWinner(playerChoice, computerChoice);

  // Show everything in the console
  console.log("Player chose:", playerChoice);
  console.log("Computer chose:", computerChoice);
  console.log("Result:", result);
});
