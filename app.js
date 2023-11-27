const playerTurn = document.getElementById("player-turn");
const squares = document.querySelectorAll(".square");
const winnerText = document.getElementById("winner-text");
const resetButton = document.getElementById("button-reset");
const player1ScoreText = document.getElementById("player1-score");
const player2ScoreText = document.getElementById("player2-score");

let currentPlayer = 0;
player1ScoreText.innerText = 0;
player2ScoreText.innerText = 0;
let isFinished = false;
let numberOfMoves = 0;

const squareClickListener = (event) => {
  console.log(currentPlayer);
  const square = event.target;
  if (isFinished) return;
  if (square.innerText !== "") return;
  numberOfMoves++;
  if (currentPlayer === 0) {
    square.innerText = "X";
  } else {
    square.innerText = "O";
  }

  if (checkWinner()) {
    if (currentPlayer === 0) {
      player1ScoreText.innerText++;
      winnerText.innerText = "Player 1 Wins";
      winnerText.classList.add("show");
    } else {
      winnerText.innerText = "Player 2 Wins";
      winnerText.classList.add("show");
      player2ScoreText.innerText++;
    }
    isFinished = true;
    return;
  } else if (numberOfMoves === 9) {
    winnerText.innerText = "It's a draw!";
    winnerText.classList.add("show");
    isFinished = true;
    return;
  }

  if (currentPlayer === 0) {
    playerTurn.innerText = "Player 2 Turn";
    currentPlayer = 1;
  } else if (currentPlayer === 1) {
    playerTurn.innerText = "Player 1 Turn";
    currentPlayer = 0;
  }
};

const checkWinner = () => {
  const rowIndices = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const columnIndices = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  const diagIndices = [
    [0, 4, 8],
    [6, 4, 2],
  ];

  for (let row of rowIndices) {
    const winningRow = row.every((rowIndex) => {
      return (
        squares[rowIndex].innerText === squares[row[0]].innerText &&
        squares[rowIndex].innerText !== ""
      );
    });
    if (winningRow) {
      return true;
    }
  }

  for (let column of columnIndices) {
    const winningColumn = column.every((columnIndex) => {
      return (
        squares[columnIndex].innerText === squares[column[0]].innerText &&
        squares[columnIndex].innerText !== ""
      );
    });
    if (winningColumn) {
      return true;
    }
  }

  for (let diag of diagIndices) {
    const winningDiag = diag.every((diagIndex) => {
      return (
        squares[diagIndex].innerText === squares[diag[0]].innerText &&
        squares[diagIndex].innerText !== ""
      );
    });
    if (winningDiag) {
      return true;
    }
  }
};

squares.forEach((square) => {
  square.addEventListener("click", squareClickListener);
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
    playerTurn.innerText = "Player 1 Turn";
    currentPlayer = 0;
  } else {
    playerTurn.innerText = "Player 2 Turn";
    currentPlayer = 1;
  }
  numberOfMoves = 0;
};

resetButton.addEventListener("click", resetGame);
