let gameSequence = [];
let userSequence = [];
let colors = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

// Start the game
document.addEventListener("keydown", function () {
  if (!started) {
    started = true;
    level = 0;
    gameSequence = [];
    nextLevel();
  }
});

// Button click handler
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", function () {
    if (!started){
         return;
    }
    const userColor = this.id;
    userSequence.push(userColor);
    flashUserButton(this);
    checkAnswer(userSequence.length - 1);
  });
});

// Flash button for game sequence
function flashGameButton(color) {
  const button = document.getElementById(color);
  button.classList.add("flash");
  setTimeout(() => button.classList.remove("flash"), 300);
}

// Flash button for user click
function flashUserButton(button) {
  button.classList.add("userFlash");
  setTimeout(() => button.classList.remove("userFlash"), 00);
}

// Move to next level
function nextLevel() {
  userSequence = [];
  level++;
  document.getElementById("level-title").innerText = `Level ${level}`;

  const randomColor = colors[Math.floor(Math.random() * 4)];
  gameSequence.push(randomColor);

  setTimeout(() => flashGameButton(randomColor), 1000);
}

// Check if user's input is correct
function checkAnswer(index) {
  if (userSequence[index] === gameSequence[index]) {
    if (userSequence.length === gameSequence.length) {
      setTimeout(nextLevel, 300);
    }
  } else {
    gameOver();
  }
}

// Game over logic
function gameOver() {
  document.body.classList.add("game-over");
  document.getElementById("level-title").innerText = "Game Over! Press any key to restart.";
  setTimeout(() => document.body.classList.remove("game-over"), 500);
  resetGame();
}

// Reset game
function resetGame() {
  started = false;
  gameSequence = [];
  userSequence = [];
  level = 0;
}
