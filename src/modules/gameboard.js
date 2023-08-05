import createModal from './gameboardDialog'

/**
 * creates 100 'divs' with an 'id'
 * @param {HTMLDivElement} board to append the 'div's'
 */
function createGrid(board) {
  const gridSize = 100
  for (let i = 0; i < gridSize; i += 1) {
    const div = document.createElement('div')
    div.classList.add('block')
    div.setAttribute('id', i)
    board.appendChild(div)
  }
}

/**
 * creates a board for both player & computer
 * appends it to the main game-board
 */
function initializeGame() {
  const gameBoard = document.querySelector('.game-board')
  const playerBoard = document.createElement('div')
  const computerBoard = document.createElement('div')
  playerBoard.classList.add('player-board')
  computerBoard.classList.add('computer-board')

  // creating child 'div's' for both player boards
  createGrid(playerBoard)
  createGrid(computerBoard)

  gameBoard.appendChild(playerBoard)
  gameBoard.appendChild(computerBoard)
}

/**
 * display's returned dialog modal
 * @argument {Function} createGrid
 */
createModal(createGrid).showModal()

export { createGrid, initializeGame }
