const playerTurn = document.getElementById("player-turn");
const squares = document.querySelectorAll(".square");
const winnerText = document.getElementById("winner-text");
const resetButton = document.getElementById("button-reset");

let currentPlayer = 0;
let player1Score = 0;
let player2Score = 0;
let isFinished = false;

squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (isFinished) return;
    if (square.innerText !== "") return;
    if (currentPlayer === 0) {
      square.innerText = "X";
    } else {
      square.innerText = "O";
    }
    if (currentPlayer === 0) {
      currentPlayer === 1;
    } else {
      currentPlayer === 0;
    }
  });
});

function initializeSquares() {
  squares.forEach((square) => {
    square.innerText = "";
  });
}

const resetGame = () => {
  initializeSquares();
  isFinished = false;
  winnerText.classList.remove("show");
  if (currentPlayer === 1) {
    currentPlayer = 0;
  } else {
    currentPlayer = 1;
  }
};

resetButton.addEventListener("click", resetGame);
