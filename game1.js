const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
const board = document.getElementById('board');
const scoreElement = document.getElementById('score');
let score = 0;

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function createBoard() {
  board.innerHTML = '';
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const color = getRandomColor();
      const gem = document.createElement('div');
      gem.className = `gem ${color}`;
      gem.dataset.row = r;
      gem.dataset.col = c;
      gem.dataset.color = color;
      gem.onclick = () => handleGemClick(r, c, color);
      board.appendChild(gem);
    }
  }
}

function handleGemClick(row, col, color) {
  console.log(`Clicked gem at (${row}, ${col}) with color ${color}`);
  // Add logic for selection/swapping/matching
}

document.getElementById('newGame').onclick = () => {
  score = 0;
  scoreElement.innerText = `Score: ${score}`;
  createBoard();
};

createBoard();
