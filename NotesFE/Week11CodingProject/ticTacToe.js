// Set background image using JavaScript
document.body.style.backgroundImage =
  "url('https://plus.unsplash.com/premium_photo-1689245691271-8053516024b4?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundAttachment = 'fixed';

// Game variables
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

// Reference to the turn heading
const turnElement = document.getElementById('turn');

// Apply Harcadeen font styles
turnElement.style.fontFamily = "'Bangers', cursive, sans-serif";
turnElement.style.fontSize = '48px'; // Bigger text for emphasis
turnElement.style.alignContent = 'center'; // Aligns content to the center
turnElement.style.color = '#000'; // Black color for visibility
turnElement.style.fontWeight = 'bold'; // Make it bold
turnElement.style.border = '2px solid black'; // Black border around text
turnElement.style.padding = '10px'; // Adds space inside the border
turnElement.style.display = 'inline-block'; // Prevents full-width stretching
turnElement.style.textAlign = 'center'; // Centers text inside the box
turnElement.style.width = '100%'; // Stretches the turn box to the size of the board

// Ensure the parent container centers the element
document.getElementById('turn').parentElement.style.textAlign = 'center';

// Function to render the board
function renderBoard() {
  const boardElement = document.getElementById('board');
  boardElement.innerHTML = ''; // Clear the board

  // Generate 9 cells using Bootstrap grid classes
  board.forEach((cell, index) => {
    const cellElement = document.createElement('button');
    cellElement.classList.add('col-4', 'btn', 'btn-light', 'cell');
    cellElement.style.height = '100px'; // Fixed height for each cell
    cellElement.style.fontSize = '2rem';
    cellElement.style.textAlign = 'center';
    cellElement.style.cursor = 'pointer';
    cellElement.style.border = '2px solid #000'; // Add a border around each cell
    cellElement.textContent = cell;

    // Add click event to make a move
    cellElement.onclick = () => makeMove(index);

    boardElement.appendChild(cellElement);
  });
}

// Function to make a move
function makeMove(index) {
  if (gameOver || board[index] !== '') return;

  board[index] = currentPlayer;
  renderBoard();

  if (checkWinner()) {
    showAlert(`${currentPlayer} Wins!`, 'success');
    gameOver = true;
  } else if (board.every((cell) => cell !== '')) {
    showAlert("It's a Draw!", 'warning');
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    turnElement.textContent = `${currentPlayer}'s Turn`;
  }
}

// Function to check if there's a winner
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombinations.some((combination) => {
    const [a, b, c] = combination;
    return board[a] === board[b] && board[b] === board[c] && board[a] !== '';
  });
}

// Function to show an alert
function showAlert(message, type) {
  const alertElement = document.getElementById('alert');
  const alertMessage = document.getElementById('alert-message');

  // Ensure text is centered within the alert box
  alertElement.style.textAlign = 'center';

  //Set Bootstrap alert styling
  alertElement.style.display = 'block';
  alertElement.style.border = '2px solid black';
  alertMessage.textContent = message;
  alertElement.className = `alert alert-${type} mt-3`;
}

// Reset the game
document.getElementById('reset').onclick = () => {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  document.getElementById('turn').textContent = `X's Turn`;
  renderBoard();
  document.getElementById('alert').style.display = 'none';
};

// Initial render
renderBoard();
