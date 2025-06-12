const timer = document.getElementById("timer");
const choices = document.querySelector(".choices");
const choice = document.querySelectorAll(".choice");
const animation = document.getElementById("animation");
const compOutput = document.getElementById("computer-output");
const restart = document.getElementById("restart");

const Computerchoice = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️"
};

let interval;
let sec;
let userChoice = null;

function startGame() {
  // Reset values
  sec = 3;
  userChoice = null;
  const keys = Object.keys(Computerchoice);
  const random = keys[Math.floor(Math.random() * keys.length)];
  const compChoice = Computerchoice[random];

  timer.textContent = `Timer: ${sec} sec`;

  // Reset buttons
  choice.forEach((btn) => {
    btn.disabled = false;
    btn.classList.remove("disabled", "selected");
  });

  // Reset output and animation
  compOutput.style.display = "none";
  compOutput.innerHTML = "";
  animation.style.display = "block";

  // Allow button selection
  choice.forEach((btn) => {
    btn.onclick = () => {
      if (userChoice !== null) return;
      btn.classList.add("selected");
      userChoice = btn.getAttribute("data-choice");
    };
  });

  // Timer countdown
  interval = setInterval(() => {
    timer.textContent = `Timer: ${sec} sec`;
    sec--;

    if (sec < 0) {
      clearInterval(interval);
      timer.textContent = "STOP";

      // Disable buttons
      choice.forEach((btn) => {
        btn.disabled = true;
        btn.classList.add("disabled");
      });

      // Hide animation
      animation.style.display = "none";

      // Show computer's choice
      compOutput.style.display = "block";
      compOutput.innerHTML = compChoice;

      // Show result
      const userScore = document.getElementById("user-score");
      const computerScore = document.getElementById("comp-score");

      if (userChoice) {
        if (userChoice === random) {
          timer.innerHTML = "It's a tie!";
          userScore.textContent = parseInt(userScore.textContent) + 1;
          computerScore.textContent = parseInt(computerScore.textContent) + 1;
        } else if (
          (userChoice === "rock" && random === "scissors") ||
          (userChoice === "paper" && random === "rock") ||
          (userChoice === "scissors" && random === "paper")
        ) {
          timer.innerHTML = "You win!";
          userScore.textContent = parseInt(userScore.textContent) + 1;
        } else {
          timer.innerHTML = "You lose!";
          computerScore.textContent = parseInt(computerScore.textContent) + 1;
        }
      } else {
        timer.innerHTML = "You didn't choose! You lose!";
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
      }
    }
  }, 1000);
}

// Start game on load
startGame();

// Restart game on button click
restart.addEventListener("click", startGame);
